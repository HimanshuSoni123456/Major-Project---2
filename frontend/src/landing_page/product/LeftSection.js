import React from "react";
function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  //De-structure the values
  return (
    <div className="container mt-5">
      <div className="row mt-5">
        <div className="col-6 mt-3">
          <img src={imageURL} />
        </div>
        <div className="col-6 mt-3 p-5">
          <h1 className="mt-5">{productName}</h1>
          <p className="text-muted fs-4">{productDescription}</p>
          <div className="fs-4" >
            <a style={{textDecoration : "none"}} href={tryDemo}>Try Demo <i class="fa-solid fa-arrow-right"></i></a>
            <a  href={learnMore} style={{ marginLeft: "50px", textDecoration : "none" }}>
              learnMore <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore} style={{ marginLeft: "50px" }}>
              <img src="media/images/appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
