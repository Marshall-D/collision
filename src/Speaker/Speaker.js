import Speaker2Att from "../Attendees/Speaker2Att";
import Header2 from "../Bookings/Header2";
import Footer from "../Home/Footer";
import Speaker2 from "../Home/Speaker2";
import HeroSpeaker from "./HeroSpeaker";

const Speaker = () => {
    return (
<div>
<Header2/>
<HeroSpeaker/>
<h2 style={{ marginLeft :"1em", color: "blue" }}>MEET OUR 2023 SPEAKERS</h2>

<Speaker2Att/>
<Footer/>

</div>

);
};

export default Speaker;
