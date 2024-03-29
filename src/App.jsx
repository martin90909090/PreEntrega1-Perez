import './App.scss'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar' 

function App() {

  return (
    <>
      <NavBar message1="Hello" />
      <ItemListContainer message2="Hello" />
    </>
  )
}

export default App
