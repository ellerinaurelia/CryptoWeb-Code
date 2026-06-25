"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const [headerActive, setHeaderActive] = useState(false);
  // State buat nyatet lu udah login apa belum
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleNavbar = () => {
    setIsActive(!isActive);
    if (!isActive) {
      document.body.classList.add("active");
    } else {
      document.body.classList.remove("active");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHeaderActive(true);
      } else {
        setHeaderActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //Ngecek memori browser pas halaman diload
  useEffect(() => {
    const user = localStorage.getItem("username");
    if (user) {
      setIsLoggedIn(true); 
    }
  }, []);

  return (
    <header className={`header ${headerActive ? "active" : ""}`} data-header>
      <div className="container">
        <a href="#home" className="logo">
          <img src="/images/logo.svg" width="32" height="32" alt="Cryptex logo" />
          Cryptex
        </a>

        <nav className={`navbar ${isActive ? "active" : ""}`} data-navbar>
          <ul className="navbar-list">
            <li className="navbar-item">
              <a href="#home" className="navbar-link" onClick={toggleNavbar}>Homepage</a>
            </li>
            <li className="navbar-item">
              {isLoggedIn ? (
                <Link href="/buy" className="navbar-link" onClick={toggleNavbar}>Buy Crypto</Link>
              ) : (
                <a href="#market" className="navbar-link" onClick={toggleNavbar}>Buy Crypto</a>
              )}
            </li>
            <li className="navbar-item">
              <a href="#trend" className="navbar-link" onClick={toggleNavbar}>Markets</a>
            </li>
            <li className="navbar-item">
              {isLoggedIn ? (
                <Link href="/trade" className="navbar-link" onClick={toggleNavbar}>Sell Crypto</Link>
              ) : (
                <a href="#instruction" className="navbar-link" onClick={toggleNavbar}>Sell Crypto</a>
              )}
            </li>
            <li className="navbar-item">
              <a href="#about" className="navbar-link" onClick={toggleNavbar}>Blog</a>
            </li>
            <li className="navbar-item">
              <a href="#app" className="navbar-link" onClick={toggleNavbar}>BITUSDT</a>
            </li>
          </ul>
        </nav>

        <button 
          className={`nav-toggle-btn ${isActive ? "active" : ""}`} 
          aria-label="Toggle menu" 
          onClick={toggleNavbar}
        >
          <span className="line line-1"></span>
          <span className="line line-2"></span>
          <span className="line line-3"></span>
        </button>

        {/*Hilangin tombol Wallet kalau udah login! */}
        {isLoggedIn ? (
          <Link href="/dashboard" className="btn btn-outline" style={{ backgroundColor: '#3b82f6', color: '#fff', border: 'none' }}>
            Dashboard Gwe
          </Link>
        ) : (
          <Link href="/login" className="btn btn-outline">
            Login / Wallet
          </Link>
        )}

      </div>
    </header>
  );
}
