import React from "react";

function Pricing() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h1 className="mb-5 fs-2">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            See pricing <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        {/* Spacer Column */}
        <div className="col-md-2"></div>

        {/* Right Column */}
        <div className="col-md-6">
          <div className="row text-center">
            <div className="col border p-3">
              <h1>
                <i className="fa-solid fa-indian-rupee-sign"></i> 0
              </h1>
              <p className="mb-3">
                Free equity delivery and <br></br> direct mutual funds
              </p>
            </div>
            <div className="col border p-3">
              <h1>
                <i className="fa-solid fa-indian-rupee-sign"></i> 20
              </h1>
              <p className="mb-3">Intradya and F&Q</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
