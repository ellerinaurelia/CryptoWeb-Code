"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const [headerActive, setHeaderActive] = useState(false);

  // Logic buat toggle navbar (pengganti script.js lu)
  const toggleNavbar = () => {
    setIsActive(!isActive);
    if (!isActive) {
      document.body.classList.add("active");
    } else {
      document.body.classList.remove("active");
    }
  };

  // Logic buat header aktif pas di-scroll (pengganti script.js lu)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
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
        <Link href="/" className="logo">
          <img src="/images/logo.svg" width="32" height="32" alt="Cryptex logo" />
          Cryptex
        </Link>

        <nav className={`navbar ${isActive ? "active" : ""}`} data-navbar>
          <ul className="navbar-list">
            <li className="navbar-item">
              <Link href="/" className="navbar-link active" onClick={toggleNavbar}>Homepage</Link>
            </li>
            <li className="navbar-item">
              <Link href="#" className="navbar-link" onClick={toggleNavbar}>Buy Crypto</Link>
            </li>
            <li className="navbar-item">
              <Link href="#" className="navbar-link" onClick={toggleNavbar}>Markets</Link>
            </li>
            <li className="navbar-item">
              <Link href="#" className="navbar-link" onClick={toggleNavbar}>Sell Crypto</Link>
            </li>
            <li className="navbar-item">
              <Link href="#" className="navbar-link" onClick={toggleNavbar}>Blog</Link>
            </li>
            <li className="navbar-item">
              <Link href="#" className="navbar-link" onClick={toggleNavbar}>BITUSDT</Link>
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

        <Link href="/login" className="btn btn-outline">Wallet</Link>
      </div>
    </header>
  );
}