// import Hero from '../Home/Hero';
// import Section2 from '../Section2';
// import Slider from './Slider';
// import Speaker2 from './Speaker2';
// import DownloadSection from '../Home/DownloadSection';
// import Slider2 from './Slider2';
import Section3 from '../Home/Section3';
// import Section4 from './Section4';
// import Section5 from './Section5';
// import Section6 from './Section6';
// import Footer from './Footer';
// import Header from './Header';

import DownloadSection from "../Home/DownloadSection";
import Footer from "../Home/Footer";
import Header from "../Home/Header";
import Hero from "../Home/Hero";
import Section6 from "../Home/Section6";
import Slider from "../Home/Slider";
import Slider2 from "../Home/Slider2";
import Speaker2 from "../Home/Speaker2";
import Section2 from "../Home/Section2";
import HeroWomen from './HeroWomen';
import Section2Women from './Section2Women';
import Section3Women from './Section3Women';

function WomenTech() {
    return (
      <div>
      <div style={{ width: "100%" }}>
      <Header />
    </div>
    <HeroWomen/>
    <Section2Women/>
    <Section3Women/>
    <Speaker2/>


    {/* <Slider/>
    <Slider2/>
    <DownloadSection/> */}


    {/*
    <Slider2/>
 */}


    {/* 
    <DownloadSection/>
    <Section4/>
    <Section5/>
    */}
    <Footer/>

    </div>    );
  }
  
  export default WomenTech;