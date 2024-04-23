import PropTypes from 'prop-types';
import './badge.css';

const Badge = ({count}) => {
    return (
        <>
            <span className="count">{count}</span>
        </>
    )
}

Badge.propTypes = {
    count: PropTypes.number.isRequired
}

export default Badge;