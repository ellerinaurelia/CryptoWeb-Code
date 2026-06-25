import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#111', paddingTop: '100px', paddingBottom: '80px' }}>
      
      {/* Box Card Raksasa */}
      <div style={{ backgroundColor: '#1e2029', maxWidth: '800px', width: '90%', padding: '50px', borderRadius: '24px', border: '1px solid #2b2f3a', boxShadow: '0 10px 40px rgba(0,0,0,0.6)' }}>
        
        <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '30px', textAlign: 'center', color: '#fff' }}>
          Privacy Policy
        </h1>
        
        {/* Konten Teks Formal */}
        <div style={{ lineHeight: '1.8', color: '#8a8f9e', fontSize: '16px', textAlign: 'justify' }}>
          <p style={{ marginBottom: '25px' }}>
            Di Cryptex, kami sangat menghargai dan menjaga privasi data pengguna. Dokumen Kebijakan Privasi ini menjelaskan secara rinci bagaimana kami mengumpulkan, menggunakan, menyimpan, dan melindungi informasi pribadi Anda saat menggunakan layanan platform kami.
          </p>
          
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#fff', marginTop: '30px', marginBottom: '15px' }}>
            1. Pengumpulan Data
          </h2>
          <p style={{ marginBottom: '25px' }}>
            Kami mengumpulkan informasi yang Anda berikan secara langsung saat melakukan pendaftaran akun. Informasi ini mencakup, namun tidak terbatas pada, nama lengkap, alamat email, nomor telepon, dan data dompet digital (wallet) Anda yang diperlukan untuk keperluan otentikasi dan transaksi aset kripto.
          </p>

          <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#fff', marginTop: '30px', marginBottom: '15px' }}>
            2. Penggunaan Data
          </h2>
          <p style={{ marginBottom: '25px' }}>
            Informasi yang kami kumpulkan hanya akan digunakan untuk memproses transaksi jual-beli aset digital Anda, memverifikasi identitas sesuai dengan standar keamanan, meningkatkan kualitas layanan platform, serta mendeteksi dan mencegah aktivitas penipuan.
          </p>

          <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#fff', marginTop: '30px', marginBottom: '15px' }}>
            3. Perlindungan Informasi
          </h2>
          <p style={{ marginBottom: '25px' }}>
            Kami menerapkan standar keamanan industri yang ketat untuk melindungi data pribadi Anda dari akses, pengungkapan, atau modifikasi yang tidak sah oleh pihak ketiga. Data sensitif Anda diproses dalam lingkungan yang terenkripsi dan aman.
          </p>

          <p style={{ fontSize: '13px', color: '#555', marginTop: '40px', textAlign: 'center', fontStyle: 'italic' }}>
            Terakhir diperbarui: Juni 2026
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
