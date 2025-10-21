import { useParams } from 'react-router-dom'

export default function ProductDetail() {
  const { id } = useParams()
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Product {id}</h1>
      <p>Details for product {id} will go here.</p>
    </div>
  )
}
