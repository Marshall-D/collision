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
import Slider from "../Home/Slider";
import Slider2 from "../Home/Slider2";
import Speaker2 from "../Home/Speaker2";
import HeroTeam from "./HeroTeam";
import Section2Team from "./Section2Team";
import Section2Team2 from "./Section2Team2";
import Section2Team3 from "./Section2Team3";
import Section3Team from "./Section3Team";
import SliderTeam from "./SliderTeam";

function TeamBuilding() {
    return (
      <div>
      <div style={{ width: "100%" }}>
      <Header />
    </div>
    <HeroTeam/>
    <Section2Team/>
    <Section2Team2/>
    <Section3Team/>
    <SliderTeam/>
    <Section2Team3/>
    <SliderTeam/>


    <DownloadSection/> 
    <Section4/>

    {/* <Slider/>
    <Speaker2/>
    <Slider2/>
*/}


    {/* 
    <DownloadSection/>
    <Section4/>
    <Section5/>
    <Section6/> */}
    <Footer/>

    </div>    );
  }
  
  export default TeamBuilding;