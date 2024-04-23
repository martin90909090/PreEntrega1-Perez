import ItemList from "../ItemList/ItemList";
import { Link } from 'react-router-dom';

const ItemDetails = () => {
    
    return(
        <>
            <ItemList />
            <Link to={"/"}>Inicio</Link>
        </>  
    ) 
}

export default ItemDetails;