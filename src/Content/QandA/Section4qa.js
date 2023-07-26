import christopher from "../../images/christopher.jpg"
import yael from "../../images/yael.jpg"
import stage from "../../images/stage.jpg"

const Section4qa = () => {
  return (
    <section className="textSize" style={{ backgroundColor:"blue", paddingTop: "2em", paddingBottom: "2em" }}>
      <div>
        <div>
          <img
          className="section4-image"
          src={christopher}
            loading="eager"
          />
        </div>
        <div style={{ display: "inline-flex" }}>
          <div
            style={{ padding: "2em", width: "50%", backgroundColor: "red" }}
          >
            <div style={{ color: "white" }}>
              <div style={{ marginBottom: "2em" }}>
                <span style={{ color: "white" }}>"The worlds best speakers"</span>
              </div>
              inc..
            </div>
          </div>
          <div
            style={{ padding: "2em", width: "50%", backgroundColor: "red" }}
          >
            <div style={{ color: "white" }}>
              <div style={{ marginBottom: "2em" }}>
                <span style={{ color: "white" }}>“Collision buzzes with startup electricity.”</span>
              </div>
              HuffPost..
            </div>
          </div>
        </div>
        <div style={{ display: "inline-flex",backgroundColor:"blue" }}>
          <div
            style={{ padding: "2em", width: "50%", backgroundColor: "blue" }}
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
              style={{ width: "100%", height: "250px" }}
              src={yael}
              loading="eager"
            />
          </div>
        </div>
        <div>
          <img
          className="section4-image"
          src={stage}
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default Section4qa;
