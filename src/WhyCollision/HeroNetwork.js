import { Link } from "react-router-dom";
import "../styles/home/Home.css";
// import qanda from "../../images/qnadasvg.svg";

const HeroNetwork = () => {
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
              <h1 className="full ">BUILD YOUR NETWORK AT COLLISION</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p className="col-md-6-p">
              In the words of Inc. Magazine, “Collision does a superb job of building community through networking. You'll likely leave feeling inspired, educated and connected to a great community”.
               
              </p>
              <br/>
              <br/>
              <p>



              Collision is all about meaningful connections. Join us in Toronto this October.              </p>
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
            </div>
          </div>
        </div>
        <span class="hero-bottom-text"></span>
      </section>
    </div>
  );
};
export default HeroNetwork;
