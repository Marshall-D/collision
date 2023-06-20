import "../styles/home/Home.css";
import qanda from "../images/qnadasvg.svg";

const HeroBoss2 = () => {
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
              <h1 className="full ">Share the Experience of Collision 2023 </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p className="col-md-6-p">
              With 20-plus content tracks exploring more than 30 topics, Collision has a huge variety of content on offer for you to experience with your team. Check out our group ticket packages.
                <br />
          
              </p>
            </div>
            <div className="col-md-6-center">
             
           

        
              <a
                style={{ marginTop: "2em", height: "60px" }}
                className="hero-btn-red "
                href="/tickets/attendees"
                rel=""
                target=""
              >
View More        </a>
            </div>
          </div>
        </div>
        <span class="hero-bottom-text"></span>
      </section>
    </div>
  );
};
export default HeroBoss2;
