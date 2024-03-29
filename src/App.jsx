import './App.scss'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar' 

function App() {

  return (
    <>
      <NavBar message="Hello" />
      <ItemListContainer greeting="¡Bienvenid@!" />
    </>
  )
}

export default App
