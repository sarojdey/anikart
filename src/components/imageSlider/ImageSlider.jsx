import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

function ImageSlider({ bannerImgs }) {
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    sliderRef.current.scrollTo({
      left: 0,
      behavior: "smooth",
    });

    //check bannerImgs if it contains data or not
    if (bannerImgs) {
      const sliders = window.innerWidth > 786 ? bannerImgs[0] : bannerImgs[1];
      setBanners(sliders || []);
      console.log(sliders);
    }
  }, [bannerImgs]);
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
          {banners?.attributes?.images?.data?.map((banner, index) => (
            <img
              key={index}
              src={banner.attributes.url}
              alt={`Banner ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ImageSlider;
