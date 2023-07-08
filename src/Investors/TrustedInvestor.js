import accel from "../images/investors/Accel.png";
import anderson from "../images/investors/Andreessen_Horowitz.png";
import balderton from "../images/investors/balderton-capital.png";
import google from "../images/investors/google-ventures.png";
import breyer from "../images/investors/breyer-capital.png";
import grey from "../images/investors/greycroft.png";
import index from "../images/investors/index.png";
import initialised from "../images/investors/Initialized.png";
import insight from "../images/investors/Insight.png";
import ivp from "../images/investors/IVP.png";
import khosla from "../images/investors/khosla-ventures.png";
import lightspeed from "../images/investors/lightspeed.png";
import northzone from "../images/investors/Northzone.png";
import renegade from "../images/investors/renegade-partners.png";
import saphire from "../images/investors/Sapphire-Ventures.png";
import seed from "../images/investors/seedcamp.png";
import fund from "../images/investors/sequoia-fund-logo.png";
import bank from "../images/investors/SoftBank.png";
import "../styles/Investor.css"
function TrustedInvestor() {
  return (
    <div className="container">
      <div className="inner-containers">
        <table>
          <tr>
            <td>
              <div className="images">
                <img className="image-containers" src={accel} />
                
              </div>
            </td>

            <td>
            <div className="images">
                <img className="image-containers" src={anderson} />
                
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="images">
                <img className="image-containers" src={bank} />
                
              </div>
            </td>
            <td>
            <div className="images">
                <img className="image-containers" src={fund} />
               
              </div>
            </td>
          </tr>
          <tr>
            <td>
            <div className="images">
                <img className="image-containers" src={seed} />
                
              </div>
            </td>
            <td>
            <div className="images">
                <img className="image-containers" src={saphire} />
                
              </div>
            </td>
          </tr>
    
          <tr>
            <td>
            <div className="images">
                <img className="image-containers" src={northzone} />
                
              </div>
            </td>
            <td>
            <div className="images">
                <img className="image-containers" src={renegade} />
               
              </div>
            </td>
          </tr>
          <tr>
            <td>
            <div className="images">
                <img className="image-containers" src={lightspeed} />
               
              </div>
            </td>
            <td>
            <div className="images">
                <img className="image-containers" src={ivp} />
                
              </div>
            </td>
          </tr>
          <tr>
            <td>
            <div className="images">
                <img className="image-containers" src={insight} />
                
              </div>
            </td>
            <td>
            <div className="images">
                <img className="image-containers" src={khosla} />
                
              </div>
            </td>
          </tr>
          <tr>
            <td>
            <div className="images">
                <img className="image-containers" src={initialised} />
               
              </div>
            </td>
            <td>
            <div className="images">
                <img className="image-containers" src={index} />
                
              </div>
            </td>
          </tr>
          <tr>
            <td>
            <div className="images">
                <img className="image-containers" src={grey} />
                
              </div>
            </td>
            <td>
            <div className="images">
                <img className="image-containers" src={breyer} />
               
              </div>
            </td>
          </tr>{" "}
          <tr>
            <td>
            <div className="images">
                <img className="image-containers" src={google} />
                
              </div>
            </td>
            <td>
            <div className="images">
                <img className="image-containers" src={balderton} />
                
              </div>
            </td>
          </tr>
                </table>
      </div>
    </div>
  );
}

export default TrustedInvestor;
