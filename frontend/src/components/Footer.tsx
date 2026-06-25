import Link from "next/link";

export default function Footer() {
  const IonIcon = "ion-icon" as any;

  return (
    <footer className="footer">
      <div className="footer-top" data-section>
        
        {/* PEMBUNGKUS UTAMA: Belah jadi 2 Kubu (Kiri dan Kanan) */}
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '40px', width: '100%' }}>

          {/*Brand Berjajar ke Bawah*/}
          <div className="footer-brand" style={{ display: 'flex', flexDirection: 'column', gap: '15px', flex: '1', minWidth: '250px' }}>
            <Link href="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img src="/images/logo.svg" width="32" height="32" alt="Cryptex logo" />
              Cryptex
            </Link>
            
            {/* Alamat & Kontak berbaris rapi ke bawah */}
            <address className="footer-contact-link">+62812 1111 1111</address>
            <address className="footer-contact-link">custservice@cryptex.com</address>
            <address className="footer-contact-link">
              Leenie Triahs 566 Nir St. Miets, North Sumatera, Medan
            </address>
          </div>


          {/*Berjejer Samping*/}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', flex: '2', minWidth: '300px' }}>
            
            {/* BLOK NAVIGATION */}
            <div style={{ textAlign: 'left' }}>
              <p className="footer-list-title" style={{ marginBottom: '15px', color: '#fff' }}>NAVIGATION</p>
              {/* flex-start bikin dia rata kiri, tapi tetep ke samping */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'flex-start' }}>
                <Link href="/" className="footer-link">Homepage</Link>
                <Link href="/buy" className="footer-link">Buy Crypto</Link>
                <Link href="#market" className="footer-link">Markets</Link>
                <Link href="/sell" className="footer-link">Sell Crypto</Link>
                <Link href="/blog" className="footer-link">Blog</Link>
              </div>
            </div>

            {/* BLOK LEGAL */}
            <div style={{ textAlign: 'left' }}>
              <p className="footer-list-title" style={{ marginBottom: '15px', color: '#fff' }}>LEGAL</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'flex-start' }}>
                <Link href="/terms" className="footer-link">Terms of Service</Link>
                <Link href="/privacy" className="footer-link">Privacy Policy</Link>
                <Link href="/rules" className="footer-link">Trading Rules</Link>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* FOOTER BOTTOM (SOSMED DAN COPYRIGHT) */}
      <div className="footer-bottom">
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
          <p className="copyright">
            &copy; 2026 Cryptex All Rights Reserved
          </p>

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
