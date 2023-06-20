import royal from "../images/royal-bank.png";
import aws from "../images/aws.png";
import cisco from "../images/cisco-5-1.png";
const Section3Network3 = () => {
  return (
    <section style={{ paddingTop: "2em", paddingBottom: "2em" }}>
      <div style={{ paddingLeft: "1em", paddingRight: "1em" }}>
        <div style={{ display: "inline-flex" }}>
          <div style={{ marginTop: "5em" }}>
            <img style={{ width: "100px", height: "100px" }} src={cisco} />
          </div>
          <span>
            <div>
            ‘‘Collision breaks down barriers and gives space for innovation and communities to come together to solve the real challenges and problems of our time.’’               </div>
          </span>
        </div>
        <div style={{ display: "inline-flex" }}>
         
          <span>
            <div>
            ‘‘Collision is already North America’s fastest-growing tech conference… By moving to an online format, Collision is ensuring that its audience can still come together.’’                 </div>
          </span>
          <div style={{ marginTop: "5em" }}>
            <img style={{ width: "100px", height: "100px" }} src={royal} />
          </div>
        </div>
        <div style={{ display: "inline-flex" }}>
          <div style={{ marginTop: "5em" }}>
            <img style={{ width: "100px", height: "100px" }} src={aws} />
          </div>
          <span>
            <div>
            ‘‘Events like Collision are very important to the tech community because they enable the movement of ideas.’’            
                       </div>
          </span>
        </div>
       
      </div>
    </section>
  );
};
export default Section3Network3;
