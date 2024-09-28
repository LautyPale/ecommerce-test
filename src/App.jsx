import NavBar from "./components/NavBar/NavBar.jsx"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import CartDetail from "./components/Cart/Cart"
import './App.css';
import { Route, Routes } from 'react-router-dom'
import CartContextProvider from "./context/CartContext/CartContextProvider.jsx";

export default function App() {

  return (
    <>
      <CartContextProvider>
        <NavBar />
        <Routes>
            <Route path='/' element={<ItemListContainer />}/>
            <Route path='/category/:categoryId' element={<ItemListContainer />}/>
            <Route path='/detail/:id' element={<ItemDetailContainer />}/>
            <Route path='/cart' element={<CartDetail/>}/>
        </Routes>
      </CartContextProvider>
    </>
  )
}