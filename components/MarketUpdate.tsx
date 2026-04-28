"use client";

import { useState } from "react";
import Link from "next/link";

export default function MarketUpdate() {
  const [activeTab, setActiveTab] = useState("View All");

  const marketTabs = ["View All", "Metaverse", "Entertainment", "Energy", "NFT", "Gaming", "Music"];

  // Data koin dari index.html lu
  const coins = [
    { rank: 1, name: "Bitcoin", symbol: "BTC", icon: "/images/coin-1.svg", price: "$56,623.54", change: "+1.45%", isUp: true, marketCap: "$880,423,640,582", chart: "/images/chart-1.svg" },
    { rank: 2, name: "Ethereum", symbol: "ETH", icon: "/images/coin-2.svg", price: "$56,623.54", change: "-5.12%", isUp: false, marketCap: "$880,423,640,582", chart: "/images/chart-2.svg" },
    { rank: 3, name: "Tether", symbol: "USDT/USD", icon: "/images/coin-3.svg", price: "$56,623.54", change: "+1.45%", isUp: true, marketCap: "$880,423,640,582", chart: "/images/chart-1.svg" },
    { rank: 4, name: "BNB", symbol: "BNB/USD", icon: "/images/coin-4.svg", price: "$56,623.54", change: "-3.75%", isUp: false, marketCap: "$880,423,640,582", chart: "/images/chart-2.svg" },
    { rank: 5, name: "Solana", symbol: "SOL", icon: "/images/coin-5.svg", price: "$56,623.54", change: "+1.45%", isUp: true, marketCap: "$880,423,640,582", chart: "/images/chart-1.svg" },
    { rank: 6, name: "XRP", symbol: "XRP", icon: "/images/coin-6.svg", price: "$56,623.54", change: "-2.22%", isUp: false, marketCap: "$880,423,640,582", chart: "/images/chart-2.svg" },
    { rank: 7, name: "Cardano", symbol: "ADA", icon: "/images/coin-7.svg", price: "$56,623.54", change: "+0.8%", isUp: true, marketCap: "$880,423,640,582", chart: "/images/chart-1.svg" },
    { rank: 8, name: "Avalanche", symbol: "AVAX", icon: "/images/coin-8.svg", price: "$56,623.54", change: "+1.41%", isUp: true, marketCap: "$880,423,640,582", chart: "/images/chart-1.svg" },
  ];

  return (
    <section className="section market" aria-label="market update" data-section>
      <div className="container">
        
        <div className="title-wrapper">
          <h2 className="h2 section-title">Market Update</h2>
          <Link href="#" className="btn-link">See All Coins</Link>
        </div>

        <div className="market-tab">
          {/* NAVIGATION TAB */}
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

          {/* TABLE MARKET */}
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

            <tbody className="table-body">
              {coins.map((coin) => (
                <tr key={coin.rank} className="table-row">
                  <td className="table-data">
                    <button className="add-to-fav" aria-label="Add to favourite">
                      {/* Note: Icon star aslinya pake ionicon, buat sementara gwe pake teks dulu biar ga error */}
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
              ))}
            </tbody>
          </table>

        </div>
      </div>
    </section>
  );
}