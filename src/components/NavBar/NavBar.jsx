import { useContext } from "react"
import { NavLink } from "react-router-dom"
import CartContext from "../../context/CartContext/CartContext"
import logoImage from '../../assets/logo.svg'
import cartImage from '../../assets/cart.svg'


export default function NavBar () {

  const { cart } = useContext(CartContext)

  return (
    <ul className="flex flex-row justify-between items-center m-4 rounded-xl h-16 text-lg font-bold bg-ebony-black">

      <div className="flex items-center h-full">
        <NavLink to={'/'} className="mx-4 px-4 h-full flex items-center"> 
          <img src={logoImage} alt="Logo" className="h-10" />
        </NavLink>
      </div>

      <div className="flex flex-row items-center h-full text-lg">
        <NavLink to={'/'} className="px-6 py-4 rounded-xl hover:bg-ink-black hover:text-customOrangeDark"> Home </NavLink>
        <NavLink to={'/category/GPU'} className="px-6 py-4 rounded-xl hover:bg-ink-black hover:text-customOrangeDark"> Graphics Cards </NavLink>
        <NavLink to={'/category/CPU'} className="px-6 py-4 rounded-xl hover:bg-ink-black hover:text-customOrangeDark"> Processors </NavLink>
        <NavLink to={'/category/Motherboard'} className="px-6 py-4 rounded-xl hover:bg-ink-black hover:text-customOrangeDark "> Motherboards </NavLink>
        <NavLink to={'/category/RAM'} className="px-6 py-4 rounded-xl hover:bg-ink-black hover:text-customOrangeDark "> RAM Memory </NavLink>
        <NavLink to={'/category/PSU'} className="px-6 py-4 rounded-xl hover:bg-ink-black hover:text-customOrangeDark"> Power Supply </NavLink>
      </div>

      <NavLink to={'/cart'} className="px-6 py-2 rounded-xl hover:bg-ink-black hover:text-customOrangeDark flex items-center"> 
        <img src={cartImage} alt="cart" className="h-10 pr-2" />
        <span>{cart.length}</span>
      </NavLink>

    </ul>
  )
}
