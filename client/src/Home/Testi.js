import Slider from "react-slick";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Testi() {
  var settings = {
    dots: false,
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
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [testi, setTesti] = useState([]);
  useEffect(() => {
    const fecthTesti = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/testi`);
        setTesti(response?.data);
      } catch (err) {
        console.log(err);
      }
    };
    fecthTesti();
  }, []);

  return (
    <>
      <div data-aos="fade-up" data-aos-duration="300" className="pt-20 pb-16" id="testi">
        <div className="container">
          {/* Header section */}
          <div className="text-center mb-4 max-w-[700px] mx-auto">
            <h1 className="text-xl font-bold">Testimoni AL Qudsi</h1>
            <p className="pt-2 text-center text-sm">
              Simak pengalaman dan kesaksian langsung dari para jamaah yang telah mempercayakan perjalanan haji dan umrah mereka kepada Biro Haji Al Qudsi. Testimoni mereka adalah cerminan dari kepuasan dan keberhasilan kami dalam
              menyelenggarakan perjalanan ibadah yang berkualitas tinggi dan tak terlupakan
            </p>
          </div>
          {/* testimonial section */}
          <div data-aos="zoom-in" data-aos-duration="300" className="grid grid-cols-1 mx-auto gap-6">
            <Slider {...settings}>
              {testi.map(({ nama, testimonial, testigambar }) => {
                return (
                  <div className="my-6">
                    <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl  bg-primary/10 relative">
                      <img src={`${process.env.REACT_APP_ASSETS_URL}/testi/${testigambar}`} alt="" className="rounded-full block mx-auto w-20" />
                      <h1 className="text-xl font-bold">{nama}</h1>
                      <p className="text-gray-500 text-sm">{testimonial}</p>
                      <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">,,</p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testi;
