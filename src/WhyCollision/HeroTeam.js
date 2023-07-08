import "../styles/home/Home.css";
// import qanda from "../../images/qnadasvg.svg";
import { Link } from "react-router-dom";

const HeroTeam = () => {
  return (
    <div>
      <section className="hero">
      
        <div className="container">
          <div className="row">
            <div className="col-md">
              <h1 className="full ">TEAM BUILDING AT COLLISION 2023 </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p className="col-md-6-p">
              Team building looks a little different these days. Learn, network and join the world’s most important conversations as a team. 
               
              </p>
              <br/>
              <br/>
              <p>



              Meet us in Toronto this October for Collision 2023.
              </p>
            </div>
          
            <div className="col-md-6-center">
              <Link
                className="hero-btn-red "
                to="https://form.jotform.com/231143699159262"
                rel=""
                target=""
              >
                Book tickets
              </Link>
            </div>
          </div>
        </div>
        <span class="hero-bottom-text"></span>
      </section>
    </div>
  );
};
export default HeroTeam;
