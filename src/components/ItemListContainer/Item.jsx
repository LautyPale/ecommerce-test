import { Link } from 'react-router-dom'

export default function Item ({ item }) {
  return (
    <div key={item.id} className="relative flex flex-row w-[580px] m-4 p-2 rounded-xl bg-carbon-black">
      <img src={item.image} alt={item.name} className='p-4 w-56 h-56' />
      <div className='flex flex-col flex-grow justify-start p-4 text-lg'>
        <h3>Name: {item.name}</h3>
        <p>Model: {item.model}</p>
        <p>Price: {item.price}</p>
        <p>Stock: {item.stock}</p>

        <Link className='absolute bottom-0 right-0 px-8 py-2 bg-customOrangeDark text-xl font-bold rounded-tl-xl rounded-br-xl hover:bg-customOrange focus:outline-none' 
              to={`/detail/${item.id}`}> View Details </Link>
        
      </div>
    </div>
  )
}
