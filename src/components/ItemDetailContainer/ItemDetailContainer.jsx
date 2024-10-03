import { useEffect, useState, useContext } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { getDoc, doc, getFirestore } from 'firebase/firestore'
import CartContext from '../../context/CartContext/CartContext';

export default function ItemDetailContainer() {

  const [item, setItem] = useState({})
  const { id } = useParams()
  const { addItem } = useContext(CartContext)
  
  const onAdd = (quantity) => {
    addItem(item, quantity)
  }

  useEffect(() => {
    const db = getFirestore()
    const docRef = doc(db, 'items', id)
    getDoc(docRef)
    .then ((snapshot) => {
      if (snapshot.exists()) {
        setItem({ 
          id: snapshot.id, 
          ...snapshot.data() 
        })
      }
    })

  }, [id])

  return (
    <div className="mx-auto w-7/12 flex flex-row m-4 shadow shadow-customBlue">
        <ItemDetail item={item} onAdd={onAdd}/>
    </div>
  )
}

