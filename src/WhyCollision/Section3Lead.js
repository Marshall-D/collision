import kpmg from "../images/kmpg7.png";
import benz from "../images/merc-5.png";
import hack from "../images/van-hack-5.png";
import cisco from "../images/cisco-5-1.png";

const Section3Lead = () => {
  return (
    <section style={{ paddingTop: "2em", paddingBottom: "2em" }}>
      <div style={{ paddingLeft: "1em", paddingRight: "1em" }}>
        <div style={{ display: "inline-flex" }}>
          <div style={{ marginTop: "5em" }}>
            <img style={{ width: "100px", height: "100px" }} src={kpmg} />
          </div>
          <span>
            <div>
            "In three days, we made new contacts and collected solid leads that convert into valuable business relationships."
            </div>
          </span>
        </div>
        <div style={{ display: "inline-flex" }}>
         
          <span>
            <div>
            "We met so many startups, potential applicants, and business partners within those three days. It was very successful."
            </div>
          </span>
          <div style={{ marginTop: "5em" }}>
            <img style={{ width: "100px", height: "100px" }} src={benz} />
          </div>
        </div>
        <div style={{ display: "inline-flex" }}>
          <div style={{ marginTop: "5em" }}>
            <img style={{ width: "100px", height: "100px" }} src={hack} />
          </div>
          <span>
            <div>
            "We know that between the content being delivered, Collision’s reach, and the attendance, we will get the engagement we are looking for with small business leaders."
            </div>
          </span>
        </div>
        <div style={{ display: "inline-flex" }}>
         
          <span>
            <div>
            "We're always excited to attend Collision because we know we're going to be rubbing shoulders with some of the fastest-growing tech companies in the world."
            </div>
          </span>
          <div style={{ marginTop: "5em" }}>
            <img style={{ width: "100px", height: "100px" }} src={cisco} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Section3Lead;
