import React, { useEffect, useState } from "react";
import "./style.scss";
import ImageSlider from "../../components/imageSlider/ImageSlider";
import CategoriesGallery from "../../components/categoriesGallery/CategoriesGallery";
import { fetchDataFromApi } from "../../utils/api";
import TopSelling from "../../components/topSelling/TopSelling";
function Home() {
  const [bannerImgs, setBannerImgs] = useState([]);
  const [topSelling, setTopSelling] = useState([]);
  const [categories, setCategories] = useState({});
  useEffect(() => {
    getCategories();
    getBanners();
    getTopSelling();
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
  const getTopSelling = () => {
    // ?sort=sales:desc for gettion sorted value but cant use populate and sort at once
    fetchDataFromApi("/api/products?populate=*").then((res) => {
      console.log("Top selling: ", res);
      setTopSelling(res.data);
    });
  };
  return (
    <>
      <ImageSlider bannerImgs={bannerImgs} />
      <CategoriesGallery categories={categories} />
      <TopSelling topSelling={topSelling}/>
    </>
  );
}

export default Home;
