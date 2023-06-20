
import "../styles/home/Section2.css";

const Section2Team = () => {
  return (
    <section
      className="htmlblock"

      style={{minHeight: "0px", backgroundColor:"blue"}}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h2 style={{margin: "0", color: "#fff"}}>BRINGING TEAMS BACK TOGETHER</h2>
          </div>
          <div className="col-md-7" style={{alignItems: "center", color: "#fff"}}>
            <p>
            Teams from all over the world will come together next June at Collision. They’ll experience inspiring content covering every industry, and network with experts in their field and beyond. 
            </p>
            <p>
            <a href="/partners" rel="noopener" target="_blank">Join us with your company in Toronto</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2Team;
