

import Footer from "../Home/Footer";
import Header from "../Home/Header";

import HeroWomen from './HeroWomen';
import Section2Women from './Section2Women';
import Section3Women from './Section3Women';
import SpeakerWomen from './SpeakerWomen';

function WomenTech() {
    return (
      <div>
      <div style={{ width: "100%" }}>
      <Header />
    </div>
    <HeroWomen/>
    <Section2Women/>
    <Section3Women/>
    <SpeakerWomen/>


  
    <Footer/>

    </div>    );
  }
  
  export default WomenTech;