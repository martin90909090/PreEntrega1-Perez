import { useParams } from "react-router"

const Movies = () => {
  const { category } = useParams()
  return (
    <h1>Soy una seccion de ejemplo Movies {category}</h1>
  )
}

export default Movies