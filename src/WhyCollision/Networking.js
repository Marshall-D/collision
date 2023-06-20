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
import Section3 from "../Home/Section3";
import Slider from "../Home/Slider";
import Slider2 from "../Home/Slider2";
import Speaker2 from "../Home/Speaker2";
import SpeakerTableHome from "../Home/SpeakerTableHome";
import HeroNetwork from "./HeroNetwork";
import Section2Network from "./Section2Network";
import Section2Network2 from "./Section2Network2";
import Section2Network3 from "./Section2Network3";
import Section3Network from "./Section3Network";
import Section3Network2 from "./Section3Network2";
import Section3Network3 from "./Section3Network3";
import Slider2Network from "./Slider2Network";
import SliderNetwork from "./SliderNetwork";

function Networking() {
    return (
      <div>
      <div style={{ width: "100%" }}>
      <Header />
    </div>
    <HeroNetwork/>
    <SliderNetwork/>
    <Slider2Network/>
    <Section2Network/>
    <Section3Network/>
    <Section2Network2/>
    <Section3Network2/>
     <Section2Network3/>
    <Section3Network3/>

    <SpeakerTableHome/>
    <DownloadSection/>
    <Footer/>

    </div>    );
  }
  
  export default Networking;