import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./style.scss";
import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import NothingToShow from "../../components/nothingToShow/NothingToShow";

function Categories() {
  const [productsQ, setProductsQ] = useState(0);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { type } = useParams();
  const navigate = useNavigate();

  const { data } = useFetch(
    `/api/products?populate=*&filters[categories][id]=${type}`
  );

  useEffect(() => {
    if (data.data) {
      setProductsQ(data.data.length);
      setProducts(data.data);
      setLoading(false); // Set loading to false when data is fetched
    }
  }, [data]);

  const navigationHandler = (product) => {
    navigate(`/product/${product.id}`, {
      state: {
        productInfo: product,
      },
    });
  };

  const location = useLocation();

  if (loading) {
    return <div className="load">Loading...</div>;
  }

  return productsQ ? (
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
