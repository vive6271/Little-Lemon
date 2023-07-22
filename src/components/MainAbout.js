import about1 from "../images/about1.jpg"
import about2 from "../images/about2.jpg"
import GridImage from "./GridImage";

const MainAbout = () => {
    return (
        <div className='about'>
            <div className='info-about'>
              <h1>Little Lemon</h1>
              <h3>Chicago</h3>
              <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            </div>
            <div className='about-img'>
                <GridImage fImg={about1} sImg={about2} iName={"main-about-img"}/>
            </div>
        </div>
    );
}

export default MainAbout;