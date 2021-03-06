import React from "react";
import { Link } from "react-router-dom";

const Preview = () => {
  document.body.classList.remove("dark");
  return (
    <div className="tokyo_tm_all_wrap">
      <div className="tokyo_tm_intro">
        <div className="tokyo_tm_intro_fixed_price">
          <span className="anim"></span>
          <span className="anim"></span>
          <span className="anim"></span>
          <a
            href="https://github.com/mgalejandra"
            target="_blank"
            className="pricing-info anim" rel="noreferrer"
          >
        GIT
          </a>
        </div>
        {/* END TOKYO INTRO FIXED PRICE */}

        <div className="short_info">
          <img src="assets/img/logo/prinicpal.png" alt="" />
          <h2 className="title">Portafolio Personal</h2>
        </div>
        {/* END SHORT INFO */}

        <span className="intro_line"></span>
        <span className="intro_line_2"></span>
        <span className="intro_line_3"></span>
        {/* END VERTICAL LINE */}

        <div className="demos">
          <div className="left">
            <Link to="/home-light" target="_blank">
              <div className="desc">
                <img src="assets/img/intro/light.png" alt="" />
                
                
                <h3  className="pricing-info anim">Version Light </h3>
              </div>
            </Link>
          </div>
          {/* END LEFT DEMO */}
          <div className="right">
            <Link to="/home-dark" target="_blank">
              <div className="desc">
                <img src="assets/img/intro/dark.png" alt="" />
                <h3 className="title">Version Dark </h3>
              </div>
            </Link>
          </div>
          {/* END RIGHT DEMO */}
        </div>
        {/* END DEMOS */}
      </div>
    </div>
  );
};

export default Preview;
