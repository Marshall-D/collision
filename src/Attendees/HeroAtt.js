import "../styles/home/Home.css";
import { Link } from "react-router-dom";

const HeroAtt = () => {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="col-md">
              <h1 className="full ">Meet our 2023 attendees</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p className="col-md-6-p">
                Who is attending from your country? Below, you’ll find a list of
                the top speakers and attendees who will join us from around the
                world at Collision 2023.
                <br />
                <br />
                Join them in Toronto this October.
              </p>
            </div>
            <div className="col-md-6-center">
              <Link
                className="hero-btn-redd "
                to="https://form.jotform.com/231143699159262"
                href="/tickets/attendees"
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
export default HeroAtt;
