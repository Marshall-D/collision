// import network from "../images/home/Landing_Amplify.jpg";
import "../styles/qanda.css";
const Section3Lead2 = () => {
  return (
    <section  className="textSize" style={{ paddingTop: "2em", paddingBottom: "2em" }}>
      <div style={{ paddingLeft: "1em", paddingRight: "1em" }}>
        <div style={{ display: "inline-flex" }}>
          <div style={{ marginTop: "6em" }}>
            <span className="blockline"></span>
          </div>
          <span>
            <h3>Stefan Kelp</h3>
            <div>
              <p style={{ fontStyle: "italic" }}>Co founder, Shelf Engine</p>
            </div>
            <br />
            <br />
            <p>
              “The app is pretty phenomenal so you get to connect with all these
              people directly.”
            </p>
          </span>
        </div>
        <div style={{ display: "inline-flex" }}>
          <span>
            <h3>Victor Skyrlef </h3>
            <div>
              <p style={{ fontStyle: "italic" }}>
                VP Product, PureFacts Financial Solutions
              </p>
              <br />
              <br />
              <p>
                “It pushes your thinking beyond incremental improvements. Seeing
                and talking to people who are trying to define or redefine a
                category is really something unique.”
              </p>
            </div>
          </span>
          <div style={{ marginTop: "6em" }}>
            <span className="blocklineblue"></span>
          </div>
        </div>
        <div style={{ display: "inline-flex" }}>
          <div style={{ marginTop: "6em" }}>
            <span className="blocklineyellow"></span>
          </div>
          <span>
            <h3>Louis adeleine Naang</h3>
            <div>
              {" "}
              <p style={{ fontStyle: "italic" }}>
                Product Manager, Stratpoint Technologies
              </p>{" "}
            </div>
            <br />

            <p>
              “It is more holistic and gives a chance for all kinds of
              professionals from the tech industry to relate, network, and
              learn.”
            </p>
          </span>
        </div>
        <div style={{ display: "inline-flex" }}>
          <span>
            <h3>Nishanth Samala</h3>
            <div>
              {" "}
              <p style={{ fontStyle: "italic" }}>
                Founder, Intentful Motion
              </p>{" "}
            </div>
            <br />
            <br />

            <p>
              “It's much more diverse (thankfully!) than other conferences and
              quite easy to make and follow up with connections in my small,
              relatively niche industry.”
            </p>
          </span>
          <div style={{ marginTop: "6em" }}>
            <span className="blocklinegreen"></span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Section3Lead2;
