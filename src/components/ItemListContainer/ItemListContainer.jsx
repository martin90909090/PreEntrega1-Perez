import PropTypes from 'prop-types';
import './itemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const ItemListContainer = ({greeting}) => {
    const [count, setCount] = useState(0);  

    const onMinus = () => {
        if(count > 0)
        setCount(count - 1);
    }

    const onAdd = () => {
        setCount(count + 1);
    }

    return (
        <>
            <Link to={"/"}>Inicio</Link>
            <div className="itemListContainer">
                <h1 className='header'>{greeting}</h1>
                <ItemCount className='itemCount' onMinus={onMinus} onAdd={onAdd} initial={count} />
                <ItemList />
            </div>
            <Outlet />
        </>
    )
}

ItemListContainer.propTypes = {
    greeting: PropTypes.string.isRequired,
};

export default ItemListContainer;