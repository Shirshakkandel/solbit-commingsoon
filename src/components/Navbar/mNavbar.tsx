import { Fragment } from "react";
export default function MobileNavbar() {
  return (
    <Fragment>
      <div className="m-navbar">
          <p className="mll mr-5 active">About</p>
          <p className="mr-5">Marketplace</p>
          <p className="mr-5">Wallet</p>
          <p className="mr-5">FAQ's</p>
      </div>
    </Fragment>
  );
}
