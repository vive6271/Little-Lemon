import RateCard from "./RateCard";

const ratings =  [
    {
        name: "Emily Thompson",
        imgSrc: () => require("../images/user1.png"),
        review: "The Greek salad at this restaurant is a flavorful combination of fresh ingredients, including tomatoes, cucumbers, red onions, Kalamata olives, and feta cheese. The dressing complements the vegetables perfectly, making it a satisfying and healthy choice.",
    },
    {
        name: "David Rodriguez",
        imgSrc: () => require("../images/user2.png"),
        review: "The bruschetta here is a delicious appetizer with crispy toasted bread topped with a delightful mix of ripe tomatoes, garlic, basil, and olive oil. It's a flavorful and satisfying way to start your meal.",
    },
    {
        name: "Sarah Johnson",
        imgSrc: () => require("../images/user3.png"),
        review: "The lemon dessert at this restaurant is a refreshing and perfectly balanced sweet treat. The vibrant lemon flavor adds a zesty twist, and the presentation is beautiful with a light dusting of powdered sugar. It's a delightful ending to your meal.",
    },
    {
        name: "Michael Smith",
        imgSrc: () => require("../images/user4.png"),
        review: "I had a fantastic dining experience at this restaurant with fresh and flavorful Greek salad, delicious bruschetta, and a refreshing lemon dessert. The service was attentive, and the ambiance was cozy and inviting. Highly recommended for a satisfying and enjoyable dining experience.",
    }
]

const MainRate = () => {
    return(
        <div className='testimonials' aria-label="Testimonials">
            <h1>Testimonials</h1>
            <div className='rate-box'>
                {ratings.map((rating) => (
                   <RateCard
                     key={rating.name}
                     name={rating.name}
                     imgSrc={rating.imgSrc()}
                     review={rating.review}
                   />
                ))}
            </div>
        </div>
    );
}

export default MainRate;