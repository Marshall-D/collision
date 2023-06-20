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
import SpeakerTableHome from "../Home/SpeakerTableHome";
import HeroLead from "./HeroLead";
import Section2Lead from "./Section2Lead";
import Section3Lead from "./Section3Lead";
import Section3Lead2 from "./Section3Lead2";
import Section4Lead from "./Section4Lead";
import SliderLead from "./SliderLead";

function Lead() {
    return (
      <div>
      <div style={{ width: "100%" }}>
      <Header />
    </div>
    <HeroLead/>
    <SliderLead/>
    <Section2Lead/>
    <Section3Lead/>
    <Section3Lead2/>
    <SpeakerTableHome/>
    <Slider2/>
    <Section4Lead/>
    <DownloadSection/>


    <Footer/>

    </div>    );
  }
  
  export default Lead;
