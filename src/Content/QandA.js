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


function QandA() {
    return (
      <div>
      <div style={{ width: "100%" }}>
      <Header/>
    </div>
    <Hero/>
    <Slider/>
    <Section3/>
    <Speaker2/>
    <Section3/>
    <Section4/>
    <DownloadSection/>
    <Footer />

    </div>    );
  }
  
  export default QandA;