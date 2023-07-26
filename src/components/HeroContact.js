import "../styles/home/Home.css";
import { Link } from "react-router-dom";

const HeroContact = () => {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="col-md">
              <h1 className="full ">Get ready for Collision! </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p className="col-md-6-p">
                Complete the form below to request information about Collision
                Conference. Our email : support@collisioninc.site. We typically
                reply via email within 2 working days. For urgent inquiries
                contact the organizers via call / whatsApp : +1 (256) 398‑1089
              </p>
            </div>
          </div>
        </div>
        <span class="hero-bottom-text"></span>
      </section>
    </div>
  );
};
export default HeroContact;
