import { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './itemList.scss';

const ItemList = () => {
    const[items, setItems] = useState([]);
    
    useEffect(() => {
        fetch("https://66263f8b052332d5532231ad.mockapi.io/api/v1/mock-api-v1")
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
            setItems(data.slice(0, 10));
        }).catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
    }, []);

    return (
        <div className='itemList'>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        <Item {...item} />
                    </li>
                ))}
            </ul>    
        </div>
    )
}

export default ItemList;