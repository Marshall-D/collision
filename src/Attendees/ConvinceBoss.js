import Footer from "../Home/Footer";
import Header from "../Home/Header";
import Hero from "../Home/Hero";
import Section3 from "../Home/Section3";
import Section6 from "../Home/Section6";
import Slider2 from "../Home/Slider2";
import Speaker2 from "../Home/Speaker2";
import Slider2Media from "../Media/Slider2Media";
import HeroBoss from "./HeroBoss";
import HeroBoss2 from "./HeroBoss2";
import Section3Boss from "./Section3Boss";
import Section6Boss from "./Section6Boss";
import Slider2Boss from "./Slider2Boss";
import SliderBoss from "./SliderBoss";
import Speaker2Att from "./Speaker2Att";


function ConvinceBoss() {
    return (
      <div>
      <div style={{ width: "100%" }}>
      <Header/>
    </div>
    <HeroBoss/>
    <SliderBoss/>
    <Section3Boss/>
    <Slider2Media/>
    <h2 style={{ marginLeft :"1em", color: "blue" }}>Meet our 2023 speakers</h2>

    <Speaker2Att/>
    <HeroBoss2/>
    <Section6Boss/> 



    <Footer />

    </div>    );
  }
  
  export default ConvinceBoss;