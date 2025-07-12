import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Katalog from './pages/Katalog'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/katalog" element={<Katalog />} />
      </Routes>
    </>
  )
}

export default App
