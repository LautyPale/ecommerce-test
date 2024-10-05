import { Link } from 'react-router-dom'

export default function Item ({ item }) {
  return (
    <div key={item.id} className="flex flex-row w-[580px] m-4 p-2 rounded-xl shadow shadow-customOrangeDark bg-gray-900"
    
    >
      <img src={item.image} alt={item.name} className='p-4 w-64 h-64' />
      <div className='flex flex-col flex-grow justify-between p-4 text-lg'>
        <h3>Name: {item.name}</h3>
        <p>Model: {item.model}</p>
        <p>Price: {item.price}</p>
        <p>Stock: {item.stock}</p>

        <Link className='mt-auto w-full inline-block px-4 py-2 bg-customBlue font-bold rounded-lg shadow-md hover:bg-customOrange focus:outline-none' 
              to={`/detail/${item.id}`}> View Details </Link>
        
      </div>
    </div>
  )
}
