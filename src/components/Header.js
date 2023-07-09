import Nav from "./Nav";
import logo from"../assets/logo-top.png"

const Header = () => {
    return (
      <div className='header' style={{display: 'flex'}}>
        <img src={logo} alt="Logo" style={{display: 'flex', width:'240px', padding: '2vh 0 0 10vw'}}/>
        <Nav/>
      </div>
    )
}

export default Header;