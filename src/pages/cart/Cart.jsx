import React, { useEffect, useState } from "react";
import "./style.scss";
import { MdDeleteForever } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
import NothingToShow from "../../components/nothingToShow/NothingToShow";
import { useSelector, useDispatch } from "react-redux";
import { removeCart } from "../../store/cartSlice";

function Cart() {
  const [cartLength, setCartLength] = useState(0);
  const { cart ,subtotal} = useSelector((state) => state.cart);

  useEffect(() => {
    setCartLength(cart.length);
  }, [cart]);
  const dispatch = useDispatch();

  const removeHandler = (i) => {
    dispatch(removeCart(i));
  };
  return cartLength > 0 ? (
    <>
      <div className="space"></div>
      <div className="cartX">
        <div className="cartTableX">
          {cart.map((product, index) => {
            return (
              <div className="cartItemX" key={product.id}>
                <div className="thumbnail">
                  <img
                    src={product.attributes.image.data[0].attributes.url}
                    alt="product"
                  />
                </div>
                <div className="productDetails">
                  <span className="productTitle">
                    {product.attributes.title}
                  </span>
                  <span className="productPrice">
                    ₹{product.attributes.price} /-
                  </span>
                  <span className="productQuantity">
                    Quantity: {product.attributes.quantity}
                  </span>
                </div>
                <div className="addContainer">
                  <div className="checkout">
                    <MdOutlinePayment />
                  </div>
                  <div
                    className="delete"
                    onClick={() => {
                      removeHandler(index);
                    }}
                  >
                    <MdDeleteForever />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="subtotal">
        <span className="amount">Subtotal: ₹{subtotal}</span>
        <div className="checkoutAll">
          <span>Checkout</span>
          <MdOutlinePayment />
        </div>
      </div>
    </>
  ) : (
    <div>
      <NothingToShow />
    </div>
  );
}

export default Cart;
