
import "../styles/home/Section2.css";

const Section2Media = () => {
  return (
    <section
      className="htmlblock"

      style={{backgroundColor:"blue", minHeight: "0px"}}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h2 style={{margin: "0", color: "#fff"}}>Reach The World</h2>
          </div>
          <div className="col-md-7" style={{alignItems: "center", color: "#fff"}}>
            <p>
            Journalists from international media’s household names will take part in Collision this June. Reuters, Adweek, BBC, British Vogue, NBC News, TechCrunch, The New York Times, BuzzFeed, Wall Street Journal, and National Geographic have all attended Collision.
            </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Section2Media;
