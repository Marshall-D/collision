import "../../styles/home/Home.css";
import qanda from "../../images/qnadasvg.svg";
import { Link } from "react-router-dom";

const Heroqanda = () => {
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
              <img
                style={{ marginTop: "-4em", width: "200px", height: "150px" }}
                src={qanda}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p className="col-md-6-p">
                The tables turn when you take control of the conversation on our
                Q&amp;A track. Where else would you get the chance to pick the
                brains of founders, politicians, astronauts, executives and
                investors?
                <br />
                <br />
                Get answers to the questions you’ve always wanted to ask on one
                of the most honest and open stages in tech.{" "}
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
            </div>
          </div>
        </div>
        <span class="hero-bottom-text"></span>
      </section>
    </div>
  );
};
export default Heroqanda;
