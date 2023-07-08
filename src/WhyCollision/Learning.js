// import Hero from '../Home/Hero';
// import Section2 from '../Section2';
// import Slider from './Slider';
// import Speaker2 from './Speaker2';
// import DownloadSection from '../Home/DownloadSection';
// import Slider2 from './Slider2';
// import Section3 from './Section3';
// import Section4 from './Section4';
// import Section5 from './Section5';
// import Section6 from './Section6';
// import Footer from './Footer';
// import Header from './Header';

import Speaker2Att from "../Attendees/Speaker2Att";
import DownloadSection from "../Home/DownloadSection";
import Footer from "../Home/Footer";
import Header from "../Home/Header";
import Hero from "../Home/Hero";
import Section2 from "../Home/Section2";
import Section3 from "../Home/Section3";
import Section4 from "../Home/Section4";
import Section5 from "../Home/Section5";
import Section6 from "../Home/Section6";
import Slider from "../Home/Slider";
import Slider2 from "../Home/Slider2";
import Speaker2 from "../Home/Speaker2";
import HeroLearning from "./HeroLearning";
import Section2Learning from "./Section2Learning";
import Section2Learning2 from "./Section2Learning2";
import Section3Learning from "./Section3Learning";
import Section4Learning from "./Section4Learning";
import Slider2Learning from "./Slider2Learning";

function Learning() {
    return (
      <div>
      <div style={{ width: "100%" }}>
      <Header />
    </div>
    <HeroLearning/>
    <Section2Learning/>
    <Section3Learning/>
    <Speaker2Att/>
 

    <Slider2Learning/>
    <DownloadSection/>
    <Section4Learning/> 

    <Footer/>

    </div>    );
  }
  
  export default Learning;