"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const [headerActive, setHeaderActive] = useState(false);

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

  return (
    <header className={`header ${headerActive ? "active" : ""}`} data-header>
      <div className="container">
        {/* Pake tag <a> buat link satu halaman (Anchor / ID) */}
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
              <a href="#market" className="navbar-link" onClick={toggleNavbar}>Buy Crypto</a>
            </li>
            <li className="navbar-item">
              <a href="#trend" className="navbar-link" onClick={toggleNavbar}>Markets</a>
            </li>
            <li className="navbar-item">
              <a href="#instruction" className="navbar-link" onClick={toggleNavbar}>Sell Crypto</a>
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

        {/* Tetap pake <Link> karena ini pindah halaman ke /login */}
        <Link href="/login" className="btn btn-outline">Wallet</Link>
      </div>
    </header>
  );
}
