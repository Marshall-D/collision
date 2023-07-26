import { Link } from "react-router-dom";
import "../styles/home/Home.css";
// import qanda from "../../images/qnadasvg.svg";

const HeroLead = () => {
  return (
    <div>
      <section className="hero">
      
        <div className="container">
          <div className="row">
            <div className="col-md">
              <h1 className="full ">FInd The leads you need from our attendees and Partners </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p className="col-md-6-p">
              More than 40,000 people, experts in their respective industries, will join us at Collision this October. 
               
              </p>
              <br/>
              <br/>
              <p>


              Meeting that many people is a daunting prospect, but that's where our software comes in. We'll connect you with the people and companies that you want to meet to drive your business forward.                          </p>
            </div>
          
            <div className="col-md-6-center">
              <Link
                className="hero-btn-redd "
                to="https://form.jotform.com/231143699159262"
                rel=""
                target=""
              >
                Book tickets
              </Link>
            </div>
          </div>
        </div>
        <span class="hero-bottom-text"></span>
      </section>
    </div>
  );
};
export default HeroLead;
