"use client";

import { useState } from "react";
import Link from "next/link";

export default function MarketUpdate() {
  // 1. State buat nyimpen tab mana yang lagi diklik
  const [activeTab, setActiveTab] = useState("View All");

  const marketTabs = ["View All", "Metaverse", "Entertainment", "Energy", "NFT", "Gaming", "Music"];

  // 2. Data koin (UDAH GWE TAMBAHIN 'category' BIAR BISA DIFILTER)
  const coins = [
    { rank: 1, name: "Bitcoin", symbol: "BTC", category: "Energy", icon: "/images/coin-1.svg", price: "$56,623.54", change: "+1.45%", isUp: true, marketCap: "$880,423,640,582", chart: "/images/chart-1.svg" },
    { rank: 2, name: "Ethereum", symbol: "ETH", category: "NFT", icon: "/images/coin-2.svg", price: "$56,623.54", change: "-5.12%", isUp: false, marketCap: "$880,423,640,582", chart: "/images/chart-2.svg" },
    { rank: 3, name: "Tether", symbol: "USDT/USD", category: "Energy", icon: "/images/coin-3.svg", price: "$56,623.54", change: "+1.45%", isUp: true, marketCap: "$880,423,640,582", chart: "/images/chart-1.svg" },
    { rank: 4, name: "BNB", symbol: "BNB/USD", category: "Entertainment", icon: "/images/coin-4.svg", price: "$56,623.54", change: "-3.75%", isUp: false, marketCap: "$880,423,640,582", chart: "/images/chart-2.svg" },
    { rank: 5, name: "Solana", symbol: "SOL", category: "Metaverse", icon: "/images/coin-5.svg", price: "$56,623.54", change: "+1.45%", isUp: true, marketCap: "$880,423,640,582", chart: "/images/chart-1.svg" },
    { rank: 6, name: "XRP", symbol: "XRP", category: "Entertainment", icon: "/images/coin-6.svg", price: "$56,623.54", change: "-2.22%", isUp: false, marketCap: "$880,423,640,582", chart: "/images/chart-2.svg" },
    { rank: 7, name: "Cardano", symbol: "ADA", category: "Gaming", icon: "/images/coin-7.svg", price: "$56,623.54", change: "+0.8%", isUp: true, marketCap: "$880,423,640,582", chart: "/images/chart-1.svg" },
    { rank: 8, name: "Avalanche", symbol: "AVAX", category: "Music", icon: "/images/coin-8.svg", price: "$56,623.54", change: "+1.41%", isUp: true, marketCap: "$880,423,640,582", chart: "/images/chart-1.svg" },
  ];

  // 3. LOGIC FILTER: Kalau "View All", keluarin semua. Kalau bukan, saring sesuai kategori
  const filteredCoins = activeTab === "View All" 
    ? coins 
    : coins.filter(coin => coin.category === activeTab);

  return (
    // id="market" penting di sini biar Navbar "Buy Crypto" kaga nyasar
    <section className="section market" id="market" aria-label="market update" data-section>
      <div className="container">
        
        <div className="title-wrapper">
          <h2 className="h2 section-title">Market Update</h2>
          <Link href="#" className="btn-link">See All Coins</Link>
        </div>

        <div className="market-tab">
          
          {/* TAB NAVIGATION */}
          <ul className="tab-nav">
            {marketTabs.map((tab) => (
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

          <table className="market-table">
            <thead className="table-head">
              <tr className="table-row table-title">
                <th className="table-heading"></th>
                <th className="table-heading" scope="col">#</th>
                <th className="table-heading" scope="col">Name</th>
                <th className="table-heading" scope="col">Last Price</th>
                <th className="table-heading" scope="col">24h %</th>
                <th className="table-heading" scope="col">Market Cap</th>
                <th className="table-heading" scope="col">Last 7 Days</th>
                <th className="table-heading"></th>
              </tr>
            </thead>

            {/* TABEL ISI KOIN */}
            <tbody className="table-body">
              {filteredCoins.length > 0 ? (
                // PAKE filteredCoins.map BUKAN coins.map
                filteredCoins.map((coin) => (
                  <tr key={coin.rank} className="table-row">
                    <td className="table-data">
                      <button className="add-to-fav" aria-label="Add to favourite">
                        ⭐
                      </button>
                    </td>
                    <th className="table-data rank" scope="row">{coin.rank}</th>
                    <td className="table-data">
                      <div className="wrapper">
                        <img src={coin.icon} width="20" height="20" alt={`${coin.name} logo`} className="img" />
                        <h3>
                          <Link href="#" className="coin-name">
                            {coin.name} <span className="span">{coin.symbol}</span>
                          </Link>
                        </h3>
                      </div>
                    </td>
                    <td className="table-data last-price">{coin.price}</td>
                    <td className={`table-data last-update ${coin.isUp ? "green" : "red"}`}>
                      {coin.change}
                    </td>
                    <td className="table-data market-cap">{coin.marketCap}</td>
                    <td className="table-data">
                      <img src={coin.chart} width="100" height="40" alt={coin.isUp ? "profit chart" : "loss chart"} className="chart" />
                    </td>
                    <td className="table-data">
                      <button className="btn btn-outline">Trade</button>
                    </td>
                  </tr>
                ))
              ) : (
                // Kalau kategorinya kosong kaga ada koin
                <tr>
                  <td colSpan={8} style={{ textAlign: "center", padding: "20px", color: "#8a8f9e" }}>
                    Belum ada koin di kategori {activeTab} bray!
                  </td>
                </tr>
              )}
            </tbody>
          </table>

        </div>
      </div>
    </section>
  );
}