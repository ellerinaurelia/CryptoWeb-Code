import Link from "next/link";

export default function Hero() {
  return (
    <section className="section hero active" id="home" aria-label="hero" data-section>
      <div className="container">

        <div className="hero-content">
          <h1 className="h1 hero-title">Buy & Sell Digital Assets In The Cryptex</h1>

          <p className="hero-text">
            Coin Cryptex is the easiest, safest, and fastest way to buy & sell crypto asset exchange.
          </p>

          {/* Tombol Get Started gwe arahin ke /login sesuai main.html lu */}
          <Link href="/login" className="btn btn-primary">
            Get started now
          </Link>
        </div>

        <figure className="hero-banner">
          <img 
            src="/images/hero-banner.png" 
            width="570" 
            height="448" 
            alt="hero banner" 
            className="w-100" 
          />
        </figure>

      </div>
    </section>
  );
}
