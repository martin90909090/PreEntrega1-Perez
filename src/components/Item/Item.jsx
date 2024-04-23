import PropTypes from 'prop-types';
import {Card} from 'react-bootstrap';
import './item.scss';

const Item = ({id, image, name, price, description}) => {
    return (
        <Card className='card'>
            <Card.Body className='body'>
                <Card.Img variant='top' src={image} />
                <Card.Title>{id} {name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text>{price}</Card.Text>
            </Card.Body>
        </Card>
    )
}

Item.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
}

export default Item;