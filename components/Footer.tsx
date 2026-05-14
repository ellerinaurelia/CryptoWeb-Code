import Link from "next/link";

export default function Footer() {
  const IonIcon = "ion-icon" as any;

  return (
    <footer className="footer">
      <div className="footer-top" data-section>
        <div className="container">

          <div className="footer-brand">
            <Link href="/" className="logo">
              <img src="/images/logo.svg" width="32" height="32" alt="Cryptex logo" />
              Cryptex
            </Link>


            <address className="footer-contact-link">+62812 1111 1111</address>
            <address className="footer-contact-link">custservice@cryptex.com</address>
            <address className="footer-contact-link">
              Leenie Triahs 566 Nir St. Miets, North Sumatera, Medan
            </address>
          </div>

          <ul className="footer-list">
            <li><p className="footer-list-title">PRODUCTS</p></li>
            <li><Link href="#" className="footer-link">Spot</Link></li>
            <li><Link href="#" className="footer-link">Inverse Perpetual</Link></li>
            <li><Link href="#" className="footer-link">USDT Perpetual</Link></li>
            <li><Link href="#" className="footer-link">Exchange</Link></li>
            <li><Link href="#" className="footer-link">Launchpad</Link></li>
            <li><Link href="#" className="footer-link">Binance Pay</Link></li>
          </ul>

          <ul className="footer-list">
            <li><p className="footer-list-title">SERVICES</p></li>
            <li><Link href="#" className="footer-link">Buy Crypto</Link></li>
            <li><Link href="#" className="footer-link">Markets</Link></li>
            <li><Link href="#" className="footer-link">Tranding Fee</Link></li>
            <li><Link href="#" className="footer-link">Affiliate Program</Link></li>
            <li><Link href="#" className="footer-link">Referral Program</Link></li>
            <li><Link href="#" className="footer-link">API</Link></li>
          </ul>

          <ul className="footer-list">
            <li><p className="footer-list-title">SUPPORT</p></li>
            <li><Link href="#" className="footer-link">Bybit Learn</Link></li>
            <li><Link href="#" className="footer-link">Help Center</Link></li>
            <li><Link href="#" className="footer-link">User Feedback</Link></li>
            <li><Link href="#" className="footer-link">Submit a request</Link></li>
            <li><Link href="#" className="footer-link">API Documentation</Link></li>
            <li><Link href="#" className="footer-link">Trading Rules</Link></li>
          </ul>

          <ul className="footer-list">
            <li><p className="footer-list-title">ABOUT US</p></li>
            <li><Link href="#" className="footer-link">About Bybit</Link></li>
            <li><Link href="#" className="footer-link">Authenticity Check</Link></li>
            <li><Link href="#" className="footer-link">Careers</Link></li>
            <li><Link href="#" className="footer-link">Business Contacts</Link></li>
            <li><Link href="#" className="footer-link">Blog</Link></li>
          </ul>

        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; 2022 Cryptex All Rights Reserved By <Link href="#" className="copyright-link">codewithsadee</Link>
          </p>

          {/*<IonIcon>*/}
          <ul className="social-list">
            <li><Link href="#" className="social-link"><IonIcon name="logo-facebook"></IonIcon></Link></li>
            <li><Link href="#" className="social-link"><IonIcon name="logo-twitter"></IonIcon></Link></li>
            <li><Link href="#" className="social-link"><IonIcon name="logo-instagram"></IonIcon></Link></li>
            <li><Link href="#" className="social-link"><IonIcon name="logo-linkedin"></IonIcon></Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
