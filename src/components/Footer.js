import logo from "../images/logo-bottom.png"
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className='footer-nav'>
            <img src={logo} alt="Logo" />
            <div className="doormat bottom-block">
                <h2>Doormat Navigation</h2>
                <nav>
                    <Link to='/' className='nav-item-footer'>Home</Link>
                    <Link to='/about' className='nav-item-footer'>About</Link>
                    <Link to='/menu' className='nav-item-footer'>Menu</Link>
                    <Link to='/booking-page' className='nav-item-footer'>Reservation</Link>
                    <Link to='/online-order' className='nav-item-footer'>Online Order</Link>
                    <Link to='/login' className='nav-item-footer'>Login</Link>
                </nav>
            </div>
            <div className="Contact bottom-block">
                <h2>Contact</h2>
                <ul>
                    <li> <a herf="#" >Adderss</a> </li>
                    <li> <a herf="#" >Phone Number</a> </li>
                    <li> <a herf="#" >Email</a> </li>
                </ul>
            </div>
            <div className="Social bottom-block">
                <h2>Social Media Links</h2>
                <ul>
                    <li> <a herf="#" >Facebook</a> </li>
                    <li> <a herf="#" >Instagram</a> </li>
                    <li> <a herf="#" >Twitter</a> </li>
                    <li> <a herf="#" >YouTube</a> </li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;