import { Fragment } from "react";
import MobileNavbar from "../../components/Navbar/mNavbar";
import Boom from "../../img/Home/mobile/boom.svg";
import IronMan from "../../img/Home/mobile/IronMan.svg";
import { FaTwitter, FaDiscord, FaTelegram } from "react-icons/fa";
import IronManDesk from "../../img/Home/IronMan.svg";
import Logo from "../../img/Home/logo-d.svg";
import moment from "moment";
import useCountdown from "../../hooks/useCountDown";

export default function HomePage() {
  let date = "2021-12-01T17:00:00Z";
  const UTC = moment.utc(moment(date)).format();
  const countdown = useCountdown(new Date(UTC));
  return (
    <Fragment>
      <section className="home" id="home">
        {/* <div>
          <img src={D_BOOM} alt="" />
        </div> */}
        <div className="ironman-desk">
          <img className="logo-h-d" src={Logo} alt="" />
          {/* <img src={D_BOOM} alt="" /> */}
          <img className="i-man-d" src={IronManDesk} alt="" />
          {/* CountDown */}
          <div className="d-flex text-center count-down">
            <div className="">
              <h2>{countdown.days}</h2>
              <p>Days</p>
            </div>
            <div className="">
              <h2>{countdown.hours}</h2>
              <p>Hours</p>
            </div>
            <div className="">
              <h2>{countdown.minutes}</h2>
              <p>Minutes</p>
            </div>
            <div className="">
              <h2>{countdown.seconds}</h2>
              <p>Seconds</p>
            </div>
          </div>
        </div>
        <div className="d-flex flex-nowrap s-link">
          <a className="m-3" href="https://discord.com/invite/m6qj6f7XEV">
            <FaDiscord size="8vmin" />
          </a>
          <a className="m-3" href="https://twitter.com/SolbitHeroes">
            <FaTwitter size="8vmin" />
          </a>
          <a className="m-3" href="https://t.me/solbitheroes">
            <FaTelegram size="8vmin" />
          </a>
        </div>
      </section>
      {/* Mobile */}
      <section className="m-home" id="home">
        {/* <MobileNavbar /> */}
        <img className="m-h-logo" src={Logo} alt="" />
        <img className="boom" src={Boom} alt="" />
        <div className="home-mobile">
          <div className="d-flex justify-content-center text-center count-down">
            <div className="">
              <h2>{countdown.days}</h2>
              <p>Days</p>
            </div>
            <div className="">
              <h2>{countdown.hours}</h2>
              <p>Hours</p>
            </div>
            <div className="">
              <h2>{countdown.minutes}</h2>
              <p>Minutes</p>
            </div>
            <div className="">
              <h2>{countdown.seconds}</h2>
              <p>Seconds</p>
            </div>
          </div>
        </div>
        <div className="mf-flex">
          {/* <img className="m-st-italk" src={mITalk} alt="" /> */}
          <img className="m-man" src={IronMan} alt="" />
          <h2>Follow Us</h2>
          <div className="pull-icons">
            <a className="mt-3" href="https://discord.com/invite/m6qj6f7XEV">
              <FaDiscord size="8vmin" />
            </a>
            <br />
            <a className="mt-3" href="https://twitter.com/SolbitHeroes">
              <FaTwitter size="8vmin" />
            </a>
            <br />
            <a className="mt-3" href="https://t.me/solbitheroes">
              <FaTelegram size="8vmin" />
            </a>
          </div>
        </div>
        {/* <div className="home-mobile-footer">
          <div className="column footer-bg1">
            <img className="m-man" src={IronMan} alt="" />
          </div>
          <div className="column footer-bg2">
            <h2>Follow Us</h2>
            <div className="pull-icons">
              <FaTwitter size="28px" />
              <br />
              <FaTwitter size="28px" />
              <br />
              <FaTwitter size="28px" />
              <br />
              <FaTwitter size="28px" />
            </div>
          </div>
        </div> */}
      </section>
    </Fragment>
  );
}
