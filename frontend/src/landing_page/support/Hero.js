import React from "react";
function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className=" p-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="#">Track Tickets</a>
      </div>
      <div className="  row p-3 m-3">
        <div className="  col-6  p-5">
          <h1 className="fs-3" style={{ color: "white" }}>
            Search for an answer or browse help topics to create a
            ticket
            <br></br>
            <br></br>
          </h1>
          <input placeholder="Eg: How do i activate F&O, Why is my order rejected..." />
          <br></br>
          <br></br>
          <a href="#">Track account</a>
          <a href="#" style={{ marginLeft: "20px" }}>
            {" "}
            opening Track
          </a>
          <a href="#" style={{ marginLeft: "20px" }}>
            segment activation
          </a>
          <a href="#" style={{ marginLeft: "20px" }}>
            Intraday margins
          </a>
          <br></br>
          <a href="#">Kite user manual</a>
        </div>
        <div className="  col-6 p-5 ">
          <h1 style={{ color: "white" }}>Featured</h1>
          <ol style={{ color: "white" }}>
            <li>
              <a style={{ color: "white" }} href="#">
                Quarterly Settlement of Funds - July 2025
              </a>
            </li>
            <br></br>
            <li>
              <a style={{ color: "white" }} href="#">
                Exclusion of F&O contracts on 8 securities <br></br>from August
                29, 2025
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
