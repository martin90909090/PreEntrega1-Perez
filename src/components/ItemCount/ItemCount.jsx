import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const ItemCount = ({ onMinus, initial, onAdd }) => {
    const [count, setCount] = useState(1);
    
    const handleMinus = () => {
        if(count > 0){
            setCount(count - 1);
            onMinus();
        }
    }

    const handleAdd = () => {
        if(count < initial){
            setCount(count + 1);
            onAdd();
        }
    }

    useEffect(() => {
        setCount(initial);    
    }, [initial]);

    return (
        <div>
            <button onClick={handleMinus}>-</button>
            <span>{count}</span>
            <button onClick={handleAdd}>+</button>
        </div>
    )
}

ItemCount.propTypes = {
    onMinus: PropTypes.func.isRequired,
    initial: PropTypes.number.isRequired,
    onAdd: PropTypes.func.isRequired
}

export default ItemCount;