import React from "react";
import "./style.scss";
import ImageSlider from "../../components/imageSlider/ImageSlider";
import CategoriesGallery from "../../components/categoriesGallery/CategoriesGallery";
function Home() {
  return (
    <>
      <ImageSlider />
      <CategoriesGallery />
    </>
  );
}

export default Home;
