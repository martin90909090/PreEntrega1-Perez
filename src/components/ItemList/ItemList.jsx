import { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './itemList.scss';

const ItemList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            fetch("https://fakestoreapi.com/products?limit=5")
        .then(response => {
            if(!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        }).then(data => {
            for (let i = data.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [data[i], data[j]] = [data[j], data[i]];
            }
            setItems(data.slice(0, 5));
        }).catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
        }, 2000);}, 
    []);

    return (
        <div className='itemList'>
            <ul className='list'>
                {items.map((item, index) => (
                    <Item key={index} image={item.image} id={item.id} name={item.title} price={item.price} />
                ))}
            </ul>
        </div>
    )
}

export default ItemList;