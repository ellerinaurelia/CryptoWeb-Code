import Link from "next/link";

export default function Blog() {
  const blogs = [
    { id: 1, title: "Kenapa Harga Bitcoin Tembus Rekor Baru?", date: "16 Juni 2026", category: "Market Analysis" },
    { id: 2, title: "Cara Aman Simpan Aset Kripto di Cold Wallet", date: "15 Juni 2026", category: "Tutorial" },
    { id: 3, title: "Masa Depan Web3 dan Metaverse di Asia", date: "12 Juni 2026", category: "Technology" },
  ];

  return (
    <section className="pt-32 pb-20 bg-[#111] min-h-screen text-white">
      <div className="container mx-auto px-4 max-w-5xl">
        
        <h1 className="text-4xl font-bold mb-2">Crypto Blog</h1>
        <p className="text-gray-400 mb-10">Baca berita terbaru biar kaga fomo wak!</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-gray-900 border border-gray-800 p-6 rounded-2xl hover:border-blue-500 transition duration-300">
              <span className="text-xs font-bold text-blue-500 uppercase">{blog.category}</span>
              <h2 className="text-xl font-semibold mt-3 mb-4">{blog.title}</h2>
              <p className="text-gray-500 text-sm mb-6">{blog.date}</p>
              <button className="text-blue-400 font-medium hover:text-blue-300">Baca Selengkapnya →</button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/" className="inline-block px-8 py-3 border border-gray-600 text-gray-300 hover:bg-gray-800 rounded-full transition">
            Balik ke Beranda
          </Link>
        </div>

      </div>
    </section>
  );
}
