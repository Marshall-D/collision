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


function Sight() {
    return (
      <div>
      <div style={{ width: "100%" }}>
      <Header/>
    </div>
    <Hero/>
    <Slider/>
    <p >
    roundtables details go here
    </p>

    <DownloadSection/>
    <Footer />

    </div>    );
  }
  
  export default Sight;