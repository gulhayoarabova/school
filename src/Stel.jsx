import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import ful from './assets/photo_2024-05-28_10-24-25.jpg'
import luf from './assets/photo_2024-05-28_10-24-20.jpg'
import lol from './assets/photo_2024-05-28_10-24-16.jpg'
import dom from './assets/photo_2024-05-28_10-24-11.jpg'
import './App.css'
function Stel() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
{/*       
        <div>
        <img src={ful} alt=""  className="mm"/>
        </div> */}
        <div >
        <img src={luf} alt=""  className="mm"/>
        </div>
        <div >
        <img src={lol} alt=""  className="mm"/>
        </div>
        <div >
        <img src={dom} alt=""  className="mm"/>
        </div>
        <div >
        <img src={lol} alt=""  className="mm"/>
        </div>
        <div >
        <img src={luf}  alt=""  className="mm"/>
        </div>
        <div >
          <img src={dom} alt=""  className="mm"/>
        </div>
      </Slider>
    </div>
  );
}

export default Stel;
