export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-3 hover:shadow-md transition">
      <img src={product.image} alt={product.title} className="rounded-md mb-2" />
      <h3 className="text-lg font-semibold">{product.title}</h3>
      <p className="text-gray-600">₹{product.price}</p>
      <button className="mt-2 bg-pink-600 text-white px-3 py-1 rounded hover:bg-pink-700">Add to Cart</button>
    </div>
  )
}
