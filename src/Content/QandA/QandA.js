import Trusted from "../../Bookings/Trusted";
import DownloadSection from "../../Home/DownloadSection";
import Footer from "../../Home/Footer";
import Header from "../../Home/Header";
import Hero from "../../Home/Hero";
import Section2 from "../../Home/Section2";
import Section3 from "../../Home/Section3";
import Section4 from "../../Home/Section4";
import Section6 from "../../Home/Section6";
import Slider from "../../Home/Slider";
import Slider2 from "../../Home/Slider2";
import Speaker2 from "../../Home/Speaker2";
import Heroqanda from "./Heroqanda";
import Section3qa from "./Section3qa";
import Section3qa2 from "./Section3qa2";
import Section4qa from "./Section4qa";
import Sliderqa from "./Sliderqa";
import Speakerqa from "./Speakerqa";


function QandA() {
    return (
      <div>
      <div style={{ width: "100%" }}>
      <Header/>
    </div>
    
    <Heroqanda/>
    <Sliderqa/>
   
    <Section3qa/>
    <Speakerqa/>
    <Section3qa2/>
    <Section4qa/>
    <DownloadSection/>
    <Footer />

    </div>    );
  }
  
  export default QandA;