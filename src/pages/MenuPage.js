import VerticalCard from "../components/VerticalCard";
import { foods } from "../api/foodMenu";

const MenuPage = () => {
    return (
        <div>
            <div className='menu-page'>
                {foods.map((food) => (
                    <VerticalCard
                     key={food.title}
                     title={food.title}
                     description={food.description}
                     price={food.price}
                     imgSrc={food.img()}
                     btnShow={false}
                    />
                ))}
            </div>
        </div>
    );
}

export default MenuPage;