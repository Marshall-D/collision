import royal from "../images/royal-bank.png";
import aws from "../images/aws.png";
import cisco from "../images/cisco-5-1.png";

import recode from "../images/Media/recode.png";
const Section3Network3 = () => {
  return (
    <section   className="textSize"  style={{ paddingTop: "2em", paddingBottom: "2em" }}>
      <div style={{ paddingLeft: "1em", paddingRight: "1em" }}>
      <div style={{ display: "inline-flex" }}>
          <div style={{ marginTop: "5em",marginRight:"1em" }}>
          <img className="image-size"               src={cisco} />
          </div>
          <span>
            <h3>
            ‘Collision breaks down barriers and gives space for innovation and communities to come together to solve the real challenges and problems of our time.’’
            </h3>
          </span>
        </div>
        <div style={{marginTop:"3em", display: "inline-flex" }}>
          <span>
            <h3>"The stunning future of tech conferences." </h3>
          </span>
          <div style={{ marginLeft: "1em" }}>
            <img style={{ width: "100px", height: "100px" }} src={royal} />
          </div>
        </div>
        <div style={{ marginTop:"2em",display: "inline-flex" }}>
          <div style={{ marginTop: "1em",marginRight:"2em" }}>
          <img className="image-size"               src={aws} />
          </div>
          <span>
            <h3>
            ‘‘Collision is already North America’s fastest-growing tech conference… By moving to an online format, Collision is ensuring that its audience can still come together.’’
            </h3>
          </span>
        </div>
        <div style={{marginBottom:"2em",marginTop:"2em", display: "inline-flex" }}>
          <span>
            <h3>"One of the best shows shows for up-and-coming startups"</h3>
            <div>
            ‘‘Events like Collision are very important to the tech community because they enable the movement of ideas.’’
            </div>
            <br />
            <br />
            <div>
              "I like to go to this show just to talk to young entrepreneurs
              from all over the world who come to pitch their startups and get
              noticed."
            </div>
          </span>
          <div style={{ marginTop: "7em" }}>
          <img className="image-size"               src={recode} />
          </div>
        </div>
       
      </div>
    </section>
  );
};
export default Section3Network3;
