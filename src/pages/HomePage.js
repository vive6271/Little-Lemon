import MainBanner from "../components/MainBanner";
import MainMenu from "../components//MainMenu";
import MainRate from "../components//MainRate";
import MainAbout from "../components//MainAbout";

const HomePage = () => {
    return (
        <main>
          <MainBanner/>
          <MainMenu/>
          <MainRate/>
          <MainAbout/>
        </main>
    );
}

export default HomePage;