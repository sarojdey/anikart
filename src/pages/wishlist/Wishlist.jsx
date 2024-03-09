import React, { useEffect, useState } from "react";
import "./style.scss";
import { FaShoppingCart } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import NothingToShow from "../../components/nothingToShow/NothingToShow";
import { useSelector, useDispatch } from "react-redux";
import { removeWishList } from "../../store/homeSlice";
import { getCart } from "../../store/cartSlice";

function Wishlist() {
  const [wishListLength, setWishListLength] = useState(0);
  const { wishList } = useSelector((state) => state.home);

  useEffect(() => {
    setWishListLength(wishList.length);
  }, [wishList]);
  const dispatch = useDispatch();

  const cartHandler = (product) => {
    dispatch(
      getCart({
        productInfo: product,
        quantity: product.attributes.quantity,
      })
    );
  };

  const removeHandler = (i) => {
    dispatch(removeWishList(i));
  };
  return wishListLength > 0 ? (
    <>
      <div className="space"></div>
      <div className="wishlist">
        <div className="wishlistTable">
          {wishList.map((product, index) => {
            return (
              <div className="wishlistItem" key={product.id}>
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
                  <div
                    className="addtocart"
                    onClick={() => {
                      cartHandler(product);
                    }}
                  >
                    <FaShoppingCart />
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
    </>
  ) : (
    <div>
      <NothingToShow />
    </div>
  );
}

export default Wishlist;
