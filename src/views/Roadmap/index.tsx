import { Fragment } from "react";
import Logo from "../../img/Roadmap/logo.svg";
import Map from "../../img/Roadmap/map.svg";
export default function RoadMap() {
  return (
    <Fragment>
      <section className="roadmap" id="roadmap">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="d-flex justify-content-center align-items-center map">
            <img className="img-fluid" src={Map} alt="" />
        </div>
        <div className="heading">
          <h1>Roadmap</h1>
        </div>
      </section>
    </Fragment>
  );
}
