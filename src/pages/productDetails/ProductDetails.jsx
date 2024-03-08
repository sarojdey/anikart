import React, { useState } from "react";
import "./style.scss";

import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getWishList } from "../../store/homeSlice";
import { getCart } from "../../store/cartSlice";


import { FaHeart, FaShoppingCart } from "react-icons/fa";

// function Categories() {
//   return <div className="title">{location.state.type}</div>;
// }

function ProductDetails() {
  const [product, setProduct] = useState();
  const [counter, setCounter] = useState(1);
  const location = useLocation();

  const dispatch = useDispatch();

  const whisListHandler = (product) => {
    console.log("wishlist clicked");
    const wishcount = counter;
    dispatch(
      getWishList({
        productInfo: product,
        quantity: wishcount,
      })
    );
  };
  const cartHandler = (product) => {
    console.log("cart clicked");
    const cartcount = counter;
    dispatch(
      getCart({
        productInfo: product,
        quantity: cartcount,
      })
    );
  };

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
          <div
            className="addWish"
            onClick={() => {
              whisListHandler(product);
            }}
          >
            <FaHeart />
            <span>Wishlist</span>
          </div>
          <div
            className="addCart"
            onClick={() => {
              cartHandler(product);
            }}
          >
            <FaShoppingCart />
            <span>Cart</span>
          </div>
        </div>
        <div className="space"></div>
      </div>
    )
  );
}

export default ProductDetails;
