import Item from '../Item/Item';
import './itemList.scss';

const ItemList = () => {
    return (
        <div>
            <h1>ItemList</h1>
            <div className='itemList'>
                <Item id={1} name="Item 1" price={100} description="Description 1" />
                <Item id={2} name="Item 2" price={200} description="Description 2" />
                <Item id={3} name="Item 3" price={300} description="Description 3" />
                <Item id={4} name="Item 4" price={400} description="Description 4" />
                <Item id={5} name="Item 5" price={500} description="Description 5" />
            </div>
        </div>
    )
}

export default ItemList;