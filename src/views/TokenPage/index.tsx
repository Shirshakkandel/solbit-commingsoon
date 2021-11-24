import { Fragment } from "react";
import Logo from "../../img/tokenpage/logo.svg";
import SuperMan from "../../img/tokenpage/superman.svg"
import {Button} from "react-bootstrap"
export default function TokenPage() {
  return (
    <Fragment>
      <section className="m-tokenpage d-flex align-items-center justify-content-center">
        <img className="logo" src={Logo} alt="" />
        <div className="card">
          <div className="text-center">
            <div className="nameCard">
              <h3>SuperMan</h3>
            </div>
            <img className="mtoken-man" src={SuperMan} alt="" />
          </div>
          <div className="mint-button">
            <h2>MINT</h2>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
