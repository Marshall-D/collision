import kpmg from "../images/kmpg7.png";
import benz from "../images/merc-5.png";
import hack from "../images/van-hack-5.png";
import cisco from "../images/cisco-5-1.png";

const Section3Lead = () => {
  return (
    <section className="textSize"style={{ paddingTop: "2em", paddingBottom: "2em" }}>
      <div style={{ paddingLeft: "1em", paddingRight: "1em" }}>
      <div style={{ display: "inline-flex" }}>
          <div style={{ marginTop: "5em",marginRight:"1em" }}>
          <img className="image-size"            src={kpmg} />
          </div>
          <span>
            <h3>
            "In three days, we made new contacts and collected solid leads that convert into valuable business relationships."            </h3>
          </span>
        </div>
        <div style={{marginTop:"3em", display: "inline-flex" }}>
          <span>
            <h3>"We met so many startups, potential applicants, and business partners within those three days. It was very successful." </h3>
          </span>
          <div style={{ marginLeft: "1em" }}>
          <img className="image-size"            src={benz} />
          </div>
        </div>
        <div style={{ marginTop:"2em",display: "inline-flex" }}>
          <div style={{ marginTop: "1em",marginRight:"2em" }}>
          <img className="image-size"             src={hack} />
          </div>
          <span>
            <h3>
            "We know that between the content being delivered, Collision’s reach, and the attendance, we will get the engagement we are looking for with small business leaders."            </h3>
          </span>
        </div>
        <div style={{marginBottom:"2em",marginTop:"2em", display: "inline-flex" }}>
          <span>
            <h3>"One of the best shows shows for up-and-coming startups"</h3>
            <div>
            ‘‘The significant investor face time made this one of the most strategic experiences for our company.’’
            </div>
            <br />
            <br />
            <div>
            "We're always excited to attend Collision because we know we're going to be rubbing shoulders with some of the fastest-growing tech companies in the world."
            </div>
          </span>
          <div style={{ marginTop: "7em" }}>
          <img className="image-size"             src={cisco} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Section3Lead;
