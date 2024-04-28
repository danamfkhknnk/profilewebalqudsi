import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaTiktok, FaInstagram, FaLocationArrow, FaWhatsapp } from "react-icons/fa";
import NatureVid from "../assets/footer.mp4";

function Kontak() {
  const [kontak, setKontak] = useState([]);
  useEffect(() => {
    const fetchKontak = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/kontak`);
        setKontak(response?.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchKontak();
  }, []);

  return (
    <>
      <div className="pt-16 relative overflow-hidden" id="kontak">
        <video autoPlay loop muted className="absolute right-0 top-0 h-full overflow-hidden w-full object-cover z-[-1]">
          <source src={NatureVid} type="video/mp4" />
        </video>
        <div className="container ">
          <div className="bg-white/80 backdrop-blur-sm  rounded-t-xl">
            <div className="text-center">
              <h1 className=" my-2 py-4 text-3xl font-bold">Kontak Al Qudsi</h1>
            </div>
            {kontak.map(({ alamat, wa, fb, ig, logo }) => (
              <div className="grid-auto-fit-sm grid py-5 ">
                <div className="px-8">
                  <h1 className="flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left">
                    <img src={`${process.env.REACT_APP_ASSETS_URL}/logo/${logo}`} alt="" className="max-h-[60px]" />
                    {/* TravelloGo */}
                  </h1>
                  <p>{alamat}</p>

                  {/* social handles */}
                  <div>
                    <div className="flex mt-2 gap-1 items-center">
                      <a href={`https://wa.me/${wa}?text=Halo%20Admin`}>
                        <FaWhatsapp className="text-3xl" />
                      </a>
                      <p className="">{wa}</p>
                    </div>
                    <div className="flex mt-2 gap-1 items-center">
                      <a href={ig}>
                        <FaInstagram className="text-3xl" />
                      </a>
                      <p className="">alqudsitourtravel</p>
                    </div>
                    <div className="flex mt-2 gap-1 items-center">
                      <a href={fb}>
                        <FaTiktok className="text-3xl" />
                      </a>
                      <p className="">alqudsitour_travel</p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="flex items-center justify-center py-2">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15847.191099276613!2d110.81713077924397!3d-6.794443044510574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70dbdb28e9f3af%3A0x39d9cf4784a71220!2sAl-Qudsi%20Tour%20%26%20Travel%20Kudus!5e0!3m2!1sid!2sid!4v1707864392789!5m2!1sid!2sid"
                      className="rounded-xl shadow-md lg:w-[625px] lg:h-[240px] md:w-[300px] md:h-[300px]"
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className="text-center py-5 border-t-2 border-gray-300/50 bg-primary text-white">Copyright © Al Qudsi Tour And Travel 2024</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Kontak;
