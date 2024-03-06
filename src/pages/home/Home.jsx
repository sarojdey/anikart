import React, { useEffect, useState } from "react";
import "./style.scss";
import ImageSlider from "../../components/imageSlider/ImageSlider";
import CategoriesGallery from "../../components/categoriesGallery/CategoriesGallery";
import { fetchDataFromApi } from "../../utils/api";
function Home() {
  const [bannerImgs, setBannerImgs] = useState([]);
  const [categories, setCategories] = useState({});
  useEffect(() => {
    getCategories();
    getBanners();
    console.log("apicalled");
  }, []);

  const getCategories = () => {
    // ?populate=* need to pass this param to get img
    fetchDataFromApi("/api/categories?populate=*").then((res) => {
      console.log("categories: ", res);
      setCategories(res);
    });
  };
  const getBanners = () => {
    fetchDataFromApi("/api/banners?populate=*").then((res) => {
      console.log("banners: ", res);
      setBannerImgs(res.data);
    });
  };
  return (
    <>
      <ImageSlider bannerImgs={bannerImgs} />
      <CategoriesGallery categories={categories} />
    </>
  );
}

export default Home;
