import PropTypes from 'prop-types';
import {Card} from 'react-bootstrap';
import './item.scss';

const Item = ({id, image, name, price, description, handleClick}) => {
    return (
        <Card className='card'>
            <Card.Body className='body'>
                <Card.Img variant='top' src={image} />
                <Card.Title>{id} {name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text>{price}</Card.Text>
                <Card.Link onClick={handleClick}>Ver detalle</Card.Link>
            </Card.Body>
        </Card>
    )
}

Item.propTypes = {
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired
}

export default Item;