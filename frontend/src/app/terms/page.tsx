import Link from "next/link";

export default function TermsOfService() {
  return (
    // Pembungkus utama biar full screen dan posisinya di tengah
    <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#111', paddingTop: '100px', paddingBottom: '80px' }}>
      
      {/* Box Card Raksasa yang Elegan */}
      <div style={{ backgroundColor: '#1e2029', maxWidth: '800px', width: '90%', padding: '50px', borderRadius: '24px', border: '1px solid #2b2f3a', boxShadow: '0 10px 40px rgba(0,0,0,0.6)' }}>
        
        {/* Judul Halaman */}
        <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '30px', textAlign: 'center', color: '#fff' }}>
          Terms of Service
        </h1>
        
        {/* Konten Teks Formal */}
        <div style={{ lineHeight: '1.8', color: '#8a8f9e', fontSize: '16px', textAlign: 'justify' }}>
          <p style={{ marginBottom: '25px' }}>
            Selamat datang di Cryptex. Dengan mengakses atau menggunakan platform kami, Anda menyetujui untuk terikat dengan Syarat dan Ketentuan Layanan ini. Harap membaca dokumen ini dengan saksama sebelum menggunakan layanan perdagangan aset digital kami.
          </p>
          
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#fff', marginTop: '30px', marginBottom: '15px' }}>
            1. Penerimaan Syarat
          </h2>
          <p style={{ marginBottom: '25px' }}>
            Dengan membuat akun di Cryptex, Anda secara sadar mengonfirmasi bahwa Anda berusia minimal 18 tahun dan memiliki kapasitas hukum yang sah untuk menyetujui serta terikat pada perjanjian ini berdasarkan hukum yang berlaku.
          </p>

          <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#fff', marginTop: '30px', marginBottom: '15px' }}>
            2. Risiko Perdagangan Kripto
          </h2>
          <p style={{ marginBottom: '25px' }}>
            Perdagangan aset digital melibatkan risiko finansial yang sangat tinggi dan dapat mengakibatkan hilangnya sebagian atau seluruh modal investasi Anda. Anda menyadari sepenuhnya bahwa nilai aset kripto sangat fluktuatif, dan Anda disarankan untuk tidak berinvestasi melebihi batas kemampuan finansial Anda.
          </p>
          
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#fff', marginTop: '30px', marginBottom: '15px' }}>
            3. Keamanan Akun dan Dompet Digital
          </h2>
          <p style={{ marginBottom: '25px' }}>
            Anda bertanggung jawab penuh untuk menjaga kerahasiaan kata sandi, kunci pribadi (private keys), dan kredensial akun Anda. Cryptex tidak bertanggung jawab atas segala kerugian yang timbul akibat kelalaian pengguna dalam menjaga keamanan sistem maupun kelalaian yang diakibatkan oleh pihak ketiga.
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