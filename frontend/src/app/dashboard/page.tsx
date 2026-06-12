"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  
  const [user, setUser] = useState<{name: string, email: string, status: string} | null>(null);
  const [usdtBalance, setUsdtBalance] = useState(10500.00);
  const [btcBalance, setBtcBalance] = useState(0.45);
  const [tradeMode, setTradeMode] = useState("BUY"); 
  const [tradeAmount, setTradeAmount] = useState("");

  const BTC_PRICE = 50000;

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      router.push("/login");
    } else {
      const savedUser = localStorage.getItem("userData");
      if (savedUser) setUser(JSON.parse(savedUser));
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userData");
    router.push("/login");
  };

  const handleTrade = () => {
    const amountNum = parseFloat(tradeAmount);
    if (!amountNum || amountNum <= 0) return alert("Masukin nominal yang bener boi!");

    if (tradeMode === "BUY") {
      if (amountNum > usdtBalance) return alert("Saldo USDT kaga cukup!");
      setUsdtBalance((prev) => prev - amountNum);
      setBtcBalance((prev) => prev + (amountNum / BTC_PRICE));
      alert(`Sukses beli ${(amountNum / BTC_PRICE).toFixed(4)} BTC!`);
    } else {
      if (amountNum > btcBalance) return alert("Saldo BTC kaga cukup!");
      setBtcBalance((prev) => prev - amountNum);
      setUsdtBalance((prev) => prev + (amountNum * BTC_PRICE));
      alert(`Sukses jual ${amountNum} BTC! Dapet $${(amountNum * BTC_PRICE).toLocaleString()}`);
    }
    setTradeAmount("");
  };

  if (!user) return null;

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#161b25", padding: "30px", color: "white", fontFamily: "sans-serif" }}>
      
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #2a2d3a", paddingBottom: "20px", marginBottom: "30px" }}>
        <h2 style={{ margin: 0 }}>Cryptex Dashboard</h2>
        
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <div style={{ textAlign: "right" }}>
            <p style={{ margin: 0, fontWeight: "bold" }}>{user.name}</p>
            <p style={{ margin: 0, fontSize: "12px", color: "#8a8f9e" }}>{user.email}</p>
          </div>
          <button onClick={handleLogout} style={{ padding: "8px 16px", backgroundColor: "#1a1d27", color: "#ef4444", border: "1px solid #2a2d3a", borderRadius: "8px", fontWeight: "bold", cursor: "pointer" }}>
            Log Out
          </button>
        </div>
      </div>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        
        <div style={{ flex: "1 1 400px", display: "flex", flexDirection: "column", gap: "20px" }}>
          <div style={{ backgroundColor: "#12141c", padding: "30px", borderRadius: "16px", border: "1px solid #2a2d3a" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <p style={{ color: "#8a8f9e", margin: 0, fontSize: "14px" }}>Total Balance (USDT)</p>
              <span style={{ backgroundColor: "rgba(16, 185, 129, 0.1)", color: "#10b981", padding: "4px 8px", borderRadius: "4px", fontSize: "12px", fontWeight: "bold" }}>{user.status}</span>
            </div>
            <h1 style={{ margin: "10px 0", fontSize: "42px" }}>
              ${usdtBalance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </h1>
          </div>

          <div style={{ backgroundColor: "#12141c", padding: "30px", borderRadius: "16px", border: "1px solid #2a2d3a" }}>
            <p style={{ color: "#8a8f9e", margin: 0, paddingBottom: "15px", borderBottom: "1px solid #2a2d3a", fontWeight: "bold" }}>Your Assets</p>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "30px", height: "30px", backgroundColor: "#f7931a", borderRadius: "50%" }}></div>
                <span style={{ fontWeight: "bold", fontSize: "18px" }}>Bitcoin (BTC)</span>
              </div>
              <span style={{ fontSize: "18px" }}>{btcBalance.toFixed(4)} BTC</span>
            </div>
          </div>
          
          <div style={{ backgroundColor: "#12141c", padding: "30px", borderRadius: "16px", border: "1px solid #2a2d3a" }}>
            <p style={{ color: "#8a8f9e", margin: 0, paddingBottom: "15px", borderBottom: "1px solid #2a2d3a", fontWeight: "bold" }}>Recent Transactions</p>
            <div style={{ marginTop: "15px", fontSize: "14px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
                <span>Deposit USDT</span>
                <span style={{ color: "#10b981" }}>+$5,000.00</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
                <span>Buy BTC</span>
                <span style={{ color: "#ef4444" }}>-0.10 BTC</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Withdraw USDT</span>
                <span style={{ color: "#ef4444" }}>-$200.00</span>
              </div>
            </div>
          </div>
        </div>

        <div style={{ flex: "1 1 350px", backgroundColor: "#12141c", padding: "30px", borderRadius: "16px", border: "1px solid #2a2d3a", height: "fit-content" }}>
          <h3 style={{ margin: "0 0 20px 0" }}>Quick Trade</h3>
          
          <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
            <button onClick={() => setTradeMode("BUY")} style={{ flex: 1, padding: "12px", borderRadius: "8px", border: "none", cursor: "pointer", fontWeight: "bold", backgroundColor: tradeMode === "BUY" ? "#004ecc" : "#1a1d27", color: "white" }}>BUY BTC</button>
            <button onClick={() => setTradeMode("SELL")} style={{ flex: 1, padding: "12px", borderRadius: "8px", border: "none", cursor: "pointer", fontWeight: "bold", backgroundColor: tradeMode === "SELL" ? "#ef4444" : "#1a1d27", color: "white" }}>SELL BTC</button>
          </div>

          <p style={{ fontSize: "13px", color: "#8a8f9e", marginBottom: "10px" }}>Current Price: 1 BTC = $50,000</p>
          
          <input
            type="number"
            placeholder={tradeMode === "BUY" ? "Amount to spend (USDT)" : "Amount to sell (BTC)"}
            value={tradeAmount}
            onChange={(e) => setTradeAmount(e.target.value)}
            style={{ width: "100%", boxSizing: "border-box", padding: "16px", backgroundColor: "#1a1d27", border: "1px solid #2d313e", borderRadius: "12px", color: "white", fontSize: "16px", marginBottom: "20px", outline: "none" }}
          />

          <button onClick={handleTrade} style={{ width: "100%", padding: "16px", backgroundColor: tradeMode === "BUY" ? "#004ecc" : "#ef4444", color: "white", borderRadius: "12px", fontSize: "16px", fontWeight: "bold", border: "none", cursor: "pointer" }}>
            {tradeMode === "BUY" ? "Confirm Buy" : "Confirm Sell"}
          </button>
        </div>

      </div>
    </div>
  );
}