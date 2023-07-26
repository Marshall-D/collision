

import Speaker2Att from "../Attendees/Speaker2Att";
import DownloadSection from "../Home/DownloadSection";
import Footer from "../Home/Footer";
import Header from "../Home/Header";

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