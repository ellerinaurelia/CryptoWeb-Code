"use client";

import { useState } from "react";
import Link from "next/link";

export default function Trend() {
  // Logic buat ganti tab aktif
  const [activeTab, setActiveTab] = useState("Crypto");

  // Tab udah disunat! Dibuang yang ga guna, disamain vibe-nya sama Market Update
  const tabs = ["Crypto", "DeFi", "BSC", "NFT", "Metaverse", "Gaming", "Music"];

  // Data koin gabungan (Disinkronkan sama data Market Update lu!)
  const trendData = [
    // --- BAWAAN ASLI LU ---
    { id: 1, name: "Bitcoin", symbol: "BTC/USD", value: "46,168.95", price: "46,168.95", change: "-0.79%", color: "red", icon: "/images/coin-1.svg", category: "Crypto", active: false },
    { id: 2, name: "Ethereum", symbol: "ETH/USD", value: "3,480.04", price: "3,480.04", change: "+10.55%", color: "green", icon: "/images/coin-2.svg", category: "Crypto", active: true },
    { id: 3, name: "Tether", symbol: "USDT/USD", value: "1.00", price: "1.00", change: "-0.01%", color: "red", icon: "/images/coin-3.svg", category: "DeFi", active: false },
    { id: 4, name: "BNB", symbol: "BNB/USD", value: "443.56", price: "443.56", change: "-1.24%", color: "red", icon: "/images/coin-4.svg", category: "BSC", active: false },
    
    // --- DATA SINKRONISASI DARI MARKET UPDATE ---
    { id: 5, name: "ApeCoin", symbol: "APE/USD", value: "1.85", price: "1.85", change: "-1.10%", color: "red", icon: "/images/coin-1.svg", category: "NFT", active: false },
    { id: 6, name: "Decentraland", symbol: "MANA/USD", value: "2.50", price: "2.50", change: "+10.20%", color: "green", icon: "/images/coin-3.svg", category: "Metaverse", active: false },
    { id: 7, name: "Axie Infinity", symbol: "AXS/USD", value: "15.20", price: "15.20", change: "+5.40%", color: "green", icon: "/images/coin-2.svg", category: "Gaming", active: false },
    { id: 8, name: "Audius", symbol: "AUDIO/USD", value: "0.35", price: "0.35", change: "+2.10%", color: "green", icon: "/images/coin-4.svg", category: "Music", active: false },
  ];

  // Fungsi saringnya (Filter)
  const filteredData = trendData.filter((coin) => coin.category === activeTab);

  return (
    <section className="section trend" id="trend" aria-label="crypto trend" data-section>
      <div className="container">
        <div className="trend-tab">
          
          {/* TAB NAVIGATION */}
          <ul className="tab-nav">
            {tabs.map((tab) => (
              <li key={tab}>
                <button 
                  className={`tab-btn ${activeTab === tab ? "active" : ""}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              </li>
            ))}
          </ul>

          {/* TAB CONTENT (CARD LIST) */}
          <ul className="tab-content">
            {/* Kalau data di tab tersebut belum ada, tampilin teks ini */}
            {filteredData.length === 0 ? (
              <li style={{ width: '100%', textAlign: 'center', color: '#888', padding: '20px' }}>
                Belum ada data koin untuk kategori {activeTab}
              </li>
            ) : (
              // Kalau ada datanya, render kartu koinnya
              filteredData.map((coin) => (
                <li key={coin.id}>
                  <div className={`trend-card ${coin.active ? "active" : ""}`}>
                    <div className="card-title-wrapper">
                      <img src={coin.icon} width="24" height="24" alt={`${coin.name} logo`} />
                      <Link href="#" className="card-title">
                        {coin.name} <span className="span">{coin.symbol}</span>
                      </Link>
                    </div>

                    <data className="card-value" value={coin.value.replace(',', '')}>
                      USD {coin.value}
                    </data>

                    <div className="card-analytics">
                      <data className="current-price" value={coin.price.replace(',', '')}>
                        {coin.price}
                      </data>
                      <div className={`badge ${coin.color}`}>{coin.change}</div>
                    </div>
                  </div>
                </li>
              ))
            )}
          </ul>

        </div>
      </div>
    </section>
  );
}
