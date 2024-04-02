import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import Navbar2 from './components/Navbar2'
import Navbar3 from './components/Navbar3'
import { Routes, Route } from 'react-router'
import Movies from './views/Movies'
import Cart from './views/Cart'

function App() {

  return (
    <>
      <Navbar3/>
      <Navbar2/>
      <NavBar />
      <Routes>
        <Route path='/' element={
          <ItemListContainer greeting="¡Bienvenid@!" />}
        />
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/movies/:category' element={<Movies/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </>
  )
}

export default App