import { NavLink } from "react-router-dom"



export default function NavBar () {
  return (
    <ul className="flex flex-row justify-end m-4 shadow shadow-blue-500">
        <NavLink to={'/'} className="mx-4 px-4 py-2 cursor-pointer shadow bg-gray-500 shadow-orange-600 text-white"> Home </NavLink>
        <NavLink to={'/category/gpu'} className="mx-4 px-4 py-2 cursor-pointer shadow bg-gray-500 shadow-orange-600 text-white"> Placas de Video </NavLink>
        <NavLink to={'/category/cpu'} className="mx-4 px-4 py-2 cursor-pointer shadow bg-gray-500 shadow-orange-600 text-white"> Procesadores </NavLink>
        <NavLink to={'/category/mother'} className="mx-4 px-4 py-2 cursor-pointer shadow bg-gray-500 shadow-orange-600 text-white"> Motherboards </NavLink>
        <NavLink to={'/category/ram'} className="mx-4 px-4 py-2 cursor-pointer shadow bg-gray-500 shadow-orange-600 text-white"> Memorias Ram </NavLink>
        <NavLink to={'/category/psu'} className="mx-4 px-4 py-2 cursor-pointer shadow bg-gray-500 shadow-orange-600 text-white"> Fuentes </NavLink>
        <NavLink to={'/cart'} className="mx-4 px-4 py-2 cursor-pointer shadow bg-gray-500 shadow-orange-600 text-white"> CART </NavLink>
    </ul>
  )
}
