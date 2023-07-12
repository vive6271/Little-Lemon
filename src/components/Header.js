import Nav from "./Nav";
import logo from"../images/logo-top.png"

const Header = () => {
    return (
      <div className='header'>
        <img src={logo} alt="Logo" style={{display: 'flex', width: '15vw'}}/>
        <Nav/>
      </div>
    )
}

export default Header;