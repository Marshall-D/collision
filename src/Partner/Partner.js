// import Hero from '../Home/Hero';
// import Section2 from './Section2';
// import Slider from './Slider';
// import Speaker2 from './Speaker2';
// import DownloadSection from '../Home/DownloadSection';
// import Slider2 from './Slider2';
// import Section3 from './Section3';
// import Section4 from './Section4';
// import Section5 from './Section5';
// import Section6 from './Section6';
// import Footer from './Footer';

import Footer from "../Home/Footer";
import Header from "../Home/Header";
import Hero from "../Home/Hero";
import Section3 from "../Home/Section3";
import Section4 from "../Home/Section4";
import Section6 from "../Home/Section6";
import SliderPartner from "./SliderPartner";
import Slider2 from "../Home/Slider2";
import HeroPartner from "./HeroPartner";
import Section2Partner from "./Section2Partner";
import Section3Partner from "./Section3Partner";
import Section4Partner from "./Section4Partner";

function Partner() {
  return (
    //for now we are
    <div>
      <div style={{ width: "100%" }}>
        <Header />
      </div>
      <HeroPartner />
      <SliderPartner/>
      <Section2Partner/>
      <Section3Partner/>
      <SliderPartner/>

      <Section4Partner />
      <Section6 />
      <Footer />
    </div>
  );
}

export default Partner;
