

import DownloadSection from "../Home/DownloadSection";
import Footer from "../Home/Footer";
import Header from "../Home/Header";

import Section4 from "../Home/Section4";

import HeroTeam from "./HeroTeam";
import Section2Team from "./Section2Team";
import Section2Team2 from "./Section2Team2";
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

    <DownloadSection/> 
    <Section4/>

    <Footer/>

    </div>    );
  }
  
  export default TeamBuilding;