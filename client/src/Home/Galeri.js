import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";

function Galeri() {
  const [getgaleri, setGetgaleri] = useState([]);
  useEffect(() => {
    const fecthGaleri = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/galeri`);
        setGetgaleri(response?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fecthGaleri();
  }, []);

  var settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="pt-16" id="galeri">
      <div className="container">
        <div data-aos="zoom-in" data-aos-duration="300">
          <div className="text-center mb-4 max-w-[700px] mx-auto">
            <h1 className="text-xl font-bold">Galeri AL Qudsi</h1>
            <p className="pt-2 text-center text-sm">
              Nikmati momen-momen penuh makna yang telah kami abadikan dalam album foto. Kami berharap galeri ini dapat memberikan gambaran yang lebih jelas tentang pengalaman yang kami tawarkan dan menjadi sumber inspirasi bagi perjalanan
              ibadah Anda yang akan datang.
            </p>
          </div>
          <div className="grid grid-cols-1 mx-auto gap-6">
            <Slider {...settings}>
              {getgaleri.map(({ galeri }) => {
                return (
                  <div className="">
                    <div className="flex flex-col justify-center items-center gap-2 text-center shadow-sm p-4 mx-4 rounded-xl  bg-primary/10 relative">
                      <img src={`${process.env.REACT_APP_ASSETS_URL}/galeri/${galeri}`} alt="" className="rounded-lg block mx-auto shadow-sm   lg:h-[300px] h-[220px]" />
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Galeri;
