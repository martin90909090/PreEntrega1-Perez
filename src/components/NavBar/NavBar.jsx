import PropTypes from 'prop-types';
import './navBar.scss';

export const NavBar = ({message1}) => {
    return(
        <h1>{message1}</h1>
    )
}

NavBar.propTypes = {
    message1: PropTypes.string.isRequired
}

export default NavBar;