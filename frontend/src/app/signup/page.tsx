"use client";

import { useState } from "react";
import Link from "next/link";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = (e: any) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Registration attempted:", username, email);
    alert("Sign Up button clicked! (Backend integration coming soon)");
  };

  return (
    <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#111', color: '#fff', padding: '20px' }}>
      
      <div style={{ maxWidth: '400px', width: '100%', margin: '0 auto' }}>
        
        {/* Header Sign Up */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '10px' }}>Create Account</h1>
          <p style={{ color: '#8a8f9e' }}>Join Cryptex today and start your journey to the moon! 🚀</p>
        </div>

        {/* Box Form Sign Up */}
        <div style={{ backgroundColor: '#1e2029', padding: '40px', borderRadius: '24px', border: '1px solid #2b2f3a', boxShadow: '0 10px 40px rgba(0,0,0,0.6)' }}>
          <form onSubmit={handleSignUp} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {/* Input Username */}
            <div>
              <label style={{ display: 'block', color: '#8a8f9e', marginBottom: '10px', fontSize: '14px', fontWeight: '500' }}>Username</label>
              <input 
                type="text" 
                placeholder="johndoe"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ width: '100%', padding: '16px', backgroundColor: '#111', border: '1px solid #2b2f3a', color: '#fff', borderRadius: '12px', outline: 'none', fontSize: '16px', boxSizing: 'border-box' }}
                required
              />
            </div>

            {/* Input Email */}
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

            {/* Input Password */}
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

            {/* Input Confirm Password */}
            <div>
              <label style={{ display: 'block', color: '#8a8f9e', marginBottom: '10px', fontSize: '14px', fontWeight: '500' }}>Confirm Password</label>
              <input 
                type="password" 
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                style={{ width: '100%', padding: '16px', backgroundColor: '#111', border: '1px solid #2b2f3a', color: '#fff', borderRadius: '12px', outline: 'none', fontSize: '16px', boxSizing: 'border-box' }}
                required
              />
            </div>

            {/* Tombol Sign Up */}
            <button 
              type="submit" 
              style={{ width: '100%', padding: '18px', backgroundColor: '#27ae60', color: '#fff', border: 'none', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px', marginTop: '10px', transition: '0.3s' }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#219653'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#27ae60'}
            >
              Sign Up
            </button>

          </form>

          {/* Link ke Login */}
          <div style={{ marginTop: '30px', textAlign: 'center', fontSize: '14px', color: '#8a8f9e' }}>
            Already have an account? {' '}
            <Link href="/login" style={{ color: '#fff', fontWeight: 'bold', textDecoration: 'none' }}>
              Log in here
            </Link>
          </div>

        </div>

        {/* Tombol Balik ke Homepage */}
        <div style={{ marginTop: '30px', textAlign: 'center' }}>
          <Link href="/" style={{ color: '#555', textDecoration: 'none', fontSize: '14px' }}>
            ← Back to Homepage
          </Link>
        </div>

      </div>
    </section>
  );
}
