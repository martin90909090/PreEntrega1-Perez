import PropTypes from 'prop-types';

const ItemListContainer = ({message2}) => {
    return (
        <div className="itemListContainer">
            <h1>{message2}</h1>
        </div>
    )
}

ItemListContainer.propTypes = {
    message2: PropTypes.string.isRequired
};

export default ItemListContainer;