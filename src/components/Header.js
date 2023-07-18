import logo from"../images/logo-top.png"
import { Link } from "react-router-dom";

const Header = () => {
    return (
      <div className='header'>
        <img src={logo} alt="Logo" style={{display: 'flex', width: '15vw'}}/>
        <nav className='top-nav'>
          <Link to='/' className='nav-item'>Home</Link>
          <Link to='/about' className='nav-item'>About</Link>
          <Link to='/menu' className='nav-item'>Menu</Link>
          <Link to='/booking-page' className='nav-item'>Reservation</Link>
          <Link to='/online-order' className='nav-item'>Online Order</Link>
          <Link to='/login' className='nav-item'>Login</Link>
        </nav>
      </div>
    );
}

export default Header;