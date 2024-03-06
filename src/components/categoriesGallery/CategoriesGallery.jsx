import React, { useEffect, useState } from "react";
import "./style.scss";

import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import { useNavigate } from "react-router-dom";

function CategoriesGallery({ categories }) {
  console.log("this is from categoriesGallery:", categories);
  const [mobileView, setMobileView] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 460) {
      setMobileView(true);
    } else {
      setMobileView(false);
    }
  }, []);
  const navigate = useNavigate();
  const navigationHandler = (category) => {
    console.log("navigationHandler is being called.");
    console.log(category.attributes.title);
    navigate(`/categories/${category.attributes.type}`, {
      state: {
        title: category.attributes.title,
        type: category.attributes.type,
      },
    });
  };
  return (
    <ContentWrapper>
      <div className="categorySection">
        <span className="categories">Categories</span>
        <div className="grid">
          {mobileView
            ? categories?.data?.slice(0, 4).map((category, index) => {
              
                return (
                  <div
                    className="category"
                    key={index}
                    onClick={() => navigationHandler(category)}
                  >
                    <div className="card">
                      <img
                        src={category.attributes.img.data.attributes.url}
                        alt={category.attributes.title}
                      />
                    </div>
                    {/* <span className="title">{category.title}</span> */}
                  </div>
                );
              })
            : categories?.data?.map((category, index) => {
                return (
                  <div
                    className="category"
                    key={index}
                    onClick={() => navigationHandler(category)}
                  >
                    <div className="card">
                      <img
                        src={category.attributes.img.data.attributes.url}
                        alt={category.attributes.title}
                      />
                    </div>
                    {/* <span className="title">{category.title}</span> */}
                  </div>
                );
              })}
        </div>
        <div
          className={`viewAll ${mobileView}`}
          onClick={() => {
            setMobileView(false);
          }}
        >
          <span>Show All</span>
        </div>
      </div>
    </ContentWrapper>
  );
}

export default CategoriesGallery;
