const RateCard = ({name, imgSrc, review}) => {
    return (
        <div className='rate-card' aria-label="Rating Card">
            <h1>{name}</h1>
            <div className="imgBlock">
                <img src={imgSrc} alt={name}/>
                <div className="rating">
                    <h2>Rating</h2>
                    <h4>⭐ ⭐ ⭐ ⭐ ⭐ </h4>
                </div>
            </div>
            <p>{review}</p>
        </div>
    );
}

export default RateCard;