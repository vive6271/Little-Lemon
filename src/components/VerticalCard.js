
const VerticalCard = ({title, description, price, imgSrc, btnShow, placeOrder}) => {
    return (
        <div className="vertical-card">
            <div className="ver-info">
                <h1 style={{ color:"#495E57"}}>{title}</h1>
                <p>{description}</p>
                <h1 style={{ color:"#EE9972", paddingTop:"1vw"}}> $ {price}</h1>
                {btnShow ? <button onClick={() => placeOrder()}>Order</button> : null}
            </div>
            <div className="img-card">
                <img src={imgSrc} alt={title}/>
            </div>
        </div>
    );
}

export default VerticalCard;