import { useEffect, useState } from 'react'
import ItemList from './ItemList'
//import { useParams } from 'react-router-dom'
import { getDocs, collection, getFirestore } from 'firebase/firestore'

export default function ItemListContainer () {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const db = getFirestore()
    const itemCollection = collection(db, 'items')
    getDocs(itemCollection)
      .then ((snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))
        )
      })
  }, [])

  return (
    <div className="flex flex-row m-4 h-auto shadow shadow-red-500">
        <ItemList items={products} />
    </div>
  )
}