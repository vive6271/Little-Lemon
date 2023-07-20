import Card from "./Card";
import { Link } from "react-router-dom";
import { foods } from "../api/foodMenu";

const MainMenu = () => {
    return(
        <div className='menu-top'>
            <div className='bar'>
              <h1>This weeks specials!</h1>
              <Link to='/menu' className='link'><button>Online Menu</button></Link>
            </div>

            <div className='item-menu'>
                {foods.filter((item, index) => index < 3).map((food) => (
                    <Card
                     key={food.title}
                     title={food.title}
                     description={food.description}
                     price={food.price}
                     imgSrc={food.img()}
                    />
                ))}
            </div>
          </div>
    );
}

export default MainMenu;