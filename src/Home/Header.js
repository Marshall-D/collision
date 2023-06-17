import TopHeader from "../Home/TopHeader";
import "../styles/home/TopHeader.css";

function Header() {
  return (
    <div className="topHeader">
      {/* <TopHeader  /> */}
      <div class="header__buttons"></div>
      <div class="menu__burger hamburger hamburger--elastic">
        <div class="hamburger-box">
          <div class="hamburger-inner"></div>
        </div>
      </div>
    </div>
  );
}
export default Header;
