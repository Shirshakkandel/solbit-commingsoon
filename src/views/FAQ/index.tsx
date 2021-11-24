import { Fragment } from "react";
import { Container } from "react-bootstrap";
import Boom from "../../img/faq/boom-m.svg";
import Logo from "../../img/faq/logo-m.svg";
import MobileNavbar from "../../components/Navbar/mNavbar";
import FAQBOOM from "../../img/faq/boom-d.png";
import FAQLogo from "../../img/faq/logo-faq-d.svg";
export default function FAQPage() {
  return (
    <Fragment>
      <section className="faq">
        <div className="item">
          <div className="faq-left-bg-1-lf">
            <ul className="faq-d-list">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
        <div className="item">
          <div className="faq-right-bg">
          <div className="d-flex justify-content-center ask-faq-pos">
            <div className="ask-faq-d">Ask a question</div>
          </div>
            <img className="faq-img" src={FAQBOOM} alt="" />
            <img className="faq-d-logo" src={FAQLogo} alt="Logo" />
          </div>
        </div>
      </section>
      <section className="m-faq-sec m-faq" id="faq">
        <MobileNavbar />
        <img className="faq-boom" src={Boom} alt="" />
        <div className="sec1-faq">
          <Container>
            <div className="d-flex justify-content-end">
              <img className="mt-2 img-fluid logo-faq-m" src={Logo} alt="" />
            </div>
          </Container>
        </div>
        <div className="sec2-faq">
          <div className="d-flex justify-content-center align-items-center">
            <ul>
              <li>
                <p className="left">
                  {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. */}
                </p>
              </li>
              <li>
                <p className="right">
                  {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. */}
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="sec3-faq">
          <div className="d-flex justify-content-center align-items-center centered">
            <ul>
              <li>
                <p className="left">
                  {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. */}
                </p>
              </li>
              <li>
                <p className="right">
                  {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. */}
                </p>
              </li>
            </ul>
          </div>
          <div className="d-flex justify-content-center align-items-center pb-3">
            <div className="ask-faq">Ask a question</div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
