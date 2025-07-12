import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-4 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-700">KatalogKami</h1>
      <div className="space-x-4">
        <Link to="/" className="text-gray-700 hover:text-blue-700">Beranda</Link>
        <Link to="/katalog" className="text-gray-700 hover:text-blue-700">Katalog</Link>
      </div>
    </nav>
  )
}
