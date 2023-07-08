

import DownloadSection from "../Home/DownloadSection";
import Footer from "../Home/Footer";
import Header from "../Home/Header";

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