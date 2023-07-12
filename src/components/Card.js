import logo from "../images/fast-delivery.png"


const Card = ({title, description, price, imgSrc}) => {
    return (
        <div className='card'>
            <img src={imgSrc} alt={title} />
            <div className='heading'>
              <h1>{title}</h1>
              <h1> $ {price}</h1>
            </div>
            <p>{description}</p>
            <div className='delivery'>
                <h1>Order for a delivery</h1>
                <img src={logo} alt="Logo" style={{display: 'flex', width: '2vw'}}/>
            </div>
        </div>
    );
}

export default Card;