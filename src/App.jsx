import NavBar from "./components/NavBar/NavBar.jsx"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Cart from "./components/Cart/Cart"
import './App.css';
import { Route, Routes } from 'react-router-dom'


export default function App() {

  return (
    <>
      <NavBar />
      <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/category/:categoryId' element={<ItemListContainer />}/>
          <Route path='/detail/:id' element={<ItemDetailContainer />}/>
          <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </>
  )
}