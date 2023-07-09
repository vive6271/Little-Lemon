import logo from"../assets/logo-bottom.png"

const Footer = () => {
    return (
        <div className= 'footer-nav' style={{display: 'flex', backgroundColor: "#C1C1C1"}}>
            <img src={logo} alt="Logo" style={{display: 'flex', width:'150px', padding: '6vh 0 10vh 10vw'}}/>
            <div className="doormat bottom-block">
                <h2>Doormat Navigation</h2>
                <ul>
                   <li className="footer-nav-li"> <a herf="#" className = "nav-home">Home</a> </li>
                   <li className="footer-nav-li"> <a herf="#" className = "nav-about">About</a> </li>
                   <li className="footer-nav-li"> <a herf="#" className = "nav-menu">Menu</a> </li>
                   <li className="footer-nav-li"> <a herf="#" className = "nav-res">Reservations</a> </li>
                   <li className="footer-nav-li"> <a herf="#" className = "nav-oo">Online Order</a> </li>
                   <li className="footer-nav-li"> <a herf="#" className = "nav-login">Login</a> </li>
                </ul>
            </div>
            <div className="Contact bottom-block">
                <h2>Contact</h2>
                <ul>
                   <li className="footer-nav-li"> <a herf="#" className = "nav-add">Adderss</a> </li>
                   <li className="footer-nav-li"> <a herf="#" className = "nav-ph">Phone Number</a> </li>
                   <li className="footer-nav-li"> <a herf="#" className = "nav-email">Email</a> </li>
                </ul>
            </div>
            <div className="Social bottom-block">
                <h2>Social Media Links</h2>
                <ul>
                   <li className="footer-nav-li"> <a herf="#" className = "nav-face">Facebook</a> </li>
                   <li className="footer-nav-li"> <a herf="#" className = "nav-ins">Instagram</a> </li>
                   <li className="footer-nav-li"> <a herf="#" className = "nav-tw">Twitter</a> </li>
                   <li className="footer-nav-li"> <a herf="#" className = "nav-yt">YouTube</a> </li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;