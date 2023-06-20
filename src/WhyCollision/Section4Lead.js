
import bmo from "../images/bmo.jpg";
import leap from "../images/leap.jpg";
import brad from "../images/brad.jpg";
const Section4Lead = () => {
    return (
      <section style={{ paddingTop: "2em", paddingBottom: "2em" }}>
        <div>
          <div>
            <img
              style={{ width: "100%", height: "200px" }}
              src={bmo}
              loading="eager"
            />
          </div>
          <div style={{ display: "inline-flex" }}>
            <div
              style={{ padding: "2em", width: "50%", backgroundColor: "black" }}
            >
              <div style={{ color: "white" }}>
                <div style={{ marginBottom: "2em" }}>
                  <span style={{ color: "white" }}>"The worlds best speakers"</span>
                </div>
                inc..
              </div>
            </div>
            <div
              style={{ padding: "2em", width: "50%", backgroundColor: "black" }}
            >
              <div style={{ color: "white" }}>
                <div style={{ marginBottom: "2em" }}>
                  <span style={{ color: "white" }}>“Collision buzzes with startup electricity.”</span>
                </div>
                HuffPost..
              </div>
            </div>
          </div>
          <div style={{ display: "inline-flex" }}>
            <div
              style={{ padding: "2em", width: "50%", backgroundColor: "black" }}
            >
              <div style={{ color: "white" }}>
                <div style={{ marginBottom: "2em" }}>
                  <span style={{ color: "white" }}>“One of the world's biggest tech conferences.”</span>
                </div>
                Bloomberg
              </div>
            </div>
            <div>
              <img
                style={{ width: "100%", height: "150px" }}
                src={leap}
                loading="eager"
              />
            </div>
          </div>
          <div>
            <img
              style={{ width: "100%", height: "200px" }}
              src={brad}
              loading="eager"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default Section4Lead;
  