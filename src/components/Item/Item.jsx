import PropTypes from 'prop-types';
import {Card} from 'react-bootstrap';

const Item = ({id, name, price, description}) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{id} {name}</Card.Title>
                <Card.Text>{price}</Card.Text>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
        </Card>
    )
}

Item.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
}

export default Item;