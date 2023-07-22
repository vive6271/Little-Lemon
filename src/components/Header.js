import { useEffect, useState } from "react";
import logo from "../images/logo-top.png";
import menuImg from "../images/menu.png";
import { Link, useNavigate} from "react-router-dom";

const Header = (props) => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const toggle = () => {
    setMenu(!menu);
  }

  useEffect(() => {
    const changeWidth = () => {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth);

    return () => {
      window.removeEventListener('resize', changeWidth);
    }
  }, []);

  return (
    <div className="header">
    <div className='menu'>
      <img src={logo} alt="Logo" className="logo" onClick={() => navigate("/")}/>
      { (width <= 600) && <button onClick={toggle} style={{backgroundColor:"#fff"}}><img src={menuImg} style={{width:"8vw"}}/></button>}
    </div>

    {(menu || width > 600) && (
      <nav className='top-nav'>
        <Link to='/' className='nav-item' onClick={toggle}>Home</Link>
        <Link to='/about' className='nav-item' onClick={toggle}>About</Link>
        <Link to='/menu' className='nav-item' onClick={toggle}>Menu</Link>
        <Link to='/booking-page' className='nav-item' onClick={toggle}>Reservation</Link>
        <Link to='/online-order' className='nav-item' onClick={toggle}>Online Order</Link>
        {!(props.value) ?  <Link to='/login' className='nav-item' onClick={toggle}>Login</Link> : <Link to='/' className='nav-item' onClick={() => props.setValue(!props.value)}>Logout</Link>}
      </nav>
    )}
  </div>
  );
}

export default Header;