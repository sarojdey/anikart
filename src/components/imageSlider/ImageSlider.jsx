import React, { useEffect, useRef, useState } from "react";
import bannerImgs from "../../../banners.json";
import "./style.scss";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

function ImageSlider() {
  const [banners, setBanners] = useState({});
  useEffect(() => {
    sliderRef.current.scrollTo({
      left: 0,
      behavior: "smooth",
    });
    const sliders = window.innerWidth > 786 ? bannerImgs.desktop : bannerImgs.mobile;
    setBanners(sliders);
    // console.log(sliders);
  }, []);
  const sliderRef = useRef();
  const handleScroll = (dir) => {
    if (dir === "left") {
      sliderRef.current.scrollTo({
        left: sliderRef.current.scrollLeft - sliderRef.current.offsetWidth,
        behavior: "smooth",
      });
    } else {
      sliderRef.current.scrollTo({
        left: sliderRef.current.scrollLeft + sliderRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <BsFillArrowLeftCircleFill
        className="btn leftBtn"
        onClick={() => {
          handleScroll("left");
        }}
      >
        Scroll Left
      </BsFillArrowLeftCircleFill>
      <BsFillArrowRightCircleFill
        className="btn rightBtn"
        onClick={() => {
          handleScroll("right");
        }}
      >
        Scroll Right
      </BsFillArrowRightCircleFill>
      <div className="slider" ref={sliderRef}>
        <div className="images">
         { Object.values(banners).map((banner, index) => (
          <img key={index} src={banner.url} alt={`Banner ${index + 1}`} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ImageSlider;
