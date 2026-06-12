"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Preloader() {
  const pathname = usePathname();
  // 1. Kita bikin variabel buat nginget posisi halaman terakhir
  const [prevPath, setPrevPath] = useState(pathname);
  // 2. State loading awal
  const [show, setShow] = useState(false);

  // 3. TEKNIK INTERSEPSI (Tanpa useEffect)
  // Kalau posisi saat ini beda sama posisi terakhir, langsung nyalain loading 
  // SEBELUM browser sempat ngegambar UI halaman yang baru!
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setShow(true); 
  }

  // 4. Timer buat matiin loadingnya setelah 1 detik
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        setShow(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [show]); // Efek ini cuma jalan kalau nilai 'show' berubah

  if (!show) return null;

  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100vh", backgroundColor: "#161b25", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", zIndex: 9999 }}>
      <div style={{ width: "50px", height: "50px", border: "5px solid #2a2d3a", borderTop: "5px solid #004ecc", borderRadius: "50%", animation: "spin 1s linear infinite" }}></div>
      <p style={{ marginTop: "20px", color: "#8a8f9e", fontWeight: "bold", letterSpacing: "2px" }}>LOADING CRYPTEX...</p>
      
      <style>{`
        @keyframes spin { 
          0% { transform: rotate(0deg); } 
          100% { transform: rotate(360deg); } 
        }
      `}</style>
    </div>
  );
}