
import bmo from "../images/bmo.jpg";
import tracy from "../images/tracy.jpg";
import daphne from "../images/daphne.jpg";

const Section4Learning = () => {
  return (
    <section style={{ paddingTop: "2em", paddingBottom: "2em" }}>
      <div>
        <div>
          <img
            style={{ width: "100%", height: "200px" }}
            src={tracy}
            alt="carmelo-anthony_nba-all-star-entrepreneur_centre-stage-2022"
            loading="eager"
          />
        </div>
        <div style={{ display: "inline-flex" }}>
          <div
            style={{ padding: "2em", width: "50%", backgroundColor: "black" }}
          >
            <div style={{ color: "white" }}>
              <div style={{ marginBottom: "2em" }}>
                <span style={{ color: "white" }}>
                  
                  
                "We need to prepare our workforce for a new world."                  
                  </span>
              </div>
              <p style={{fontStyle:"italic", fontSize:"0.5em"}}>

              Daphne Koller, Founder &amp; CEO, Insitro    
              </p>        </div>
          </div>
          <div
            style={{ padding: "2em", width: "50%", backgroundColor: "black" }}
          >
            <div style={{ color: "white" }}>
              <div style={{ marginBottom: "2em" }}>
                <span style={{ color: "white" }}>
                "The next wave of leadership is going to look unlike any wave we’ve seen before…                   </span>
              </div>
              <p style={{fontStyle:"italic", fontSize:"0.5em"}}>

              Tracy Lawrence, Founder &amp; CEO, Chewse  
              </p>          </div>
          </div>
        </div>
        <div style={{ display: "inline-flex" }}>
          <div
            style={{ padding: "2em", width: "50%", backgroundColor: "black" }}
          >
            <div style={{ color: "white" }}>
              <div style={{ marginBottom: "2em" }}>
                <span style={{ color: "white" }}>
                "I firmly believe in the power of connectivity, and you can see it throughout time."                  </span>
              </div>
              <p style={{fontStyle:"italic", fontSize:"0.5em"}}>
              Josh Giegel, Co-founder &amp; CTO, Virgin Hyperloop One   
                </p>         </div>
          </div>
          <div>
            <img
              style={{ width: "100%", height: "150px" }}
              src={bmo}
              loading="eager"
            />
          </div>
        </div>
        <div>
          <img
            style={{ width: "100%", height: "200px" }}
            src={daphne}
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default Section4Learning;
