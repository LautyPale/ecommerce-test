import { useEffect, useState, /*useContext*/ } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where, getFirestore } from 'firebase/firestore'
//import CartContext from '../../context/CartContext/CartContext'

export default function ItemListContainer () {

  const [products, setProducts] = useState([])
  const { categoryId } = useParams()

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
  }, [categoryId])

  return (
    <div className="flex flex-row m-4 h-auto shadow shadow-indigo-900 bg-slate-950 rounded-xl">
        <ItemList items={products} />
    </div>
  )
}