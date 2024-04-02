import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import { Routes, Route } from 'react-router'
import Movies from './views/Movies'
import Cart from './views/Cart'

function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenid@!" />
    </>
  )
}

export default App