import { Link } from 'react-router-dom'

export default function Item ({ item }) {
  return (
    <div key={item.id} className="w-40 h-auto m-4 shadow shadow-indigo-900">
        <img src={item.image} alt={item.name} />
        <h3>Name: {item.name}</h3>
        <p>Description: {item.model}</p>
        <p>Price: {item.price}</p>
        <p>Stock: {item.stock}</p>
        <p>Category: {item.category}</p>
        <Link className='button' to={`/detail/${item.id}`}>Ver Detalle</Link>
    </div>
  )
}
