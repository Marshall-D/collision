

import DownloadSection from "../Home/DownloadSection";
import Footer from "../Home/Footer";
import Header from "../Home/Header";

import Slider2 from "../Home/Slider2";
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
