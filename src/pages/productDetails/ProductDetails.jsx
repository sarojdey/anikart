import React, { useState } from "react";
import "./style.scss";

import { useLocation } from "react-router-dom";

// function Categories() {
//   return <div className="title">{location.state.type}</div>;
// }

function ProductDetails() {
  const [product, setProduct] = useState();
  const [counter, setCounter] = useState(1);
  const location = useLocation();

  const handleCounter = (op) => {
    if (op === "plus") {
      const newVal = counter + 1;
      setCounter(newVal);
    } else {
      if (counter > 1) {
        const newVal = counter - 1;
        setCounter(newVal);
      }
    }
  };
  useState(() => {
    console.log("product details:", location.state.productInfo);
    setProduct(location.state.productInfo);
  }, []);

  return (
    product && (
      <div className="productDetails">
        <div className="productInfo">
          <div className="image">
            <img
              src={product.attributes.image.data[0].attributes.url}
              alt={product.attributes.type}
            />
          </div>
          <div className="productDes">
            <span className="productName">{product.attributes.title}</span>
            <span className="productDescription">
              {product.attributes.description}
            </span>
            <span className="price">₹{product.attributes.price} /-</span>
            <div className="counter">
              <div
                className="op"
                onClick={() => {
                  handleCounter("minus");
                }}
              >
                -
              </div>
              <div className="num">{counter}</div>
              <div
                className="op"
                onClick={() => {
                  handleCounter("plus");
                }}
              >
                +
              </div>
            </div>
          </div>
        </div>
        <div className="addBtn">
          <div className="addWish">Wish</div>
          <div className="addCart">cart</div>
        </div>
        <div className="space"></div>
      </div>
    )
  );
}

export default ProductDetails;
