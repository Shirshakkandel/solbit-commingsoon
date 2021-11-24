import { Fragment } from "react";
import Boom from "../../img/Home3/boom.svg";
import Logo from "../../img/Home3/logo.svg";
import BlackP from "../../img/Home3/blackp.svg";
import GreenMan from "../../img/Home3/greenman.svg";
import { Container } from "react-bootstrap";
export default function HomeThree() {
  return (
    <Fragment>
      <section className="home-3">
        <img className="h3-logo" src={Logo} alt="" />
        <img className="boom" src={Boom} alt="" />
        <div className="content-box-left">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
            corrupti dolorum esse dicta tempore accusantium repellendus aliquam
            quam, similique consectetur.
          </p>
        </div>
        <div className="content-box-right">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
            corrupti dolorum esse dicta tempore accusantium repellendus aliquam
            quam, similique consectetur.
          </p>
        </div>
        <div>
          <img className="center-man" src={GreenMan} alt="" />
        </div>
        <div>
          <img className="footer-man" src={BlackP} alt="" />
        </div>
        <div className="wallet">
          <div className="button">Connect Wallet</div>
        </div>
      </section>
      {/* Mobile */}
      <section className="m-home-3 m-home-3-bg">
        <div className="d-flex justify-content-center">
             <img className="mt-3 logo" src={Logo} alt="" />
        </div>
        <Container>
        <div className="d-flex justify-content-center m-boom">
           <img className="img-fluid" src={Boom} alt="" />
        </div>
        </Container>
        <div className="d-flex justify-content-center first-cont-box">
            <p className="m-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Consequuntur animi, quasi debitis dolorum quisquam delectus itaque voluptates sunt iure hic.</p>
          </div>
        <div className="d-flex justify-content-center">
        <div className="wallet">
          <div className="button">Connect Wallet</div>
        </div>
        </div>
      </section>
    </Fragment>
  );
}
