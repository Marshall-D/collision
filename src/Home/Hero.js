import "../styles/home/Home.css";
import qanda from '../images/qnadasvg.svg'
import { Link } from "react-router-dom";

const Hero = () => {
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
   
              <h1 className="full ">
                “The Olympics of tech” <span className="full-span">– Politico</span>
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p className="col-md-6-p">
                Collision brings together the people and companies redefining
                the global tech industry.
                <br />
                <br />
                Join them in Toronto this October.
              </p>
            </div>
            <div className="col-md-6-center">
              <Link
                className="hero-btn-red "
                to="https://form.jotform.com/231143699159262"
                rel=""
                target=""
              >
                Book tickets
              </Link>
              <Link
                className="hero-btn-white "
                to="/partners"
                rel="noopener noreferrer"
                target="_blank"
              >
                Partner with us
              </Link>
            </div>
          </div>
        </div>
        <span class="hero-bottom-text"></span>
      </section>
    </div>
  );
};
export default Hero;
