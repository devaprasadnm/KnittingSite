import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-pink-700">Knit & Craft</Link>
        <div className="space-x-4">
          <Link to="/products" className="hover:text-pink-600">Shop</Link>
          <Link to="/cart" className="hover:text-pink-600">Cart</Link>
          <Link to="/login" className="hover:text-pink-600">Login</Link>
        </div>
      </div>
    </nav>
  )
}
