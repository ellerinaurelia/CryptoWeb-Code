"use client"; // Wajib karena kita pake interaksi klik dan state

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleLogin = () => {
    // Logic login lu: username 'demo' & password '1234'
    if (username === "demo" && password === "1234") {
      setError(false);
      alert("Login successful! Redirecting to dashboard...");
      // Nanti kalau dashboard.tsx lu udah jadi, aktifin baris di bawah ini:
      // router.push("/dashboard"); 
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#161b25] flex items-center justify-center p-4">
      <div className="bg-[#12141c] p-10 rounded-[24px] w-full max-w-[400px] border border-[#2a2d3a] text-center">
        
        <h2 className="text-white text-[28px] font-bold mb-2">Welcome Back</h2>
        <p className="text-[#8a8f9e] text-[14px] mb-[30px]">
          Login to access your Cryptex dashboard
        </p>

        {/* INPUT USERNAME */}
        <div className="mb-5">
          <input
            type="text"
            placeholder="Username"
            className="w-full p-[14px_16px] bg-[#1a1d27] border border-[#2d313e] rounded-[12px] text-[15px] text-white focus:outline-none focus:border-[#3b82f6] transition-all"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        {/* INPUT PASSWORD */}
        <div className="mb-5">
          <input
            type="password"
            placeholder="Password"
            className="w-full p-[14px_16px] bg-[#1a1d27] border border-[#2d313e] rounded-[12px] text-[15px] text-white focus:outline-none focus:border-[#3b82f6] transition-all"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleLogin()}
          />
        </div>

        <button
          onClick={handleLogin}
          className="w-full p-[14px] bg-[#004ecc] text-white rounded-[12px] text-[16px] font-semibold hover:bg-[#003ab8] transition-all"
        >
          Login
        </button>

        {/* PESAN ERROR */}
        {error && (
          <div className="text-[#ef4444] text-[13px] mt-3">
            Invalid username or password
          </div>
        )}

        <div className="mt-5 flex justify-center gap-2 text-[14px] text-[#888888]">
          <Link href="/" className="hover:text-[#115bd2]">Back to Home</Link>
          <span>|</span>
          <Link href="/signup" className="hover:text-[#115bd2]">SignUp</Link>
        </div>

      </div>
    </div>
  );
}