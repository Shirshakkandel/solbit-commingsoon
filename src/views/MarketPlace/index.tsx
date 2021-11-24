import { Fragment } from "react";
import Img1 from "../../img/marketplace/Cards/1.svg";
import BuyIt from "../../img/marketplace/m-buy-it.svg";
import Batman from "../../img/marketplace/m-batman.svg";
import Logo from "../../img/marketplace/Logo.svg";
import HeaderImg from "../../img/marketplace/header.svg";
import LogoD from "../../img/marketplace/logo-d.svg"
import Header2 from "../../img/marketplace/header2.svg";
import { Col, Container, Row } from "react-bootstrap";
import Sman from "../../img/marketplace/sman.gif"
export default function Marketplace() {
  return (
    <Fragment>
      <section className="marketplace">
      <img className="s-center" src={Sman} alt="" />
        <div className="header">
          <div>
            <img className="logo-d" src={LogoD} alt="Logo" />
            <img className="head1" src={HeaderImg} alt="" />
          </div>
          <div>
          </div>
          <div>
            <img className="head2" src={Header2} alt="" />
          </div>
        </div>
        <br />
        <div className="row g-0 grid-item">
          <div className="col-sm-6 col-md-6 col-lg-3 bg-b">
            <img className="marketplace-card-img" src={Img1} alt="" />
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3 bg-r">
            {" "}
            <img className="marketplace-card-img" src={Img1} alt="" />
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3 bg-b">
            {" "}
            <img className="marketplace-card-img" src={Img1} alt="" />
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3 bg-r">
            {" "}
            <img className="marketplace-card-img" src={Img1} alt="" />
          </div>
        </div>
        {/* <div className="mt-3 grid-container align-items-center">
          <div className="grid-item bg-y">
            <img className="marketplace-card-img" src={Img1} alt="" />
          </div>
          <div className="grid-item bg-b">
            {" "}
            <img className="marketplace-card-img" src={Img1} alt="" />
          </div>
          <div className="grid-item bg-r">
            {" "}
            <img className="marketplace-card-img" src={Img1} alt="" />
          </div>
          <div className="grid-item bg-r">
            {" "}
            <img className="marketplace-card-img" src={Img1} alt="" />
          </div>
        </div> */}
      </section>
      <section className="m-marketplace">
        <div className="half-header">
          <div className="right">
            <img className="img-fluid" src={BuyIt} alt="" />
          </div>
          <div className="d-flex justify-content-center center">
            <img className="batmaN" src={Batman} alt="" />
          </div>
        </div>
        <div className="d-flex justify-content-center logo">
          <img src={Logo} alt="" />
        </div>
        <div className="m-marketplace-footer">
          <Container className="bottom">
            <Row>
              <Col xs="4">
                <img className="marketplace-card-img" src={Img1} alt="" />
              </Col>
              <Col xs="4">
                <img className="marketplace-card-img" src={Img1} alt="" />
              </Col>
              <Col xs="4">
                <img className="marketplace-card-img" src={Img1} alt="" />
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </Fragment>
  );
}
