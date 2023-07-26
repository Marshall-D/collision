
import carmelo from "../images/carmelo.jpg";
import amy from "../images/amy.jpg";
import afterhours from "../images/afterhours.jpeg";
const Section4Media = () => {
    return (
      <section  className="textSize"style={{backgroundColor:"black", paddingTop: "2em", paddingBottom: "2em" }}>
        <div>
          <div>
            <img
          className="section4-image"
          src={carmelo}
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
                style={{ width: "100%", height: "250px" }}
                src={afterhours}
                loading="eager"
              />
            </div>
          </div>
          <div>
            <img
          className="section4-image"
          src={amy}
              loading="eager"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default Section4Media;
  