import { Fragment } from "react";
import IronMan from "../../img/Home2/ironman.svg";
import Talk from "../../img/Home2/talk.svg";
import Sticker from "../../img/Home2/Sticker.svg";
import BatManTalk from "../../img/Home2/batman-talk.svg"
import BatMan from "../../img/Home2/batman.svg";
import HomeTwoNav from "./Navbar";
import Logo from "../../img/Home2/home-2-m-logo.svg"
import Ball from "../../img/Home2/ball.svg"
import Alam from "../../img/Home2/alam.svg"
import Right from "../../img/Home2/right.svg"
import Bottom from "../../img/Home2/rg-bottom.svg"
export default function HomeTwo() {
  return (
    <Fragment>
      <section className="home-two">
        <HomeTwoNav />
        <div className="s-flex">
          <div className="child bg-p">
            <div className="head-bar"></div>
            <div className="head-one">
              <img className="sticker" src={Sticker} />
            </div>
            <div className="head-two">
              <img className="iron-talk" src={Talk} alt="" />
              <img className="ironman-home" src={IronMan} alt="" />
            </div>
            <div className="d-flex">
              <div className="content-box">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Obcaecati eum aperiam dolores! Lorem ipsum dolor sit amet
                  consectetur.
                </p>
              </div>
              <div className="content-box-p "></div>
            </div>
          </div>
          <div className="child">
            <img className="img-fluid" src={Right} alt="" />
            {/* <img className="img-fluid bottom-right" src={Bottom} alt="" /> */}
          </div>
        </div>
      </section>
      {/* Mobile */}
      <section className="home-two-m">
      <div className="d-flex justify-content-start">
        <div className="m-3">
        <img className="ball img-fluid" src={Ball} alt="" />
          <img className="img-fluid" src={Logo} alt="" />
          <div className="clear"></div>
        </div>
      </div>
      <div className="m-3">
        <img className="alam" src={Alam} alt="" />
      </div>
        <div>
          <div className="batman-talk">
              <img src={BatManTalk} alt="" />
          </div>
          <div className="footer-content-box">
            <p className="m-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              veritatis.
            </p>
          </div>
          <img className="m-home2-batman img-fluid" src={BatMan} alt="" />
        </div>
      </section>
    </Fragment>
  );
}
