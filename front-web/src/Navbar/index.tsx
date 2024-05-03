import './styles.css';
import Logo from './logo.png'
function Navbar() {
    return (
        <nav className="main-navbar">
            <img className="navbar-logo" src={Logo} alt="logo pizzaria" />

            <a className="logo-text" href="home" target="_blank">
                <h1 className='nav-title'>
                    PIZZARIA IMPÉRIO
                </h1>
            </a>

        </nav>
    )
}

export default Navbar;