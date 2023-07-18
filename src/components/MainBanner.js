import ban from "../images/restauranfood.jpg"
import { Link } from "react-router-dom";

const  MainBanner = () => {
    return (
        <div className='main-banner'>
            <div className='info'>
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button><Link to='/booking-page' className='link'>Reserve a table</Link></button>
            </div>
            <img src={ban} alt="Banner"/>
        </div>
    );
}

export default MainBanner;