"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignup = () => {
    // Logic sementara buat ngetes
    if (name && email && password) {
      alert("Account created successfully! Redirecting to login...");
      router.push("/login"); // Habis daftar, otomatis dilempar balik ke form login
    } else {
      alert("Please fill in all fields!");
    }
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#161b25", display: "flex", alignItems: "center", justifyContent: "center", padding: "16px" }}>
      <div style={{ backgroundColor: "#12141c", padding: "40px", borderRadius: "24px", width: "100%", maxWidth: "400px", border: "1px solid #2a2d3a", textAlign: "center", boxShadow: "0 10px 25px rgba(0,0,0,0.5)" }}>
        
        <h2 style={{ color: "white", fontSize: "28px", fontWeight: "bold", marginBottom: "8px", marginTop: "0" }}>Create Account</h2>
        <p style={{ color: "#8a8f9e", fontSize: "14px", marginBottom: "30px" }}>
          Join Cryptex to start trading
        </p>

        {/* INPUT FULL NAME */}
        <div style={{ marginBottom: "20px" }}>
          <input
            type="text"
            placeholder="Full Name"
            style={{ width: "100%", boxSizing: "border-box", padding: "14px 16px", backgroundColor: "#1a1d27", border: "1px solid #2d313e", borderRadius: "12px", fontSize: "15px", color: "white", outline: "none" }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* INPUT EMAIL */}
        <div style={{ marginBottom: "20px" }}>
          <input
            type="email"
            placeholder="Email Address"
            style={{ width: "100%", boxSizing: "border-box", padding: "14px 16px", backgroundColor: "#1a1d27", border: "1px solid #2d313e", borderRadius: "12px", fontSize: "15px", color: "white", outline: "none" }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            onKeyPress={(e) => e.key === "Enter" && handleSignup()}
          />
        </div>

        <button
          onClick={handleSignup}
          style={{ width: "100%", padding: "14px", backgroundColor: "#004ecc", color: "white", borderRadius: "12px", fontSize: "16px", fontWeight: "bold", border: "none", cursor: "pointer", transition: "0.3s" }}
        >
          Sign Up
        </button>

        <div style={{ marginTop: "24px", display: "flex", justifyContent: "center", gap: "8px", fontSize: "14px" }}>
          <Link href="/" style={{ color: "#888888", textDecoration: "none" }}>Back to Home</Link>
          <span style={{ color: "#888888" }}>|</span>
          {/* Ini link buat balik ke form login kalau udah punya akun */}
          <Link href="/login" style={{ color: "#888888", textDecoration: "none" }}>Login</Link>
        </div>

      </div>
    </div>
  );
}