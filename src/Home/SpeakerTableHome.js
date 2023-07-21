import "../styles/home/Speaker2.css";

import tara from "../images/speakers/tara.png";
import marques from "../images/speakers/marques.jpg";
import christina from "../images/speakers/christina.jpg";
import Francois from "../images/speakers/Francois.jpg";
import colin from "../images/speakers/colin.png";
import geo from "../images/speakers/geo.jpg";
import michelle from "../images/speakers/michelle.png";
import asaf from "../images/speakers/asaf.jpeg";
import dave from "../images/speakers/dave.png";
import david from "../images/speakers/david.png";
import aidan from "../images/speakers/aidan.jpg";
import max from "../images/speakers/max.jpg";
import adam from "../images/speakers/adam.jpg";
import lauren from "../images/speakers/lauren.png";
import sarah from "../images/speakers/sarah.png";
import kaplan from "../images/speakers/kaplan.jpeg";
import tavel from "../images/speakers/tavel.png";
import kelly from "../images/speakers/kelly.jpg";
import jennifer from "../images/speakers/jennifer.jpg";
import tom from "../images/speakers/tom.avif";

const SpeakerTableHome = () => {
  return (
    <div className="container">
      <h2 className="textSize"  style={{ color: "blue"}}>MEET OUR 2023 SPEAKERS </h2>
      <div className="inner-container">
      <table >
        <tr>
          <td>
            <div className="image">
              <img className="image-contain" src={adam} />
              <p className="image-text">
                Adam Selipsky
                <br />
                CEO
                <br />
                Amazon Web Services
              </p>
            </div>
          </td>

          <td>
            <div className="image">
              <img className="image-contain" src={tara} />
              <p className="image-text">
                Tara Bunch <br />
                Global Head of Operations
                <br />
                Airbnb{" "}
              </p>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div className="image">
              <img className="image-contain" src={marques} />
              <p className="image-text">
                Marques Brownlee <br />
                YouTuber and podcaster <br />
              </p>
            </div>
          </td>
          <td>
            <div className="image">
              <img className="image-contain" src={christina} />
              <p className="image-text">
                Christina Cacioppo <br />
                Co-founder &amp; CEO <br />
                Vanta{" "}
              </p>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div className="image">
              <img className="image-contain" src={Francois} />
              <p className="image-text">
                François-Philippe Champagne
                <br />
                Minister of Innovation, Science &amp; Industry
                <br />
                Government of Canada
              </p>
            </div>
          </td>
          <td>
            <div className="image">
              <img className="image-contain" src={colin} />
              <p className="image-text">
                Colin Murdoch <br />
                Chief Business Officer <br />
                Google DeepMind{" "}
              </p>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div className="image">
              <img className="image-contain" src={geo} />
              <p className="image-text">
                Geoffrey Hinton <br />
                Godfather of AI <br />
                University of Toronto{" "}
              </p>
            </div>
          </td>
          <td>
            <div className="image">
              <img className="image-contain" src={michelle} />
              <p className="image-text">
                Michelle Zatlyn
                <br />
                Co-founder, President &amp; COO <br />
                Cloudfare
              </p>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div className="image">
              <img className="image-contain" src={asaf} />
              <p className="image-text">
                Assaf Rappaport <br />
                Co-founder &amp; CEO <br />
                Wiz{" "}
              </p>
            </div>
          </td>
          <td>
            <div className="image">
              <img className="image-contain" src={dave} />
              <p className="image-text">
                Dave Rogenmoser
                <br />
                Co-founder &amp; CEO <br />
                Jasper{" "}
              </p>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div className="image">
              <img className="image-contain" src={david} />
              <p className="image-text">
                David Singleton <br />
                CTO <br />
                Stripe
              </p>
            </div>
          </td>
          <td>
            <div className="image">
              <img className="image-contain" src={aidan} />
              <p className="image-text">
                Aidan Gomez
                <br />
                Founder &amp; CEO <br />
                Cohere{" "}
              </p>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div className="image">
              <img className="image-contain" src={max} />
              <p className="image-text">
                Max Lytvyn <br />
                Co Founder <br />
                Grammarly
              </p>
            </div>
          </td>
          <td>
            <div className="image">
              <img className="image-contain" src={lauren} />
              <p className="image-text">
                Lauren Kolodny <br />
                Co-founder &amp; Managing Partner
                <br />
                Acrew Capital{" "}
              </p>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div className="image">
              <img className="image-contain" src={sarah} />
              <p className="image-text">
                Sarah Guo
                <br />
                Founder <br />
                Conviction
              </p>
            </div>
          </td>
          <td>
            <div className="image">
              <img className="image-contain" src={kaplan} />
              <p className="image-text">
                Lauren Kolodny <br />
                Co-founder &amp; Managing Partner
                <br />
                Acrew Capital{" "}
              </p>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div className="image">
              <img className="image-contain" src={tavel} />
              <p className="image-text">
                Sarah Tavel
                <br />
                General Partner <br />
                Benchmark
              </p>
            </div>
          </td>
          <td>
            <div className="image">
              <img className="image-contain" src={kelly} />
              <p className="image-text">
                Kelly Burton <br />
                CEO
                <br />
                Black Innovation Alliance{" "}
              </p>
            </div>
          </td>
        </tr>{" "}
        <tr>
          <td>
            <div className="image">
              <img 
              className="image-contain" 
              src={jennifer} />
              <p className="image-text">
                Jennifer McKelvie
                <br />
                Deputy Mayor of Toronto <br />
                City of Toronto{" "}
              </p>
            </div>
          </td>
          <td>
            <div className="image">
              <img 
              className="image-contain"
               src={tom} />
              <p className="image-text">
                Tom Verrilli
                <br />
                Chief Product Officer
                <br />
                Twitch
              </p>
            </div>
          </td>
        </tr>
      </table>
      </div>
    </div>
  );
};
export default SpeakerTableHome;
