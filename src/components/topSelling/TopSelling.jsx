//! Onclick Navigate :TO DO



import React, { useEffect, useState } from "react";
import "./style.scss";

function TopSelling({ topSelling }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (topSelling) {
      setProducts(topSelling);
      console.log("got top selling:", topSelling);
    }
  }, [topSelling]);

  return (
    <div className="containersection">
      <div className="section-title">
        <span className="topSelling">Top Selling</span>
      </div>
      <div className="slider">
        <div className="grid">
          {products.map((product) => {
            return (
              <div className="cards" key={product.id}>
                <img src={product.attributes.image.data[0].attributes.url} alt={product.attributes.type} />
                <div className="productname">
                  <span>{product.attributes.title}</span>
                  <span className="price">₹{product.attributes.price}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TopSelling;
