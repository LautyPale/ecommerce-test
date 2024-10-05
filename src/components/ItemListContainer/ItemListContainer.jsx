import { useEffect, useState, /*useContext*/ } from 'react'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where, getFirestore } from 'firebase/firestore'
//import CartContext from '../../context/CartContext/CartContext'
import ItemList from './ItemList'

export default function ItemListContainer () {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoryId } = useParams()

  const categoryIdNames ={
    'GPU': 'Graphics Cards',
    'CPU': 'Processors',
    'Motherboard': 'Motherboards',
    'RAM': 'RAM Memory',
    'PSU': 'Power Supply'
  }

  useEffect(() => {
    const db = getFirestore()
    const itemCollection = collection(db, 'items')
    const queryCategory = categoryId 
    ? query(itemCollection, where('category', '==', categoryId))
    : itemCollection;
    getDocs(queryCategory)
      .then ((snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        )
      })
      .finally(() => {
        setLoading(false);
      })
  }, [categoryId])

  if (loading) {
    return (
      <div className="flex justify-center items-center mt-52" role="status">
          
        <svg 
          aria-hidden="true" 
          className="w-16 h-16 text-gray-200 animate-spin dark:text-gray-600 fill-customOrange"
          viewBox="0 0 100 101" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" 
          fill="currentColor"
          />
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" 
          fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>

      </div>
    )
  }

  const getRandomDeals = (products) => {
    const lowPriceProducts = products.filter(product => product.price < 200);
    const shuffled = lowPriceProducts.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  }

  if(categoryId === undefined) {

    const deals = getRandomDeals(products);

    return (
      <div className="flex flex-col m-4 h-auto shadow shadow-customBlueDark bg-slate-950 rounded-xl">
          <div>
            <h1 className="text-5xl text-center pt-8 px-4">Welcome to <span className='text-customOrangeDark'>ComTech Store</span></h1>
          </div>
          <div>
            <h2 className='text-4xl ml-4 px-4 pt-4'>Deals</h2>
            <ItemList items={deals}/>
          </div>
          <div>
            <h2 className='text-4xl ml-4 px-4'>All Products</h2>
            <ItemList items={products} />
          </div>
          
      </div>
    )
  } else {
    return (
      <div className="flex flex-col m-4 h-auto shadow shadow-customBlueDark bg-slate-950 rounded-xl">
        <div>
          <h2 className='text-4xl m-4 px-4 pt-4'>{categoryIdNames[categoryId]}</h2>
          <ItemList items={products} />
        </div>
      </div>
    )
  }
  
}