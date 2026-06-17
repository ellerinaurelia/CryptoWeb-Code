"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Trend() {
  const [activeTab, setActiveTab] = useState("Crypto");
  const [liveTrends, setLiveTrends] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const tabs = ["Crypto", "DeFi", "BSC", "NFT", "Metaverse", "Gaming", "Music"];

  // MESIN PENARIK DATA TRENDING 🔥
  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        // Narik data koin berdasarkan volume transaksi tertinggi (paling rame)
        const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=volume_desc&per_page=28&page=1&sparkline=false');
        const data = await res.json();

        // Rombak data biar pas sama struktur HTML/CSS lu
        const formattedData = data.map((coin: any, index: number) => {
          // Bagi-bagi kategori secara merata ke semua koin biar tab-nya kaga kosong
          const assignedCategory = tabs[index % tabs.length];

          return {
            id: coin.id,
            name: coin.name,
            symbol: `${coin.symbol.toUpperCase()}/USD`,
            value: coin.current_price.toLocaleString(),
            price: coin.current_price.toLocaleString(),
            change: `${coin.price_change_percentage_24h > 0 ? '+' : ''}${coin.price_change_percentage_24h?.toFixed(2) || 0}%`,
            color: coin.price_change_percentage_24h > 0 ? "green" : "red",
            icon: coin.image,
            category: assignedCategory,
            active: index === 0 // Bikin koin yang paling atas dapet efek CSS 'active'
          };
        });

        setLiveTrends(formattedData);
        setLoading(false);
      } catch (error) {
        console.error("Gagal narik data trending boi:", error);
        setLoading(false);
      }
    };

    fetchTrendingCoins();
  }, []);

  // Fungsi Filter
  const filteredData = liveTrends.filter((coin) => coin.category === activeTab);

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
            {loading ? (
              <li style={{ width: '100%', textAlign: 'center', color: '#888', padding: '20px' }}>
                Lagi nyari koin yang viral... 🔥
              </li>
            ) : filteredData.length === 0 ? (
              <li style={{ width: '100%', textAlign: 'center', color: '#888', padding: '20px' }}>
                Belum ada data koin untuk kategori {activeTab}
              </li>
            ) : (
              filteredData.map((coin) => (
                <li key={coin.id}>
                  <div className={`trend-card ${coin.active ? "active" : ""}`}>
                    <div className="card-title-wrapper">
                      <img src={coin.icon} width="24" height="24" alt={`${coin.name} logo`} />
                      <Link href="#" className="card-title">
                        {coin.name} <span className="span">{coin.symbol}</span>
                      </Link>
                    </div>

                    <data className="card-value" value={coin.value.replace(/,/g, '')}>
                      USD {coin.value}
                    </data>

                    <div className="card-analytics">
                      <data className="current-price" value={coin.price.replace(/,/g, '')}>
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
