

import DownloadSection from "../Home/DownloadSection";
import Footer from "../Home/Footer";
import Header from "../Home/Header";
import Hero from "../Home/Hero";
import Section3 from "../Home/Section3";
import Slider from "../Home/Slider";
import Slider2 from "../Home/Slider2";
import Speaker2 from "../Home/Speaker2";
import HeroReasons from "./HeroReasons";
import Slider2Reasons from "./Slider2Reasons";
import SliderReasons from "./SliderReasons";

function Reasons() {
    return (
      <div>
      <div style={{ width: "100%" }}>
      <Header />
    </div>
    <HeroReasons/>
    <SliderReasons/>
    <Section3/>
    <Slider2Reasons/>
    <Speaker2/>
    <Slider2/>
<DownloadSection/>
    <Footer/>

    </div>    );
  }
  
  export default Reasons;