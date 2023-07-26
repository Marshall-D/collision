import development from "../images/CC21_profesional-development.jpg";
import premium from "../images/CC21_premium-content.jpg";
import network from "../images/CC21_Networking-1.jpg";
import lead from "../images/CC21_lead-generation.jpg";

const Section3Boss = () => {
  return (
    <section   className="text-size" style={{ paddingTop: "2em", paddingBottom: "2em" }}>
      <div style={{ paddingLeft: "1em", paddingRight: "1em" }}>
        <div style={{ display: "inline-flex" }}>
          <div style={{ marginTop: "5em" }}>
            <img className="image-size"
            src={development}
            />
          </div>
          <span>
            <h3>Professinal Development</h3>
            <div>
              {" "}
              With international tech giants and business behemoths sharing
              their expertise, Collision is brimming with fresh perspectives. In
              the words of Inc. Magazine, “you’ll likely leave feeling inspired,
              educated and connected to a great community”.
            </div>
          </span>
        </div>
        <div style={{ display: "inline-flex" }}>
          <span>
            <h3>Lead Generation</h3>
            <div>
              {" "}
              In 2022, we welcomed more than 35,000 attendees to Collision. Join
              us this October to see what’s out there – and what’s looming – in
              the world of tech. As noted by HuffPost, “the event is a global
              gathering of provocative ideas, brilliance and investment
              dollars”.
            </div>
          </span>
          <div style={{ marginTop: "5em" }}>
          <img className="image-size"
             src={lead} />
          </div>
        </div>
        <div style={{ display: "inline-flex" }}>
          <div style={{ marginTop: "5em" }}>
          <img className="image-size"
            src={premium} />
          </div>
          <span>
            <h3>Premium content</h3>
            <div>
              {" "}
              Meet some of the world’s most successful companies across every
              industry and learn from their success. The Wall Street Journal
              said we cover “a wide range of topics, from technology and digital
              media to music, politics and culture”.
            </div>
          </span>
        </div>
        <div style={{ display: "inline-flex" }}>
          <span>
            <h3>Networking</h3>
            <div>
              {" "}
              Connect with the who’s who of international tech and make
              meaningful connections. Entrepreneur Magazine highlighted the
              “extensive assortment of attendees and keynoters” you can connect
              with at our events.
            </div>
          </span>
          <div style={{ marginTop: "5em" }}>
          <img className="image-size"
            src={network} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Section3Boss;
