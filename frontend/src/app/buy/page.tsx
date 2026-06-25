"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function BuyCrypto() {
  const [coins, setCoins] = useState<any[]>([]);
  const [selectedCoinId, setSelectedCoinId] = useState("");
  const [usdAmount, setUsdAmount] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1")
      .then((res) => res.json())
      .then((data) => {
        setCoins(data);
        if (data.length > 0) setSelectedCoinId(data[0].id);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Failed pto pull data:", err);
        setIsLoading(false);
      });
  }, []);

  const selectedCoin = coins.find((c) => c.id === selectedCoinId);
  const estimatedCrypto = selectedCoin && usdAmount 
    ? (parseFloat(usdAmount) / selectedCoin.current_price).toFixed(6) 
    : "0.00";

  // 👇 LOGIKA ILUSI POTONG DUIT
  const handleBuy = (e: any) => {
    e.preventDefault();
    let cost = parseFloat(usdAmount);
    
    if (!usdAmount || cost <= 0) return alert("Isi dulu duitnya boiii!");

    // Cek dompet lu
    let currentBalance = parseFloat(localStorage.getItem("my_balance") || "10000");
    if (cost > currentBalance) return alert(`Duit lu kaga cukup! Sisa saldo: $${currentBalance}`);

    // 1. Potong Saldo
    let newBalance = currentBalance - cost;
    localStorage.setItem("my_balance", newBalance.toString());

    // 2. Tambahin koin ke Porto
    let porto = JSON.parse(localStorage.getItem("my_porto") || "[]");
    let existing = porto.find((c: any) => c.id === selectedCoin.id);

    if (existing) {
      existing.amount = (parseFloat(existing.amount) + parseFloat(estimatedCrypto)).toFixed(4);
      existing.value = (parseFloat(existing.value) + cost).toFixed(2);
    } else {
      porto.push({
        id: selectedCoin.id,
        coin: `${selectedCoin.name} (${selectedCoin.symbol.toUpperCase()})`,
        amount: estimatedCrypto,
        value: cost.toFixed(2),
        color: "#3b82f6"
      });
    }
    localStorage.setItem("my_porto", JSON.stringify(porto));

    alert(`Sukses! Beli ${estimatedCrypto} ${selectedCoin.symbol.toUpperCase()} senilai $${cost} 🚀`);
    router.push("/dashboard"); 
  };

  return (
    <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#111', color: '#fff', padding: '20px' }}>
      <div style={{ maxWidth: '500px', width: '100%', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '10px' }}>Buy Crypto</h1>
          <p style={{ color: '#8a8f9e' }}>Pilih koin favorit lu dan mulai perjalanan ke bulan! 🚀</p>
        </div>

        <div style={{ backgroundColor: '#1e2029', padding: '40px', borderRadius: '24px', border: '1px solid #2b2f3a', boxShadow: '0 10px 40px rgba(0,0,0,0.6)' }}>
          {isLoading ? (
            <p style={{ textAlign: 'center', color: '#8a8f9e' }}>Manggil data dari market bray...</p>
          ) : (
            <form onSubmit={handleBuy} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', color: '#8a8f9e', marginBottom: '10px', fontSize: '14px', fontWeight: '500' }}>Pilih Aset</label>
                <select value={selectedCoinId} onChange={(e) => setSelectedCoinId(e.target.value)} style={{ width: '100%', padding: '16px', backgroundColor: '#111', border: '1px solid #2b2f3a', color: '#fff', borderRadius: '12px', outline: 'none', fontSize: '16px', cursor: 'pointer' }}>
                  {coins.map((coin) => (
                    <option key={coin.id} value={coin.id}>{coin.name} ({coin.symbol.toUpperCase()})</option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ display: 'block', color: '#8a8f9e', marginBottom: '10px', fontSize: '14px', fontWeight: '500' }}>Jumlah Beli (USD)</label>
                <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#111', border: '1px solid #2b2f3a', borderRadius: '12px', padding: '0 16px' }}>
                  <span style={{ color: '#8a8f9e', fontSize: '16px', fontWeight: 'bold' }}>$</span>
                  <input type="number" placeholder="Contoh: 100" value={usdAmount} onChange={(e) => setUsdAmount(e.target.value)} style={{ width: '100%', padding: '16px 10px', backgroundColor: 'transparent', border: 'none', color: '#fff', outline: 'none', fontSize: '16px' }} />
                </div>
              </div>

              {selectedCoin && (
                <div style={{ backgroundColor: '#111', padding: '15px', borderRadius: '12px', border: '1px dashed #2b2f3a' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <span style={{ color: '#8a8f9e', fontSize: '14px' }}>Harga per {selectedCoin.symbol.toUpperCase()}</span>
                    <span style={{ fontWeight: 'bold' }}>${selectedCoin.current_price.toLocaleString()}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#8a8f9e', fontSize: '14px' }}>Estimasi Diterima</span>
                    <span style={{ fontWeight: 'bold', color: '#14f195' }}>~ {estimatedCrypto} {selectedCoin.symbol.toUpperCase()}</span>
                  </div>
                </div>
              )}

              <button type="submit" style={{ width: '100%', padding: '18px', backgroundColor: '#3b82f6', color: '#fff', border: 'none', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px', marginTop: '10px', transition: '0.3s' }}>
                Confirm Buy
              </button>
            </form>
          )}
        </div>
        <div style={{ marginTop: '30px', textAlign: 'center' }}>
          <Link href="/dashboard" style={{ color: '#555', textDecoration: 'none', fontSize: '14px' }}>← Kembali ke Dashboard</Link>
        </div>
      </div>
    </section>
  );
}
