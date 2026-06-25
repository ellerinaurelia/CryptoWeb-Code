"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function MarketUpdate() {
  const [activeTab, setActiveTab] = useState("View All");
  const [liveCoins, setLiveCoins] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const marketTabs = ["View All", "Metaverse", "Entertainment", "Energy", "NFT", "Gaming", "Music"];

  // MESIN PENARIK DATA LIVE 🚀
  useEffect(() => {
    const fetchLiveMarket = async () => {
      try {
        const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false');
        const data = await res.json();

        const formattedData = data.map((coin: any, index: number) => {
          const categories = ["Metaverse", "Entertainment", "Energy", "NFT", "Gaming", "Music"];
          const assignedCategory = categories[index % categories.length];

          return {
            rank: coin.market_cap_rank,
            name: coin.name,
            symbol: coin.symbol.toUpperCase(),
            category: assignedCategory, 
            icon: coin.image, 
            price: `$${coin.current_price?.toLocaleString() || '0'}`,
            change: `${coin.price_change_percentage_24h > 0 ? '+' : ''}${coin.price_change_percentage_24h?.toFixed(2) || '0.00'}%`,
            isUp: coin.price_change_percentage_24h > 0,
            marketCap: `$${coin.market_cap?.toLocaleString() || '0'}`,
            chart: coin.price_change_percentage_24h > 0 ? "/images/chart-1.svg" : "/images/chart-2.svg" 
          };
        });

        setLiveCoins(formattedData);
        setLoading(false);
      } catch (error) {
        console.error("Gagal narik data boi:", error);
        setLoading(false);
      }
    };

    fetchLiveMarket();
  }, []);

  const filteredCoins = activeTab === "View All" 
    ? liveCoins 
    : liveCoins.filter((coin: any) => coin.category === activeTab);

  return (
    <section className="section market" id="market" aria-label="market update" data-section>
      <div className="container">
        
        <div className="title-wrapper">
          <h2 className="h2 section-title">Market Update</h2>
          <Link href="#" className="btn-link">See All Coins</Link>
        </div>

        <div className="market-tab">
          
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

            <tbody className="table-body">
              {loading ? (
                <tr>
                  <td colSpan={8} style={{ textAlign: "center", padding: "40px", color: "#8a8f9e" }}>
                    Menyambungkan ke Wall Street... 🚀
                  </td>
                </tr>
              ) : filteredCoins.length > 0 ? (
                filteredCoins.map((coin: any) => (
                  <tr key={coin.rank} className="table-row">
                    <td className="table-data">
                      <button className="add-to-fav" aria-label="Add to favourite">⭐</button>
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
                    {/*NEMBAK LANGSUNG KE /BUY */}
                    <td className="table-data">
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.href = "/buy"; 
                        }} 
                        className="btn btn-outline" 
                        style={{ 
                          display: 'inline-block', 
                          padding: '8px 20px', 
                          position: 'relative', 
                          zIndex: 9999, 
                          cursor: 'pointer',
                          pointerEvents: 'auto' 
                        }}
                      >
                        Trade
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
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
