import ProductCard from '../components/ProductCard'

const sampleProducts = [
  { id: 1, title: 'Handmade Crochet Scarf', price: 750, image: '/images/scarf.jpg' },
  { id: 2, title: 'Knitted Beanie', price: 500, image: '/images/beanie.jpg' },
]

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 text-pink-700">Welcome to Knit & Craft</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sampleProducts.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  )
}
