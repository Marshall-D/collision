import wsj from "../images/Media/the-wall-street-journal.png";
import dt from "../images/Media/digital-trends-logo.jpeg";
import inc from "../images/Media/Inc-logo.png";
import recode from "../images/Media/recode.png";
import ent from "../images/Media/entrepreneur-logo-2.png";
import huff from "../images/Media/Huffington-post-logo.png";
import forbes from "../images/Media/forbes-new.png";
import usa from "../images/Media/usatoday.png";
import ars from "../images/Media/ars-technica-logo.png";
import cna from "../images/Media/cna-logo.png";
import politico from "../images/Media/Politico-1.png";
import nbc from "../images/Media/NBC-news-logo.png";
import bnn from "../images/Media/bnn-bloomberg.png";
import reuters from "../images/Media/reuters-1.png";
import globe from "../images/Media/the-globe-and-mail_katka.png";
import financial from "../images/Media/Screenshot-2020-04-28-at-10.44.41.png"
import cbc from "../images/Media/cbc-toronto.png";
import bloomberg from "../images/Media/bloomberg.png";

const Section3WhatMedia = () => {
  return (
    <section style={{ paddingTop: "2em", paddingBottom: "2em" }}>
      <div style={{ paddingLeft: "1em", paddingRight: "1em" }}>
        <h2 style={{ color: "black" }}> THEY'VE EXPERIENCED OUR EVENTS</h2>

        <div style={{ display: "inline-flex" }}>
          <div style={{ marginTop: "5em",marginRight:"1em" }}>
            <img style={{ width: "100px", height: "100px" }} src={wsj} />
          </div>
          <span>
            <h3>
              “Collision is a frenetic stream of 20-minute sessions on a wide
              range of topics, from technology and digital media to music,
              politics and culture.”
            </h3>
          </span>
        </div>
        <div style={{marginTop:"3em", display: "inline-flex" }}>
          <span>
            <h3>"The stunning future of tech conferences." </h3>
          </span>
          <div style={{ marginLeft: "1em" }}>
            <img style={{ width: "100px", height: "100px" }} src={dt} />
          </div>
        </div>
        <div style={{ marginTop:"2em",display: "inline-flex" }}>
          <div style={{ marginTop: "1em",marginRight:"2em" }}>
            <img style={{ width: "100px", height: "100px" }} src={inc} />
          </div>
          <span>
            <h3>
              "Collision continues to be the most frequent answer when I ask
              others about the conference they most want to attend this year."
            </h3>
          </span>
        </div>
        <div style={{marginBottom:"2em",marginTop:"2em", display: "inline-flex" }}>
          <span>
            <h3>"One of the best shows shows for up-and-coming startups"</h3>
            <div>
              "Collision has become one of the best shows for up-and-coming
              startups, with a conference program that caters to them and a
              broader industry audience wanting to keep up with what’s new in
              tech.
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
            <img style={{ width: "100px", height: "100px" }} src={recode} />
          </div>
        </div>
        <div style={{marginBottom: "2em", display: "inline-flex" }}>
          <div style={{ marginTop: "8em",marginRight:"1em" }}>
            <img style={{ width: "100px", height: "100px" }} src={ent} />
          </div>
          <span>
            <h3>"What’s especially cool about Collision?"</h3>
            <div>
              "Attendees have the opportunity to participate in a variety of
              tracks, which cover everything from marketing and social media to
              fintech and the internet of things.
            </div>
            <br />
            <br />
            <div>
              "What’s especially cool about Collision? Because it welcomes such
              an extensive assortment of attendees and keynoters, every visitor
              is guaranteed to learn something both new and exciting –
              regardless of what industry they’re a part of."
            </div>
          </span>
        </div>
        <div style={{ marginBottom: "2em",display: "inline-flex" }}>
          <span>
            <h3>"A global gathering"</h3>

            <div>
              “From saving our planet…to fraud prevention…to helping people live
              longer – speakers and start-ups alike also shared technologies and
              human systems for improving the quality of our lives.
            </div>
            <br />
            <br />
            <div>
              "The event is a global gathering of provocative ideas, brilliance,
              and investment dollars.”
            </div>
          </span>
          <div style={{ marginTop: "5em" }}>
            <img style={{ width: "100px", height: "100px" }} src={huff} />
          </div>
        </div>

        {/* // where you are */}
        <div style={{marginBottom:"2em", display: "inline-flex" }}>
          <div style={{marginRight:"1em", marginTop: "5em" }}>
            <img style={{ width: "100px", height: "100px" }} src={inc} />
          </div>
          <span>
            <h3>"The world's best speakers"</h3>
            <div>
              "Collision has established itself as one of the premier global
              business and entrepreneurship conferences.
            </div>
            <br />
            <br />

            <div>
              "While other conferences try to catch up, Collision presents the
              world's best speakers and curates content tracks that are as
              cutting-edge as they are thought-provoking. Also, and equally as
              important, Collision does a superb job of building community
              through networking and social events. You'll likely leave feeling
              inspired, educated and connected to a great community."
            </div>
          </span>
        </div>
        <div style={{ marginBottom:"2em", display: "inline-flex" }}>
          <span>
            <h3>"Startups are Collision’s raison d’être"</h3>
            <div>
              "Startups are Collision’s raison d’être. Hundreds of earnest
              entrepreneurs bravely put their best feet forward in front of a
              hungry crowd of investors, press, and various other hoi palloi,
              hoping to get funding, attention, and even some frank advice."
            </div>
          </span>
          <div style={{ marginTop: "5em" }}>
            <img style={{ width: "100px", height: "100px" }} src={forbes} />
          </div>
        </div>
        <div style={{ marginBottom:"2em", display: "inline-flex" }}>
          <div style={{marginRight:"1em",  marginTop: "5em" }}>
            <img style={{ width: "100px", height: "100px" }} src={dt} />
          </div>
          <span>
            <h3>"Collision put women front and center"</h3>
            <div>
              “It started with the show itself, which was 45.7 percent female,
              making it the most diverse in the show’s short history and
              representing a huge shift from the rest of the tech world.
            </div>
            <br />
            <br />
            <div>
              "Collision put women front and center through a dedicated women in
              tech section spotlighting female leaders, as well as a collection
              of high-profile female speakers.”
            </div>
          </span>
        </div>
        <div style={{ marginBottom:"2em", display: "inline-flex" }}>
          <span>
            <h3>"A refreshing, outside-the-box treat"</h3>

            <div>
              "At Collision, it's a tale of two conferences: an open forum for
              developers, investors and reporters to mingle in an open-air
              setting during the day, and after-hours VIP events for a select
              few.
            </div>
            <br />
            <br />
            <div>
              "Collision's contrarian culture is a refreshing, outside-the-box
              treat for jaded showgoers."
            </div>
          </span>
          <div style={{ marginTop: "5em" }}>
            <img style={{ width: "100px", height: "100px" }} src={usa} />
          </div>
        </div>
        <div style={{marginBottom:"2em", display: "inline-flex" }}>
          <div style={{ marginTop: "5em" }}>
            <img style={{marginRight:"1em", width: "100px", height: "100px" }} src={ars} />
          </div>
          <span>
            <h3>"Interact with chief executives"</h3>

            <div>
              "Attendees could hear and interact with chief executives from the
              likes of Coca-Cola, Amazon, Cisco, Facebook, Wells Fargo and
              Bitmoji.
            </div>
            <br />
            <br />
            <div>
              "Shark Tank's Chris Sacca sat on the same stage as future NFL Hall
              of Famer Terrell Owens, WWE legend Ken Shamrock, olympic swimmers,
              and presidents of organizations from GLAAD to Twitch."
            </div>
          </span>
        </div>
        <div style={{marginBottom:"2em", display: "inline-flex" }}>
          <span>
            <h3>"Redefines the way"</h3>{" "}
            <div>
              ''Collision from Home redefines the way in which people and
              companies from the global technology industry gather.''
            </div>
          </span>
          <div style={{ marginTop: "4em" }}>
            <img style={{ width: "100px", height: "100px" }} src={cna} />
          </div>
        </div>
        <div style={{ display: "inline-flex" }}>
          <div style={{marginRight:"1em", marginTop: "5em" }}>
            <img style={{ width: "100px", height: "100px" }} src={politico} />
          </div>
          <span>
          <h3 style={{ marginTop: "5em" }} >"Tech Olympics."</h3>
                    
          </span>
        </div>
        <div style={{ display: "inline-flex" }}>
          <span>
          <h3   style={{ marginRight: "1em",marginTop:"4em" }} >"Collision, one of the biggest conferences in tech."</h3>
                      
          </span>
          <div style={{ marginTop: "5em" }}>
            <img style={{ width: "100px", height: "100px" }} src={nbc} />
          </div>
        </div>
        <div style={{marginTop: "5em" , display: "inline-flex" }}>
          <div style={{ marginTop: "1em" }}>
            <img style={{ width: "100px", height: "100px" }} src={bnn} />
          </div>
          <span>
          <h3 style={{marginLeft:"1em"}}>“Leading tech conference is going digital-only.”</h3>
                    
          </span>
        </div>
        <div style={{ marginTop: "5em" ,display: "inline-flex" }}>
          <span>
          <h3>"Collision, a major technology conference."</h3>      
              
          </span>
          <div style={{ marginTop: "1em" }}>
            <img style={{ width: "100px", height: "100px" }} src={reuters} />
          </div>
        </div>
        <div style={{ display: "inline-flex" }}>
          <div style={{ marginTop: "5em" }}>
            <img style={{ marginRight: "2em" ,width: "100px", height: "100px" }} src={globe} />
          </div>
          <span>
            <h3>"Collision’s app includes chat capabilities that conference delegates can use for networking."</h3>
            
          </span>
        </div>
        <div style={{ marginTop: "5em" , display: "inline-flex" }}>
          <span>
          <h3>"Fastest-growing tech conference in North America."</h3>  
          </span>
          <div style={{ marginTop: "2em" }}>
            <img style={{ width: "100px", height: "100px" }} src={financial} />
          </div>
        </div>
        <div style={{marginTop: "4em" , display: "inline-flex" }}>
          <div style={{marginRight: "2em" , marginTop: "5em" }}>
            <img style={{ width: "100px", height: "100px" }} src={cbc} />
          </div>
          <span>
          <h3>"Collision draws about 30,000 attendees from all over the globe."</h3>    
          </span>
        </div>
        <div style={{ marginTop: "3em" , display: "inline-flex" }}>
          <span>
          <h3>“Collision is one of the world's biggest tech conferences”</h3>         
          </span>
          <div style={{ marginTop: "3em" }}>
            <img style={{ width: "100px", height: "100px" }} src={bloomberg} />
          </div>
        </div>
              </div>
    </section>
  );
};
export default Section3WhatMedia;
