"use client";

import { useState, useEffect } from "react";

export default function Preloader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Ngecek: Apakah user udah pernah ngelewatin loading ini?
    const hasLoaded = sessionStorage.getItem("hasLoaded");

    if (hasLoaded) {
      // Kalau udah pernah, langsung umpetin aja
      setShow(false);
    } else {
      // Kalau baru pertama kali buka web, tampilin selama 2 detik
      const timer = setTimeout(() => {
        setShow(false);
        sessionStorage.setItem("hasLoaded", "true"); // Kasih stempel di browser
      }, 2000); // 2000 ms = 2 detik

      return () => clearTimeout(timer);
    }
  }, []);

  // Kalau show = false, komponennya ngilang dari layar
  if (!show) return null;

  return (
    // Pake position: fixed biar dia nutupin seluruh layar di atas segalanya
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