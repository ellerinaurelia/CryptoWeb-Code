"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleLogin = () => {
    if (username === "demo" && password === "1234") {
      setError(false);
      alert("Login successful! Redirecting to dashboard...");
      // router.push("/dashboard"); 
    } else {
      setError(true);
    }
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#161b25", display: "flex", alignItems: "center", justifyContent: "center", padding: "16px" }}>
      <div style={{ backgroundColor: "#12141c", padding: "40px", borderRadius: "24px", width: "100%", maxWidth: "400px", border: "1px solid #2a2d3a", textAlign: "center", boxShadow: "0 10px 25px rgba(0,0,0,0.5)" }}>
        
        <h2 style={{ color: "white", fontSize: "28px", fontWeight: "bold", marginBottom: "8px", marginTop: "0" }}>Welcome Back</h2>
        <p style={{ color: "#8a8f9e", fontSize: "14px", marginBottom: "30px" }}>
          Login to access your Cryptex dashboard
        </p>

        {/* INPUT USERNAME */}
        <div style={{ marginBottom: "20px" }}>
          <input
            type="text"
            placeholder="Username"
            style={{ width: "100%", boxSizing: "border-box", padding: "14px 16px", backgroundColor: "#1a1d27", border: "1px solid #2d313e", borderRadius: "12px", fontSize: "15px", color: "white", outline: "none" }}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        {/* INPUT PASSWORD */}
        <div style={{ marginBottom: "20px" }}>
          <input
            type="password"
            placeholder="Password"
            style={{ width: "100%", boxSizing: "border-box", padding: "14px 16px", backgroundColor: "#1a1d27", border: "1px solid #2d313e", borderRadius: "12px", fontSize: "15px", color: "white", outline: "none" }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleLogin()}
          />
        </div>

        <button
          onClick={handleLogin}
          style={{ width: "100%", padding: "14px", backgroundColor: "#004ecc", color: "white", borderRadius: "12px", fontSize: "16px", fontWeight: "bold", border: "none", cursor: "pointer", transition: "0.3s" }}
        >
          Login
        </button>

        {/* PESAN ERROR */}
        {error && (
          <div style={{ color: "#ef4444", fontSize: "13px", marginTop: "12px" }}>
            Invalid username or password
          </div>
        )}

        <div style={{ marginTop: "24px", display: "flex", justifyContent: "center", gap: "8px", fontSize: "14px" }}>
          <Link href="/" style={{ color: "#888888", textDecoration: "none" }}>Back to Home</Link>
          <span style={{ color: "#888888" }}>|</span>
          <Link href="/signup" style={{ color: "#888888", textDecoration: "none" }}>SignUp</Link>
        </div>

      </div>
    </div>
  );
}
