"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SellCrypto() {
  const [coins, setCoins] = useState<any[]>([]);
  const [porto, setPorto] = useState<any[]>([]);
  const [selectedCoinId, setSelectedCoinId] = useState("");
  const [cryptoAmount, setCryptoAmount] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // 1. Intip kantong koin lu
    const localPorto = JSON.parse(localStorage.getItem("my_porto") || "[]");
    setPorto(localPorto);

    // 2. Tarik harga pasar live biar ngitung duitnya pas
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1")
      .then((res) => res.json())
      .then((data) => {
        setCoins(data);
        if (localPorto.length > 0) {
          setSelectedCoinId(localPorto[0].id); // Default pilih koin pertama yang lu punya
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Gagal narik data pasar:", err);
        setIsLoading(false);
      });
  }, []);

  const selectedCoinData = coins.find((c) => c.id === selectedCoinId);
  const ownedCoin = porto.find((c) => c.id === selectedCoinId);

  // Kalkulator Jual = Jumlah koin x Harga live saat ini
  const estimatedUSD = selectedCoinData && cryptoAmount 
    ? (parseFloat(cryptoAmount) * selectedCoinData.current_price).toFixed(2) 
    : "0.00";

  // 👇 LOGIKA ILUSI JUAL KOIN
  const handleSell = (e: any) => {
    e.preventDefault();
    let amountToSell = parseFloat(cryptoAmount);
    
    if (!cryptoAmount || amountToSell <= 0) return alert("Isi dulu jumlah koinnya boiii! Masa jual angin wkwk");
    if (!ownedCoin) return alert("Lu kaga punya koin ini boiii! Beli dulu sana.");
    if (amountToSell > parseFloat(ownedCoin.amount)) return alert(`Koin lu kaga cukup! Lu cuma punya ${ownedCoin.amount} keping doang.`);

    // 1. Cairin koin jadi duit (Tambah Saldo)
    let currentBalance = parseFloat(localStorage.getItem("my_balance") || "10000");
    let newBalance = currentBalance + parseFloat(estimatedUSD);
    localStorage.setItem("my_balance", newBalance.toString());

    // 2. Potong/Hapus koin dari Portofolio lu
    let newPorto = porto.map(c => {
      if (c.id === selectedCoinId) {
        let sisaKoin = parseFloat(c.amount) - amountToSell;
        // Turunin juga nilai modalnya biar logis
        let sisaValue = parseFloat(c.value) - (parseFloat(c.value) * (amountToSell / parseFloat(c.amount)));
        return { ...c, amount: sisaKoin.toFixed(6), value: sisaValue.toFixed(2) };
      }
      return c;
    }).filter(c => parseFloat(c.amount) > 0.000001); // Kalau koinnya sisa 0, tendang dari dompet!

    localStorage.setItem("my_porto", JSON.stringify(newPorto));

    alert(`Sukses Cair! 💸 Lu ngejual ${amountToSell} keping dan dapet $${estimatedUSD}`);
    router.push("/dashboard"); 
  };

  return (
    <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#111', color: '#fff', padding: '20px' }}>
      <div style={{ maxWidth: '500px', width: '100%', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '10px' }}>Sell Crypto</h1>
          <p style={{ color: '#8a8f9e' }}>Cairin koin lu jadi Dollar sekarang! 💸</p>
        </div>

        <div style={{ backgroundColor: '#1e2029', padding: '40px', borderRadius: '24px', border: '1px solid #2b2f3a', boxShadow: '0 10px 40px rgba(0,0,0,0.6)' }}>
          {isLoading ? (
            <p style={{ textAlign: 'center', color: '#8a8f9e' }}>Mengecek dompet lu bray...</p>
          ) : porto.length === 0 ? (
            <div style={{ textAlign: 'center' }}>
              <p style={{ color: '#8a8f9e', marginBottom: '20px' }}>Lu belum punya koin sama sekali boiii!</p>
              <Link href="/buy" style={{ display: 'inline-block', padding: '12px 30px', backgroundColor: '#3b82f6', color: '#fff', borderRadius: '12px', textDecoration: 'none', fontWeight: 'bold' }}>
                Beli Koin Dulu 🚀
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSell} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              <div>
                <label style={{ display: 'block', color: '#8a8f9e', marginBottom: '10px', fontSize: '14px', fontWeight: '500' }}>Pilih Koin dari Dompet Lu</label>
                <select 
                  value={selectedCoinId}
                  onChange={(e) => setSelectedCoinId(e.target.value)}
                  style={{ width: '100%', padding: '16px', backgroundColor: '#111', border: '1px solid #2b2f3a', color: '#fff', borderRadius: '12px', outline: 'none', fontSize: '16px', cursor: 'pointer' }}
                >
                  {porto.map((coin) => (
                    <option key={coin.id} value={coin.id}>
                      {coin.coin} - Punya {coin.amount} keping
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ display: 'block', color: '#8a8f9e', marginBottom: '10px', fontSize: '14px', fontWeight: '500' }}>Jumlah Koin Mau Dijual</label>
                <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#111', border: '1px solid #2b2f3a', borderRadius: '12px', padding: '0 16px' }}>
                  <input 
                    type="number" 
                    placeholder="Contoh: 0.05"
                    value={cryptoAmount}
                    onChange={(e) => setCryptoAmount(e.target.value)}
                    style={{ width: '100%', padding: '16px 10px', backgroundColor: 'transparent', border: 'none', color: '#fff', outline: 'none', fontSize: '16px' }}
                  />
                </div>
              </div>

              {selectedCoinData && ownedCoin && (
                <div style={{ backgroundColor: '#111', padding: '15px', borderRadius: '12px', border: '1px dashed #2b2f3a' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <span style={{ color: '#8a8f9e', fontSize: '14px' }}>Harga Live Sekarang</span>
                    <span style={{ fontWeight: 'bold' }}>${selectedCoinData.current_price.toLocaleString()}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#8a8f9e', fontSize: '14px' }}>Duit Cair Ke Saldo</span>
                    <span style={{ fontWeight: 'bold', color: '#e74c3c' }}>~ ${estimatedUSD}</span>
                  </div>
                </div>
              )}

              <button 
                type="submit" 
                style={{ width: '100%', padding: '18px', backgroundColor: '#e74c3c', color: '#fff', border: 'none', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px', marginTop: '10px', transition: '0.3s' }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#c0392b'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#e74c3c'}
              >
                Confirm Sell
              </button>

            </form>
          )}
        </div>

        <div style={{ marginTop: '30px', textAlign: 'center' }}>
          <Link href="/dashboard" style={{ color: '#555', textDecoration: 'none', fontSize: '14px' }}>
            ← Kembali ke Dashboard
          </Link>
        </div>

      </div>
    </section>
  );
}
