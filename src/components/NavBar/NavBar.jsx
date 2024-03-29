import PropTypes from 'prop-types';
import './navBar.scss';
import CartWidget from '../CartWidget/CartWidget';

export const NavBar = ({message}) => {
    return(
        <>
        <h1>{message}</h1>
        <CartWidget />
        </>
    )
}

NavBar.propTypes = {
    message: PropTypes.string.isRequired
}

export default NavBar;