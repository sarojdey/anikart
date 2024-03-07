//! Onclick Navigate :TO DO

import React, { useEffect, useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";

function TopSelling({ topSelling }) {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const navigationHandler = (product) => {
    // console.log("navigationHandler is being called.");
    navigate(`/product/${product.id}`, {
      state: {
        productInfo: product,
      },
    });
  };

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
          {products?.map((product) => {
            return (
              <div className="cards" key={product.id}>
                <img
                  src={product.attributes.image.data[0].attributes.url}
                  onClick={() => {
                    navigationHandler(product);
                  }}
                  alt={product.attributes.type}
                />
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
