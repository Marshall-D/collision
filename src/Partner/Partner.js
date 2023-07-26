
import "../styles/home/Home.css";

import Footer from "../Home/Footer";
import Header from "../Home/Header";
import Section6 from "../Home/Section6";
import SliderPartner from "./SliderPartner";
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
