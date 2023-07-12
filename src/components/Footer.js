import logo from "../images/logo-bottom.png"

const Footer = () => {
    return (
        <div className='footer-nav'>
            <img src={logo} alt="Logo" />
            <div className="doormat bottom-block">
                <h2>Doormat Navigation</h2>
                <ul>
                    <li> <a herf="#">Home</a> </li>
                    <li> <a herf="#" >About</a> </li>
                    <li> <a herf="#" >Menu</a> </li>
                    <li> <a herf="#" >Reservations</a> </li>
                    <li> <a herf="#" >Online Order</a> </li>
                    <li> <a herf="#" >Login</a> </li>
                </ul>
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