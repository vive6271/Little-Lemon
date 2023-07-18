import Card from "./Card";
import { Link } from "react-router-dom";
const foods = [
    {
        title: "Greek salad",
        description: "The famous greek salad of crispy lettuce, peppers, olives and feta cheese, garnished with crunchy garlic and rosemary croutons.",
        price: "12.99",
        img: () => require("../images/greek-salad.jpg"),
    },
    {
        title: "Bruschetta",
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        price: "7.99",
        img: () => require("../images/bruschetta.png"),
    }
    ,
    {
        title: "Lemon Dessert",
        description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        price: "9.99",
        img: () => require("../images/lemon-dessert.jpg"),
    }
]

const MainMenu = () => {
    return(
        <div className='menu-top'>
            <div className='bar'>
              <h1>This weeks specials!</h1>
              <button><Link to='/menu' className='link'>Online Menu</Link></button>
            </div>

            <div className='item-menu'>
                {foods.map((food) => (
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