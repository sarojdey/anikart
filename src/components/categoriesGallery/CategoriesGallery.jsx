import React, { useEffect, useState } from "react";
import "./style.scss";
import categories from "../../../categories.json";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import { useNavigate } from "react-router-dom";
function CategoriesGallery() {
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
    console.log(category.title);
    navigate(`/categories/${category.type}`, {
      state: { title: category.title, type: category.type },
    });
  };
  return (
    <ContentWrapper>
      <div className="categorySection">
        <span className="categories">Categories</span>
        <div className="grid">
          {mobileView
            ? Object.values(categories)
                .slice(0, 4)
                .map((category, index) => {
                  return (
                    <div
                      className="category"
                      key={index}
                      onClick={() => navigationHandler(category)}
                    >
                      <div className="card">
                        <img src={category.url} alt={category.title} />
                      </div>
                      {/* <span className="title">{category.title}</span> */}
                    </div>
                  );
                })
            : Object.values(categories).map((category, index) => {
                return (
                  <div
                    className="category"
                    key={index}
                    onClick={() => navigationHandler(category)}
                  >
                    <div className="card">
                      <img src={category.url} alt={category.title} />
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
