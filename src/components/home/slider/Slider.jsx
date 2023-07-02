import React from "react";
import "./Slider.scss";

const imgLink =
  "https://images.pexels.com/photos/16327893/pexels-photo-16327893/free-photo-of-dark-photo-of-mountain-ponds.jpeg";

const Slider = () => {
  return (
    <>
      <div className="slider_container">
        <div className="slider">
          <div className="slide_track">
            {/* 9 images */}
            <div className="slide">
              <img src={imgLink} alt="" />
            </div>
            <div className="slide">
              <img src={imgLink} alt="" />
            </div>
            <div className="slide">
              <img src={imgLink} alt="" />
            </div>
            <div className="slide">
              <img src={imgLink} alt="" />
            </div>
            <div className="slide">
              <img src={imgLink} alt="" />
            </div>
            <div className="slide">
              <img src={imgLink} alt="" />
            </div>
            <div className="slide">
              <img src={imgLink} alt="" />
            </div>
            <div className="slide">
              <img src={imgLink} alt="" />
            </div>
            <div className="slide">
              <img src={imgLink} alt="" />
            </div>
            {/*same 9 images doubled */}
            <div className="slide">
              <img src={imgLink} alt="" />
            </div>
            <div className="slide">
              <img src={imgLink} alt="" />
            </div>
            <div className="slide">
              <img src={imgLink} alt="" />
            </div>
            <div className="slide">
              <img src={imgLink} alt="" />
            </div>
            <div className="slide">
              <img src={imgLink} alt="" />
            </div>
            <div className="slide">
              <img src={imgLink} alt="" />
            </div>
            <div className="slide">
              <img src={imgLink} alt="" />
            </div>
            <div className="slide">
              <img src={imgLink} alt="" />
            </div>
            <div className="slide">
              <img src={imgLink} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
