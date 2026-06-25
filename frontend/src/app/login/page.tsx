"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // <-- Satpam rute Next.js

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); 

  const handleLogin = async (e: any) => {
    e.preventDefault();
    
    try {
      // 1. Ketuk pintu pabrik Rails lu buat nyocokin email & password
      const response = await fetch("http://172.24.102.97:3001/login", { 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // 2. KTP DITERIMA! Simpen nama dan ID lu ke dalem memori Browser
        localStorage.setItem("user_id", data.user.id);
        localStorage.setItem("username", data.user.username);
        
        // 3. Baru deh lu ditendang masuk ke Dashboard dengan resmi!
        router.push("/dashboard");
      } else {
        // Kalau email/password salah, satpam ngamuk
        alert("Login Failed" + data.error);
      }
    } catch (error) {
      alert("Waduh, koneksi ke backend putus! Pastiin server Rails jalan.");
    }
  };

  return (
    <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#111', color: '#fff', padding: '20px' }}>
      <div style={{ maxWidth: '400px', width: '100%', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '10px' }}>Welcome Back!</h1>
          <p style={{ color: '#8a8f9e' }}>Log in to your Cryptex account to start trading 🚀</p>
        </div>

        <div style={{ backgroundColor: '#1e2029', padding: '40px', borderRadius: '24px', border: '1px solid #2b2f3a', boxShadow: '0 10px 40px rgba(0,0,0,0.6)' }}>
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            <div>
              <label style={{ display: 'block', color: '#8a8f9e', marginBottom: '10px', fontSize: '14px', fontWeight: '500' }}>Email Address</label>
              <input 
                type="email" 
                placeholder="name@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: '100%', padding: '16px', backgroundColor: '#111', border: '1px solid #2b2f3a', color: '#fff', borderRadius: '12px', outline: 'none', fontSize: '16px', boxSizing: 'border-box' }}
                required
              />
            </div>

            <div>
              <label style={{ display: 'block', color: '#8a8f9e', marginBottom: '10px', fontSize: '14px', fontWeight: '500' }}>Password</label>
              <input 
                type="password" 
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ width: '100%', padding: '16px', backgroundColor: '#111', border: '1px solid #2b2f3a', color: '#fff', borderRadius: '12px', outline: 'none', fontSize: '16px', boxSizing: 'border-box' }}
                required
              />
            </div>

            <div style={{ textAlign: 'right' }}>
              <Link href="#" style={{ color: '#3b82f6', fontSize: '14px', textDecoration: 'none' }}>
                Forgot Password?
              </Link>
            </div>

            <button 
              type="submit" 
              style={{ width: '100%', padding: '18px', backgroundColor: '#3b82f6', color: '#fff', border: 'none', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px', marginTop: '10px', transition: '0.3s' }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#3b82f6'}
            >
              Log In
            </button>

          </form>

          <div style={{ marginTop: '30px', textAlign: 'center', fontSize: '14px', color: '#8a8f9e' }}>
            Don't have an account? {' '}
            <Link href="/signup" style={{ color: '#fff', fontWeight: 'bold', textDecoration: 'none' }}>
              Sign up here
            </Link>
          </div>
        </div>

        <div style={{ marginTop: '30px', textAlign: 'center' }}>
          <Link href="/" style={{ color: '#555', textDecoration: 'none', fontSize: '14px' }}>
            ← Back to Homepage
          </Link>
        </div>

      </div>
    </section>
  );
}
