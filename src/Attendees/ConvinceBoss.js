import Footer from "../Home/Footer";
import Header from "../Home/Header";
import Slider2Media from "../Media/Slider2Media";
import HeroBoss from "./HeroBoss";
import HeroBoss2 from "./HeroBoss2";
import Section3Boss from "./Section3Boss";
import Section6Boss from "./Section6Boss";
import SliderBoss from "./SliderBoss";
import Speaker2Att from "./Speaker2Att";

function ConvinceBoss() {
  return (
    <div>
      <div style={{ width: "100%" }}>
        <Header />
      </div>
      <HeroBoss />
      <SliderBoss />
      <Section3Boss />
      <Slider2Media />
    

      <Speaker2Att />
      <HeroBoss2 />
      <Section6Boss />

      <Footer />
    </div>
  );
}

export default ConvinceBoss;
