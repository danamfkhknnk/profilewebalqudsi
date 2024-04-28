import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function NavbarAdmin() {
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
      <nav className="fixed top-0 right-0 w-full bg-white text-black shadow-2xl z-50  ">
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            {/*logo*/}
            {kontak.map(({ logo }) => (
              <div>
                <Link>
                  <img src={`${process.env.REACT_APP_ASSETS_URL}/logo/${logo}`} alt="" className="h-16" />
                </Link>
              </div>
            ))}
            {/*menu*/}
            <div className="flex items-center gap-4">
              <Link to="/dashboard" className="bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-3 py-1 rounded-full">
                Kembali
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarAdmin;
