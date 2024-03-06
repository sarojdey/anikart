import React, { useEffect, useState } from "react";
import "./style.scss";
import ImageSlider from "../../components/imageSlider/ImageSlider";
import CategoriesGallery from "../../components/categoriesGallery/CategoriesGallery";
import { fetchDataFromApi } from "../../utils/api";
function Home() {
  const [categories,setCategories]= useState({});
  useEffect(() => {
    getCategories();
    console.log("apicalled");
  }, []);

  const getCategories = () => {
    // ?populate=* need to pass this param to get img
    fetchDataFromApi("/api/categories?populate=*").then((res) => {
      console.log(res);
      setCategories(res);
    });
  };
  return (
    <>
      <ImageSlider />
      <CategoriesGallery categories={categories}/>
    </>
  );
}

export default Home;
