import VerticalCard from "../components/VerticalCard";
import { foods } from "../api/foodMenu";
import { useNavigate } from 'react-router-dom';

const OrderPage = () => {
    const navigate = useNavigate();
    const placeOrder = () => {
        if(true){
            navigate('/online-order-confirmed');
        }
    }
    return (
        <div>
            <div className='menu=page'>
                {foods.map((food) => (
                    <VerticalCard
                     key={food.title}
                     title={food.title}
                     description={food.description}
                     price={food.price}
                     imgSrc={food.img()}
                     btnShow={true}
                     placeOrder={placeOrder}
                    />
                ))}
            </div>
        </div>
    );
}

export default OrderPage;