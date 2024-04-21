import PropTypes from 'prop-types';
import './itemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = ({greeting}) => {
    return (
        <>
            <div className="itemListContainer">
                <h1>{greeting}</h1>
            </div>
            <ItemCount />
        </>
    )
}

ItemListContainer.propTypes = {
    greeting: PropTypes.string.isRequired
};

export default ItemListContainer;