import PropTypes from 'prop-types';
import './itemListContainer.css';

const ItemListContainer = ({greeting}) => {
    return (
        <>
            <div className="itemListContainer">
                <h1>{greeting}</h1>
            </div>
        </>
    )
}

ItemListContainer.propTypes = {
    greeting: PropTypes.string.isRequired
};

export default ItemListContainer;