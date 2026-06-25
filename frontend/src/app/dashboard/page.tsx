"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [namaUser, setNamaUser] = useState("Loading...");
  const [totalBalance, setTotalBalance] = useState("0.00");
  const [assets, setAssets] = useState<any[]>([]);
  const [isLoadingPorto, setIsLoadingPorto] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const simpenanNama = localStorage.getItem("username");
    if (!simpenanNama) {
      router.push("/login");
    } else {
      setNamaUser(simpenanNama);

      // 👇 BACA DOMPET BROWSER
      let localBalance = localStorage.getItem("my_balance");
      let localPorto = localStorage.getItem("my_porto");

      // Kalau baru pertama main, kasih 10k gratis!
      if (!localBalance) {
        localBalance = "10000";
        localStorage.setItem("my_balance", localBalance);
      }
      if (!localPorto) {
        localPorto = "[]"; // Porto kosong di awal
        localStorage.setItem("my_porto", localPorto);
      }

      setTotalBalance(parseFloat(localBalance).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}));
      setAssets(JSON.parse(localPorto));
      setIsLoadingPorto(false);
    }
  }, [router]);

  const handleLogout = (e: any) => {
    e.preventDefault();
    localStorage.removeItem("username");
    localStorage.removeItem("my_balance"); // Hapus dompet biar reset pas login lagi
    localStorage.removeItem("my_porto");
    router.push("/login");
  };

  return (
    <section style={{ minHeight: '100vh', backgroundColor: '#111', color: '#fff', padding: '60px 20px 50px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        <div style={{ marginBottom: '30px' }}>
          <Link href="/" style={{ color: '#8a8f9e', textDecoration: 'none', fontSize: '15px', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
            ← Back to Homepage
          </Link>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
          <div>
            <h1 style={{ fontSize: '32px', fontWeight: 'bold', margin: '0 0 5px 0' }}>Dashboard</h1>
            <p style={{ color: '#8a8f9e', margin: 0 }}>Welcome back, {namaUser}! 🚀</p>
          </div>
          <button onClick={handleLogout} style={{ padding: '10px 20px', backgroundColor: '#2b2f3a', color: '#fff', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>
            Log Out
          </button>
        </div>

        <div style={{ backgroundColor: '#1e2029', padding: '40px', borderRadius: '24px', border: '1px solid #2b2f3a', boxShadow: '0 10px 40px rgba(0,0,0,0.6)', marginBottom: '30px', textAlign: 'center' }}>
          <p style={{ color: '#8a8f9e', fontSize: '16px', marginBottom: '10px' }}>Available USD Balance</p>
          <h2 style={{ fontSize: '48px', fontWeight: 'bold', margin: '0 0 20px 0', color: '#fff' }}>
            {isLoadingPorto ? "Menghitung..." : <><span style={{ color: '#3b82f6' }}>$</span>{totalBalance}</>}
          </h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
            <Link href="/buy" style={{ padding: '12px 30px', backgroundColor: '#3b82f6', color: '#fff', borderRadius: '12px', textDecoration: 'none', fontWeight: 'bold' }}>Buy Crypto</Link>
            <Link href="/sell" style={{ padding: '12px 30px', backgroundColor: '#e74c3c', color: '#fff', borderRadius: '12px', textDecoration: 'none', fontWeight: 'bold' }}>Sell Crypto</Link>
          </div>
        </div>

        <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '15px' }}>My Portfolio</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {isLoadingPorto ? (
            <p style={{ color: '#8a8f9e', textAlign: 'center' }}>Narik data dompet...</p>
          ) : assets.length === 0 ? (
            <p style={{ color: '#8a8f9e', textAlign: 'center', padding: '20px', backgroundColor: '#1e2029', borderRadius: '16px' }}>Belum ada koin nih boiii, gas beli dulu! 🚀</p>
          ) : (
            assets.map((asset: any, index: number) => (
              <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#1e2029', padding: '20px', borderRadius: '16px', border: '1px solid #2b2f3a' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: asset.color, display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', color: '#fff', fontSize: '12px' }}>
                    {asset.coin.substring(asset.coin.indexOf('(')+1, asset.coin.indexOf(')'))}
                  </div>
                  <div>
                    <h4 style={{ margin: '0 0 5px 0', fontSize: '16px', fontWeight: 'bold' }}>{asset.coin}</h4>
                    <p style={{ margin: 0, color: '#8a8f9e', fontSize: '14px' }}>{asset.amount} Coins</p>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <h4 style={{ margin: '0 0 5px 0', fontSize: '16px', fontWeight: 'bold' }}>${parseFloat(asset.value).toLocaleString()}</h4>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </section>
  );
}
