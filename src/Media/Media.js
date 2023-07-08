import Trusted from "../Bookings/Trusted";
import Footer from "../Home/Footer";
import Header from "../Home/Header";
import Hero from "../Home/Hero";
import Section2 from "../Home/Section2";
import Section3 from "../Home/Section3";
import Section4 from "../Home/Section4";
import Section6 from "../Home/Section6";
import Slider2 from "../Home/Slider2";
import Speaker2 from "../Home/Speaker2";
import HeroMedia from "./HeroMedia";
import MediaSpeaker from "./MediaSpeaker";
import Section2Media from "./Section2Media";
import Section4Media from "./Section4Media";
import Slider2Media from "./Slider2Media";


function Media() {
    return (
      <div>
      <div style={{ width: "100%" }}>
      <Header/>
    </div>
    <HeroMedia/>
    <Section2Media/>
    {/* <p>Press conferences</p>
    <p>Media Partners</p>
    <p>Images</p>
    <p>VIdeos</p> */}
    <MediaSpeaker/>
    <Slider2Media/>
    <div style={{marginTop:"-2em"}}>
    <Section4Media/>
      </div>
      <div style={{marginTop:"-4.4em"}}>

    <Footer />
    </div>


    </div>    );
  }
  
  export default Media;