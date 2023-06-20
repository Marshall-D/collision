import Trusted from "../Bookings/Trusted";
import DownloadSection from "../Home/DownloadSection";
import Footer from "../Home/Footer";
import Header from "../Home/Header";
import Hero from "../Home/Hero";
import Section2 from "../Home/Section2";
import Section3 from "../Home/Section3";
import Section4 from "../Home/Section4";
import Section6 from "../Home/Section6";
import Slider from "../Home/Slider";
import Slider2 from "../Home/Slider2";
import Speaker2 from "../Home/Speaker2";
import HeroRestaurant from "./HeroRestaurant";
import Section2Restaurant from "./Section2Restaurant";


function Restaurant() {
    return (
      <div>
      <div style={{ width: "100%" }}>
      <Header/>
    </div>
    <HeroRestaurant/>
    <Section2Restaurant/>
    <p >
    roundtables details go here
    </p>
    <Slider/>


    <DownloadSection/>
    <Footer />

    </div>    );
  }
  
  export default Restaurant;