import "../styles/home/Home.css";
import { Link } from "react-router-dom";

const HeroBoss2 = () => {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="col-md">
              <h1 className="full ">Share the Experience of Collision 2023 </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p className="col-md-6-p">
                With 20-plus content tracks exploring more than 30 topics,
                Collision has a huge variety of content on offer for you to
                experience with your team. Check out our group ticket packages.
                <br />
              </p>
            </div>
            <div className="col-md-6-center">
              <Link
                style={{ marginTop: "2em", height: "60px" }}
                className="hero-btn-red "
                href="/tickets/attendees"
                to="https://form.jotform.com/231143699159262"
                rel=""
                target=""
              >
                View More{" "}
              </Link>
            </div>
          </div>
        </div>
        <span class="hero-bottom-text"></span>
      </section>
    </div>
  );
};
export default HeroBoss2;
