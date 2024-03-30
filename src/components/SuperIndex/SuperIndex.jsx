import PropTypes from 'prop-types';
import './superIndex.css';

const SuperIndex = ({count}) => {
    return (
        <>
            <span className="count">{count}</span>
        </>
    )
}

SuperIndex.propTypes = {
    count: PropTypes.number.isRequired
}

export default SuperIndex;