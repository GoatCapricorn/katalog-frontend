import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [produk, setProduk] = useState([]);

  useEffect(() => {
    fetch("https://katalog-backend-ni5n.onrender.com/api/produk")
      .then(res => res.json())
      .then(data => setProduk(data))
      .catch(err => console.error("Gagal ambil data:", err));
  }, []);

  return (
    <div className="container">
      <h1>Katalog Produk</h1>
      <div className="produk-grid">
        {produk.map((item, index) => (
          <div className="produk-card" key={index}>
            <img src={item.gambar} alt={item.nama} />
            <h3>{item.nama}</h3>
            <p>Rp {item.harga.toLocaleString()}</p>
            <a href={item.link} target="_blank">Lihat di Shopee</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
