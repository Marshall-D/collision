import "../styles/home/Home.css";
// import qanda from "../../images/qnadasvg.svg";

const HeroMasterclass = () => {
  return (
    <div>
      <section className="hero">
        {/* <img
          src="https://web-summit-library.imgix.net/collision/2222/06/CCweb_herobg_Lupita_ryan-1.png?auto=compress%2Cformat&amp;ixlib=php-3.3.0&amp;s=c90a40879e96e87b53fcdc04b2ac6b8c"
          alt="ws-hero"
          style={{position: "absolute", top: "0px", left: "0px", width: "100%", height: "100%", objectFit: "cover"}}
        /> */}
        <div className="container">
          <div className="row">
          <div className="col-md">
              <h1 className="full ">MasterClass at Collision </h1>
            </div>
            
          </div>
          <div className="row">
            <div className="col-md-6">
              <p className="col-md-6-p">
              At Collision, our masterclasses offer a variety of in-depth learning opportunities led by industry experts, and are a great way for our attendees to network and gain new insights.

                <br />
                <br />
             
              </p>
            </div>
            <div className="col-md-6">

              <p 
              className="col-md-6-p"
               style={{fontSize :"0.7em"}}>
              Please note: You must have a ticket to Collision to be able to participate in or attend masterclasses. Places are limited and are allocated onsite on a first come first served basis. Make sure to arrive early to secure your spot.

              </p>
              <br/>
              <br/>
              <p 
              className="col-md-6-p"
              style={{fontSize :"0.7em"}}>
                
To ensure you make the most of your time at Collision, we encourage you to plan ahead. Be sure to add any masterclasses you’re interested in taking part in to your personal schedule on&nbsp;the 

<a href="https://collisionconf.com/app">event app</a>
&nbsp;so you don’t miss out on the sessions that interest you most.
              </p>
            </div>
            <div className="col-md-6-center">
              <a
                className="hero-btn-red "
                href="/tickets/attendees"
                rel=""
                target=""
              >
                Book tickets
              </a>
            </div>
          </div>
        </div>
        <span class="hero-bottom-text"></span>
      </section>
    </div>
  );
};
export default HeroMasterclass;
