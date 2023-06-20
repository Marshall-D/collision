
import "../styles/home/Section2.css";

const Section2Women = () => {
  return (
    <section
      className="htmlblock"

      style={{minHeight: "0px", backgroundColor:"white"}}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h2 style={{margin: "0", color: "black"}}>OUR COMMITMENT TO CHANGE</h2>
          </div>
          <div className="col-md-7" style={{alignItems: "center", color: "black"}}>
            <p>
            We’re committed to changing the gender ratio at our events, and to empowering women across the world by fostering networking opportunities, building mentorship programs and nurturing our online women in tech community. In 2022, 44.3 percent of attendees at Collision were women.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2Women;
