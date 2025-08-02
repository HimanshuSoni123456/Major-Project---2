import React from "react";
function Universe(imageURL) {
  return (
    <div className="container mt-5">
      <div className="row fs-4 text-center">
        <h1 className="p-5">The Zerodha Universe</h1>
        <p className="text-muted fs-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4  p-3  mt-5">
          <img
            src="media/images/smallcaselogo.png"
            style={{ width: "250px" }}
          />
          <p className="text-muted text-small">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4  p-3 mt-5">
          <img src="media/images/streaklogo.png" style={{ width: "175px" }} />
          <p className="text-muted text-small">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4  p-3 mt-5">
          <img src="media/images/tijori.svg" style={{ width: "175px" }} />
          <p className="text-muted text-small">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-4  p-3 mt-5">
          <img
            src="media/images/zerodhaFundhouse.png"
            style={{ width: "250px" }}
          />
          <p className="text-muted text-small">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4  p-3 mt-5">
          <img
            src="media/images/sensibullLogo.svg"
            style={{ width: "250px" }}
          />
          <p className="text-muted text-small">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4  p-3 mt-5">
          <img src="media/images/dittoLogo.png" style={{ width: "150px" }} />
          <p className="text-muted text-small">
            Personalized advice on life and health insurance. No spam and no
            mis-selling. Sign up for free
          </p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5 mt-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
