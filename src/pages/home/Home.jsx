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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getCategories(), getBanners(), getTopSelling()]).then(() => {
      setLoading(false);
    });
  }, []);

  const getCategories = () => {
    return fetchDataFromApi("/api/categories?populate=*").then((res) => {
      setCategories(res);
    });
  };

  const getBanners = () => {
    return fetchDataFromApi("/api/banners?populate=*").then((res) => {
      setBannerImgs(res.data);
    });
  };

  const getTopSelling = () => {
    return fetchDataFromApi(
      "/api/products?populate=*&filters[categories][id]=6"
    ).then((res) => {
      setTopSelling(res.data);
    });
  };

  if (loading) {
    return (
      <>
        <div className="load">
          <div className="serverLatency">
            <span>Loading...</span>
            <span>Excuse the latency.</span>
            <span> The server is on a free plan 🥲</span>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <ImageSlider bannerImgs={bannerImgs} />
      <CategoriesGallery categories={categories} />
      <TopSelling topSelling={topSelling} />
    </>
  );
}

export default Home;
