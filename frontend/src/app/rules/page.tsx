import Link from "next/link";

export default function TradingRules() {
  return (
    <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#111', paddingTop: '100px', paddingBottom: '80px' }}>
      
      {/* Box Card Raksasa */}
      <div style={{ backgroundColor: '#1e2029', maxWidth: '800px', width: '90%', padding: '50px', borderRadius: '24px', border: '1px solid #2b2f3a', boxShadow: '0 10px 40px rgba(0,0,0,0.6)' }}>
        
        <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '30px', textAlign: 'center', color: '#fff' }}>
          Trading Rules
        </h1>
        
        {/* Konten Teks Formal */}
        <div style={{ lineHeight: '1.8', color: '#8a8f9e', fontSize: '16px', textAlign: 'justify' }}>
          <p style={{ marginBottom: '25px' }}>
            Untuk menjaga ekosistem perdagangan yang adil, transparan, dan aman bagi seluruh pihak, semua pengguna platform Cryptex diwajibkan untuk mematuhi aturan perdagangan (Trading Rules) berikut ini:
          </p>
          
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#fff', marginTop: '30px', marginBottom: '15px' }}>
            1. Minimal Transaksi
          </h2>
          <p style={{ marginBottom: '25px' }}>
            Batas minimal untuk melakukan transaksi pembelian (Buy) maupun penjualan (Sell) aset digital di platform ini adalah setara dengan 10 USD. Transaksi di bawah nominal tersebut tidak akan diproses oleh sistem.
          </p>

          <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#fff', marginTop: '30px', marginBottom: '15px' }}>
            2. Biaya Jaringan (Gas Fee)
          </h2>
          <p style={{ marginBottom: '25px' }}>
            Setiap transaksi penarikan (withdrawal) aset kripto ke dompet eksternal akan dikenakan biaya jaringan. Biaya ini bersifat dinamis dan dihitung secara otomatis oleh sistem berdasarkan tingkat kepadatan jaringan blockchain pada saat transaksi dilakukan.
          </p>

          <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#fff', marginTop: '30px', marginBottom: '15px' }}>
            3. Anti-Pencucian Uang (AML)
          </h2>
          <p style={{ marginBottom: '25px' }}>
            Kami menerapkan kebijakan Anti-Money Laundering (AML) yang sangat ketat. Akun yang terdeteksi melakukan transaksi mencurigakan, tidak wajar, atau terindikasi melanggar hukum akan dibekukan sementara untuk keperluan investigasi lebih lanjut oleh tim kepatuhan kami.
          </p>

          <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#fff', marginTop: '30px', marginBottom: '15px' }}>
            4. Tanggung Jawab Perdagangan
          </h2>
          <p style={{ marginBottom: '25px' }}>
            Mengingat tingginya tingkat volatilitas pada pasar aset kripto, seluruh keputusan untuk membeli, menjual, atau menahan aset sepenuhnya merupakan tanggung jawab pribadi pengguna. Cryptex tidak memberikan saran investasi keuangan dalam bentuk apa pun.
          </p>
        </div>

        {/* Garis Pemisah & Tombol Balik */}
        <div style={{ marginTop: '40px', textAlign: 'center', borderTop: '1px solid #2b2f3a', paddingTop: '30px' }}>
          <Link href="/" style={{ color: '#3b82f6', textDecoration: 'none', fontSize: '16px', fontWeight: 'bold', transition: '0.3s' }}>
            ← Kembali ke Beranda
          </Link>
        </div>

      </div>
    </section>
  );
}
