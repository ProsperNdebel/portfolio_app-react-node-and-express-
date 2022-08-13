import React from "react";
import "./Footer.css";
import FooterImg from "../../../assets/Home/shape-bg.png";
function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-parent">
        <img src={FooterImg} alt="you have problem with the imge" />
      </div>
    </div>
  );
}

//onClick={() => ScrollService.scrollHandler.scrollToHome()}

export default Footer;
