import PropTypes from 'prop-types';

const SuperIndex = (count) => {
    return (
        <div>
            <h1>SuperIndex</h1>
        </div>
    )
}

SuperIndex.prototype = {
    count: PropTypes.number.isRequired
}

export default SuperIndex;