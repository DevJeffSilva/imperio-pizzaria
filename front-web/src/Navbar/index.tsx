import './styles.css';
import Logo from './logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="main-navbar">
            <img className="navbar-logo" src={Logo} alt="logo pizzaria" />

            <Link to="/" className="logo-text" >
                <h1 className='nav-title'>
                    PIZZARIA IMPÉRIO
                </h1>
            </Link>
        </nav>
    )
}

export default Navbar;