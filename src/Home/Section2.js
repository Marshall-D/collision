
import "../styles/home/Section2.css";

const Section2 = () => {
  return (
    <section
      className="htmlblock"

      style={{minHeight: "0px"}}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h2 cl style={{margin: "0", color: "#fff"}}>WHAT OTHERS SAY</h2>
          </div>
          <div className="col-md-7" style={{alignItems: "center", color: "#fff"}}>
            <p>
              “Collision is one of the world’s biggest tech conferences.” –
              Bloomberg
            </p>
            <p>
              “Collision continues to be the most frequent answer when I ask
              others about the conference they most want to attend this year.” –
              Inc
            </p>
            <p>“The stunning future of tech conferences.” – Digital Trends</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
