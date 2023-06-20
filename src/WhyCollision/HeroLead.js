import "../styles/home/Home.css";
// import qanda from "../../images/qnadasvg.svg";

const HeroLead = () => {
  return (
    <div>
      <section className="hero">
        {/* <img
          src="https://web-summit-library.imgix.net/collision/2222/06/CCweb_herobg_Lupita_ryan-1.png?auto=compress%2Cformat&amp;ixlib=php-3.3.0&amp;s=c90a40879e96e87b53fcdc04b2ac6b8c"
          alt="ws-hero"
          style={{position: "absolute", top: "0px", left: "0px", width: "100%", height: "100%", objectFit: "cover"}}
        /> */}
        <div className="container">
          <div className="row">
            <div className="col-md">
              <h1 className="full ">FInd The leads you need from our attendees and Partners </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p className="col-md-6-p">
              More than 40,000 people, experts in their respective industries, will join us at Collision this June. 
               
              </p>
              <br/>
              <br/>
              <p>


              Meeting that many people is a daunting prospect, but that's where our software comes in. We'll connect you with the people and companies that you want to meet to drive your business forward.                          </p>
            </div>
          
            <div className="col-md-6-center">
              <a
                className="hero-btn-red "
                href="/tickets/attendees"
                rel=""
                target=""
              >
                Book tickets
              </a>
            </div>
          </div>
        </div>
        <span class="hero-bottom-text"></span>
      </section>
    </div>
  );
};
export default HeroLead;
