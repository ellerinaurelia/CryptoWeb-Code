"use client";

import { useState } from "react";
import Link from "next/link";

export default function Trend() {
  // Logic buat ganti tab aktif
  const [activeTab, setActiveTab] = useState("Crypto");

  const tabs = ["Crypto", "DeFi", "BSC", "NFT", "Metaverse", "Polkadot", "Solana", "Opensea", "Makersplace"];

  // Data koin lu dari index.html
  const trendData = [
    { id: 1, name: "Bitcoin", symbol: "BTC/USD", value: "46,168.95", price: "36,641.20", change: "-0.79%", color: "red", icon: "/images/coin-1.svg" },
    { id: 2, name: "Ethereum", symbol: "ETH/USD", value: "3,480.04", price: "36,641.20", change: "+10.55%", color: "green", icon: "/images/coin-2.svg", active: true },
    { id: 3, name: "Tether", symbol: "USDT/USD", value: "1.00", price: "36,641.20", change: "-0.01%", color: "red", icon: "/images/coin-3.svg" },
    { id: 4, name: "BNB", symbol: "BNB/USD", value: "443.56", price: "36,641.20", change: "-1.24%", color: "red", icon: "/images/coin-4.svg" },
  ];

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
            {trendData.map((coin) => (
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
            ))}
          </ul>

        </div>
      </div>
    </section>
  );
}
