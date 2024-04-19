import PropTypes from 'prop-types';

const ItemCount = ({ minus, stock, add }) => {
    return (
        <div>
            <button onClick={minus}>-</button>
            <span>{stock}</span>
            <button onClick={add}>+</button>
        </div>
    )
}

ItemCount.propTypes = {
    minus: PropTypes.func.isRequired,
    stock: PropTypes.number.isRequired,
    add: PropTypes.func.isRequired
}

export default ItemCount;