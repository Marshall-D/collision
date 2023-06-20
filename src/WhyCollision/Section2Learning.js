import "../styles/home/Section2.css";

const Section2Learning = () => {
  return (
    <section
      className="htmlblock"
      style={{ backgroundColor: "blue", minHeight: "0px" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h2 style={{ margin: "0", color: "white" }}>
WHATS HAPPENING?            </h2>
          </div>
          <div className="col-md-7" style={{alignItems: "center", color: "#fff"}}>
            <p>
            Collision attendees will have access to premium content from “the world’s best speakers”, including international policymakers, CEOs and founders of tech’s leading businesses, and global cultural figures.
            </p>
            <p>
            As well as talks designed to inspire and educate, attendees can take part in expert-led masterclasses and roundtables covering today’s pressing topics and touching on tech from the perspective of multiple industries.
            </p>
       
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2Learning;
