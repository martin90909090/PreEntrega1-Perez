import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import './itemCount.css';

const ItemCount = ({ onMinus, initial, onAdd }) => {

    return (
        <div className='counter'>
            <Button onClick={onMinus}>-</Button>
            <span>{initial}</span>
            <Button onClick={onAdd}>+</Button>
        </div>
    )
}

ItemCount.propTypes = {
    onMinus: PropTypes.func.isRequired,
    initial: PropTypes.number.isRequired,
    onAdd: PropTypes.func.isRequired
}

export default ItemCount;