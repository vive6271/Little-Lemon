const RateCard = ({name, imgSrc, review}) => {
    return (
        <div className='rate-card'>
            <h1>Rating</h1>
            <img src={imgSrc} alt={name} style={{display: 'flex', width: '5vw'}}/>
            <h2>{name}</h2>
            <p>{review}</p>
        </div>
    );
}

export default RateCard;