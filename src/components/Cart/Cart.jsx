import { useContext, useState } from 'react'
import Form from '../Form/Form'
import CartContext from '../../context/CartContext/CartContext'
import { getFirestore, collection, addDoc } from 'firebase/firestore'

export default function CartDetail () {

  const [orderId, setOrderId] = useState('')
  const { cart, removeItem, getTotal, clear } = useContext(CartContext)

  const [buyer, setBuyer] = useState({
    name: '',
    email: ''
  })

  const [error, setError] = useState({
    name: '',
    email: '',
    cart: ''
  })

  const handleInputChange = (e) => {

    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value
    })

  }

  const submit = (e) => {
    e.preventDefault()
    
    const localError = {}
    if (!buyer.name) {
      localError.name = 'Name is required.'
    }
    if (!buyer.email) {
      localError.email = 'Email is required.'
    }
    if (cart.length === 0) {
      localError.cart = 'Cart cannot be empty.'
    }
    if (Object.keys(localError).length === 0) {
      addOrder()
    } else {
      setError(localError)
    }

  }

  const addOrder = () => {
    const purchase = {
      buyer,
      items: cart,
      total: getTotal(),
      date: new Date()
    }
    const db = getFirestore()
    const orderCollection = collection(db, 'orders')
    addDoc(orderCollection, purchase)
    .then (docRef => {
            setOrderId(docRef.id)
            clear()
            setBuyer({
              name: '',
              email: ''
            })
          })
    .catch (error => console.log(error))

  }

  const orderCompleted = () => {
    if (orderId) {
      return <p className='m-4 text-center'>Your order has been successfully created. Your order number is {orderId}</p>
    }
  }

  return (
    <div className='flex flex-col items-center'>
      <div className='mx-auto text-4xl py-4'>CART</div>
      <div className='flex flex-row'>
        {cart.map((item) => (
          <div key={item.id} className='relative p-4 m-4 h-44 w-96 flex flex-col text-lg shadow shadow-customBlue rounded-xl'>
            <div className='flex flex-row'>
              <div className='pr-4'>
                <img src={item.image} alt={item.name} className='h-28'/>
              </div>
              <div>
                <p>Product: {item.name}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total: {item.price * item.quantity}</p>
              </div>
            </div>

            <div className='flex justify-end absolute bottom-0 right-0'>
              <button onClick={() => removeItem(item.id)} className='p-2 bg-customBlue font-bold rounded-tl-lg hover:bg-red-500 focus:outline-none'>
                Remove Item
              </button>
            </div>
            
          </div>
        ))}
      </div>

      <Form
        handleInputChange={handleInputChange} 
        submit={submit} 
        formData={buyer}
        error={error} 
      />
      {
        orderCompleted()
      }

    </div>
  )
}