import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./style.scss";
import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import NothingToShow from "../../components/nothingToShow/NothingToShow";

function Categories() {
  const [productsQ, setProductsQ] = useState(0);
  const [products, setProducts] = useState([]);
  const { type } = useParams();
  const navigate = useNavigate();

  const { data } = useFetch(
    //! was stuck here for hours.. a fkn headache
    `/api/products?populate=*&filters[categories][id]=${type}`
  );

  useEffect(() => {
    if (data.data) {
      console.log(data?.data.length);
      setProductsQ(data?.data.length);
      setProducts(data?.data);
    }
  }, [data]);
  const navigationHandler = (product) => {
    // console.log("navigationHandler is being called.");
    navigate(`/product/${product.id}`, {
      state: {
        productInfo: product,
      },
    });
  };

  const location = useLocation();
  return productsQ >= 4? (
    <>
    <div className="space"></div>
      <div className="categoryName">
        <span>{location.state.title}</span>
      </div>
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
      <div className="spacelast"></div>
    </>
  ) : (
    <NothingToShow />
  );
}

export default Categories;
