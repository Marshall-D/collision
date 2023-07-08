import HeroSight from "../DiscoverTorontoi/HeroSight";
import Section2Sight from "../DiscoverTorontoi/Section2Sight";
import DownloadSection from "../Home/DownloadSection";
import Footer from "../Home/Footer";
import Header from "../Home/Header";
import Slider from "../Home/Slider";
import ContactForm from "./ContactForm";
import HeroContact from "./HeroContact";



function Contact() {
    return (
      <div>
      <div style={{ width: "100%" }}>
      <Header/>
    </div>
    <HeroContact/>
    <ContactForm/>

   
    <Footer />

    </div>    );
  }
  
  export default Contact;
