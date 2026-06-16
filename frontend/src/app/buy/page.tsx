"use client";

import { useState } from "react";
import Link from "next/link";

export default function BuyCrypto() {
  const [amount, setAmount] = useState("");
  const [coin, setCoin] = useState("BTC");
  const [showToast, setShowToast] = useState(false);

  const handleTrade = (e: any) => {
    e.preventDefault();
    if (!amount) return;
    
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
    setAmount("");
  };

  return (
    // Pembungkus utama biar full screen dan nengah
    <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#111', color: '#fff', paddingTop: '100px', paddingBottom: '50px' }}>
      
      <div style={{ maxWidth: '500px', width: '90%', margin: '0 auto' }}>
        
        {/* Header Halaman */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '10px' }}>Buy Crypto</h1>
          <p style={{ color: '#8a8f9e' }}>Pilih koin favorit lu dan mulai perjalanan ke bulan! 🚀</p>
        </div>

        {/* Box Trading (Card UI) */}
        <div style={{ backgroundColor: '#1e2029', padding: '35px', borderRadius: '24px', border: '1px solid #2b2f3a', boxShadow: '0 10px 40px rgba(0,0,0,0.6)' }}>
          <form onSubmit={handleTrade} style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            
            {/* Dropdown Pilih Koin */}
            <div>
              <label style={{ display: 'block', color: '#8a8f9e', marginBottom: '10px', fontSize: '14px', fontWeight: '500' }}>Pilih Aset</label>
              <select 
                value={coin}
                onChange={(e) => setCoin(e.target.value)}
                style={{ width: '100%', padding: '16px', backgroundColor: '#111', border: '1px solid #2b2f3a', color: '#fff', borderRadius: '12px', outline: 'none', cursor: 'pointer', fontSize: '16px', appearance: 'none' }}
              >
                <option value="BTC">Bitcoin (BTC)</option>
                <option value="ETH">Ethereum (ETH)</option>
                <option value="BNB">Binance Coin (BNB)</option>
                <option value="SOL">Solana (SOL)</option>
              </select>
            </div>

            {/* Input Jumlah Uang */}
            <div>
              <label style={{ display: 'block', color: '#8a8f9e', marginBottom: '10px', fontSize: '14px', fontWeight: '500' }}>Jumlah Beli (USD)</label>
              <div style={{ position: 'relative' }}>
                <span style={{ position: 'absolute', left: '16px', top: '16px', color: '#8a8f9e', fontSize: '16px', fontWeight: 'bold' }}>$</span>
                <input 
                  type="number" 
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  style={{ width: '100%', padding: '16px 16px 16px 40px', backgroundColor: '#111', border: '1px solid #2b2f3a', color: '#fff', borderRadius: '12px', outline: 'none', fontSize: '16px', boxSizing: 'border-box' }}
                  required
                />
              </div>
            </div>

            {/* Detail Ringkasan */}
            <div style={{ backgroundColor: '#15161c', padding: '20px', borderRadius: '12px', border: '1px solid #2b2f3a' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', marginBottom: '10px' }}>
                <span style={{ color: '#8a8f9e' }}>Harga per {coin}</span>
                <span style={{ color: '#fff', fontWeight: 'bold' }}>~ Live Market</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                <span style={{ color: '#8a8f9e' }}>Estimasi Diterima</span>
                <span style={{ color: '#27ae60', fontWeight: 'bold' }}>~ Otomatis Dihitung</span>
              </div>
            </div>

            {/* Tombol Trade Utama */}
            <button 
              type="submit" 
              style={{ width: '100%', padding: '18px', backgroundColor: '#2563eb', color: '#fff', border: 'none', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px', marginTop: '5px', transition: '0.3s' }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1d4ed8'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
            >
              Confirm Buy
            </button>

          </form>
        </div>

        {/* Tombol Balik ke Homepage */}
        <div style={{ marginTop: '40px', textAlign: 'center' }}>
          <Link href="/" style={{ color: '#8a8f9e', textDecoration: 'none', fontSize: '15px' }}>
            ← Kembali ke Beranda
          </Link>
        </div>

      </div>

      {/* Toast Notification (Tipu-tipu) */}
      {showToast && (
        <div style={{ position: 'fixed', top: '100px', right: '30px', backgroundColor: '#27ae60', color: '#fff', padding: '16px 24px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', zIndex: 1000 }}>
          <span style={{ fontSize: '28px' }}>✅</span>
          <div>
            <p style={{ margin: '0 0 4px 0', fontWeight: 'bold', fontSize: '16px' }}>Transaksi Sukses!</p>
            <p style={{ margin: 0, fontSize: '13px', opacity: 0.9 }}>Berhasil membeli {coin} senilai ${amount}</p>
          </div>
        </div>
      )}
    </section>
  );
}