// import {ImMenu} from "react-icons/im"
// import {MdClose} from "react-icons/md"
import "../styles/bookings/Header2.css";
import logo from "../images/bookings/Logo_cc23.png"

function Header2() {
  return (
    <div className="topheader">
      <div style={{marginLeft:"2em"}}>
       <img
       style={{width:"100px",height:"50px"}}
       src={logo}
       />
      </div>
      <div style={{color:"white", marginLeft: "7em"}}>menu</div>
    </div>
  );
}

export default Header2;
