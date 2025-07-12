import { useEffect, useState } from 'react'

function App() {
  const [produk, setProduk] = useState([])
  const [search, setSearch] = useState('')
  const [dark, setDark] = useState(false)
  const [page, setPage] = useState(1)
  const itemsPerPage = 6

  useEffect(() => {
    fetch("https://katalog-backend-ni5n.onrender.com/api/produk")
      .then(res => res.json())
      .then(data => setProduk(data))
      .catch(err => console.error("Gagal ambil data:", err))
  }, [])

  const filteredProduk = produk.filter(item =>
    item.nama.toLowerCase().includes(search.toLowerCase())
  )

  const maxPage = Math.ceil(filteredProduk.length / itemsPerPage)
  const paginatedProduk = filteredProduk.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  )

  return (
    <div className={dark ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-black dark:text-white px-4 py-10 font-sans">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-blue-700 dark:text-blue-300 mb-6">Katalog Produk</h1>

          <div className="text-center mb-4">
            <button
              onClick={() => setDark(!dark)}
              className="text-sm px-4 py-2 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 text-black dark:text-white rounded"
            >
              {dark ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
          </div>

          <input
            type="text"
            placeholder="Cari produk..."
            className="w-full max-w-md mx-auto block px-4 py-2 mb-8 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 dark:text-white"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {paginatedProduk.map((item, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 hover:shadow-xl hover:scale-[1.02] transition-transform duration-300">
                <img src={item.gambar} alt={item.nama} className="w-full h-48 object-cover rounded-md mb-4 border" />
                <h2 className="text-xl font-semibold mb-1 text-gray-800 dark:text-gray-100">{item.nama}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-3">Rp {parseInt(item.harga).toLocaleString()}</p>
                <a href={item.link} target="_blank" className="inline-block w-full text-center bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition">
                  Lihat di Shopee
                </a>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center gap-4 mt-10">
            <button
              onClick={() => setPage(p => Math.max(p - 1, 1))}
              disabled={page === 1}
              className="px-3 py-1 rounded bg-blue-500 text-white disabled:opacity-50"
            >
              Sebelumnya
            </button>
            <span>Halaman {page} / {maxPage}</span>
            <button
              onClick={() => setPage(p => Math.min(p + 1, maxPage))}
              disabled={page === maxPage}
              className="px-3 py-1 rounded bg-blue-500 text-white disabled:opacity-50"
            >
              Selanjutnya
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
