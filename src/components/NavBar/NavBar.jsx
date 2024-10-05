import { useContext } from "react"
import { NavLink } from "react-router-dom"
import CartContext from "../../context/CartContext/CartContext"
import logoImage from '../../assets/logo.svg'
import cartImage from '../../assets/cart.svg'


export default function NavBar () {

  const { cart } = useContext(CartContext)

  return (
    <ul className="flex flex-row justify-between items-center m-4 shadow shadow-customOrange bg-slate-950 rounded-xl h-16 text-lg font-bold">

      <div className="flex items-center h-full">
        <NavLink to={'/'} className="mx-4 px-4 cursor-pointer shadow hover:bg-gray-900 hover:text-orange-500 h-full flex items-center"> 
          <img src={logoImage} alt="Logo" className="h-10" />
        </NavLink>
      </div>

      <div className="flex flex-row items-center h-full text-xl">
        <NavLink to={'/'} className="mx-4 px-2 cursor-pointer shadow hover:bg-gray-900 hover:text-orange-500 h-full flex items-center"> Home </NavLink>
        <NavLink to={'/category/GPU'} className="mx-4 px-2 cursor-pointer shadow hover:bg-gray-900 hover:text-orange-500 h-full flex items-center"> Graphics Cards </NavLink>
        <NavLink to={'/category/CPU'} className="mx-4 px-2 cursor-pointer shadow hover:bg-gray-900 hover:text-orange-500 h-full flex items-center"> Processors </NavLink>
        <NavLink to={'/category/Motherboard'} className="mx-4 px-2 cursor-pointer shadow hover:bg-gray-900 hover:text-orange-500 h-full flex items-center"> Motherboards </NavLink>
        <NavLink to={'/category/RAM'} className="mx-4 px-2 cursor-pointer shadow hover:bg-gray-900 hover:text-orange-500 h-full flex items-center"> RAM Memory </NavLink>
        <NavLink to={'/category/PSU'} className="mx-4 px-2 cursor-pointer shadow hover:bg-gray-900 hover:text-orange-500 h-full flex items-center"> Power Supply </NavLink>
      </div>

      <NavLink to={'/cart'} className="mx-4 px-4 cursor-pointer shadow hover:bg-gray-900 hover:text-orange-500 h-full flex items-center"> 
        <img src={cartImage} alt="cart" className="h-10 pr-2" />
        <span>{cart.length}</span>
      </NavLink>

    </ul>
  )
}
