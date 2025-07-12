import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="bg-white text-gray-800">
      <div className="text-center py-20 px-4 bg-gradient-to-br from-blue-50 to-white">
        <h2 className="text-4xl font-bold mb-4 text-blue-700">Selamat Datang di Katalog Kami</h2>
        <p className="text-lg mb-6 text-gray-600">Temukan produk terbaik untuk kebutuhan Anda</p>
        <Link to="/katalog" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
          Lihat Katalog
        </Link>
      </div>

      <div className="max-w-6xl mx-auto py-12 px-4 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-blue-100 rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">🛋️ Produk Terbaru</h3>
          <p>Jelajahi produk terbaru kami dengan desain modern dan minimalis.</p>
        </div>
        <div className="bg-blue-100 rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">🛏️ Kamar Tidur</h3>
          <p>Solusi nyaman dan bergaya untuk ruang tidur Anda.</p>
        </div>
        <div className="bg-blue-100 rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">🪟 Dekorasi</h3>
          <p>Lengkapi rumah Anda dengan dekorasi yang estetik dan fungsional.</p>
        </div>
      </div>
    </div>
  )
}
