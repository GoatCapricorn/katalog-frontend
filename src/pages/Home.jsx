import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-24 px-4">
        <h1 data-aos="fade-up" className="text-5xl font-bold mb-4 text-blue-400 drop-shadow-lg">
          Temukan Produk Modern & Elegan
        </h1>
        <p className="text-gray-300 max-w-xl mx-auto mb-8 text-lg">
          Jelajahi katalog terbaik untuk mempercantik rumah dan gaya hidup Anda.
        </p>
        <Link
          to="/katalog"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded transition duration-300"
        >
          Lihat Katalog
        </Link>
      </section>

      {/* Kategori Preview */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div className="bg-gray-700 hover:bg-gray-600 rounded-lg p-6 text-center transition duration-300 shadow-md">
          <h3 className="text-2xl font-semibold text-blue-300 mb-2">🛋️ Produk Terbaru</h3>
          <p className="text-gray-300">Koleksi modern untuk segala kebutuhan rumah tangga.</p>
        </div>
        <div className="bg-gray-700 hover:bg-gray-600 rounded-lg p-6 text-center transition duration-300 shadow-md">
          <h3 className="text-2xl font-semibold text-blue-300 mb-2">🛏️ Kamar Tidur</h3>
          <p className="text-gray-300">Desain nyaman dan stylish untuk istirahat optimal.</p>
        </div>
        <div className="bg-gray-700 hover:bg-gray-600 rounded-lg p-6 text-center transition duration-300 shadow-md">
          <h3 className="text-2xl font-semibold text-blue-300 mb-2">🪟 Dekorasi</h3>
          <p className="text-gray-300">Sentuhan akhir yang membuat ruangan lebih hidup.</p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 px-4 bg-gray-900">
        <h2 className="text-3xl font-bold text-blue-400 mb-4">Tingkatkan Gaya Hidup Anda</h2>
        <p className="text-gray-400 mb-6">
          Belanja dengan mudah, cepat, dan penuh inspirasi.
        </p>
        <Link
          to="/katalog"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded font-medium transition"
        >
          Jelajahi Semua Produk
        </Link>
      </section>
    </div>
  )
}
