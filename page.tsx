WiLる
wellmans_

WiLる [RAFT],  — 29/04/2026 22:24
total berapa
LELEL [IME],  — 29/04/2026 22:24
ku cari tau dlu
WiLる [RAFT],  — 29/04/2026 22:24
ss annya
LELEL [IME],  — 29/04/2026 22:24
6 aku
WiLる [RAFT],  — 29/04/2026 22:24
dang aku cmn 3
php post sama vsc kan
LELEL [IME],  — 29/04/2026 22:24
dem lu ss sebelum sama sesudah la
iya tapi sebelumnya juga mau
ss code bukannya ada 2 ya
app sama index?
cuy ini kan gwe up ke git trs teen gwe down mau commit kan jadi pas dia run semuannya dia otomatis kudu buat new file dan folder pas itu trnyata dia salah buat react dll bukan di folder frontend malah di cryptex-web nya jadi kuhapusla semua kubuat ulang pas udah cd frontend aku npc creat latest malah muncul mau folder nama projectnya apa kok malah muncul itu kenapa ga yang mau pake esqlin yes no react yes no tailwind yes no

nitip
 [IME], 
WiLる [RAFT],  — 29/04/2026 22:26
hah aku cuman index
LELEL [IME],  — 29/04/2026 22:31
lah
kwkw
aku ss lagi app js nya
btr lg tak dc
npx create-next-app@latest .
run ini di frontend willll
LELEL [IME],  — Yesterday at 00:42
Attachment file type: archive
Ellerin Aurelia Chowina (243303611409) - 3.rar
394.87 KB
WiLる [RAFT],  — Yesterday at 00:44
no
BISA BG
LELEL [IME],  — Yesterday at 01:48
dor
yah kaget ya
WiLる [RAFT],  — Yesterday at 02:00
Op
Kaget bg

LELEL [IME],  — Yesterday at 12:12
くれいじ
LELEL [IME],  — Yesterday at 21:51
Attachment file type: document
Kelompok 2 Metopel - Sistem Navigasi Pejalan Kaki Berbasis Estimasi Kepadatan dengan CNN dan Dijkstra Dinamis.docx
67.58 KB
LELEL [IME],  — Yesterday at 22:00
wil push ke tempatku biar ada contri
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

page.tsx
4 KB
WiLる [RAFT],  — Yesterday at 22:02
dah
﻿
LELEL
uronlylele
 
 
 
 
Ecclesiastes 3:7
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
page.tsx
4 KB
