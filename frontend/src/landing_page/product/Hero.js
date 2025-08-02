import React from "react";
function Hero() {
  return (
    <div className="container mb-5 border-bottom">
      <div className="text-muted text-center mt-5 p-3">
        <h1 className="mt-3">Zerodha Products</h1>
        <h4 className="fs-4 mt-3">
          Sleek, modern, and intuitive trading platforms
        </h4>
        <p className="mt-3">
          Check out our{" "}
          <a href="#" style={{ textDecoration: "none" }}>
            {" "}
            investment offerings <i class="fa-solid fa-arrow-right"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
