import React from "react";
import "./style.scss";

function TopSelling() {
  return (
    <div className="containersection">
      <div className="section-title">
        <span className="topSelling">Top Selling</span>
      </div>
      <div className="slider">
        <div className="grid">
          <div className="cards">
            <img src="/os1.webp" alt="skln" />
          </div>
          <div className="cards">
            <img src="/os1.webp" alt="akjn" />
          </div>
          <div className="cards">
            <img src="/os1.webp" alt="akls" />
          </div>
          <div className="cards">
            <img src="/os1.webp" alt="aklns" />
          </div>
          <div className="cards">
            <img src="/os1.webp" alt="akjsn" />
          </div>
          <div className="cards">
            <img src="/os1.webp" alt="aklns" />
          </div>
          <div className="cards">
            <img src="/os1.webp" alt="akn" />
          </div>
          <div className="cards">
            <img src="/os1.webp" alt="akjsn" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopSelling;
