import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavHashLink } from "react-router-hash-link";
import { NavbarLinks } from "./Navbar";

function ResponsiveMenu({ showMenu, setShowMenu }) {
  console.log("showMenu", showMenu);
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
    <div className={`${showMenu ? "left-0" : "-left-[100%]"} fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white  px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md `}>
      <div className="card">
        {kontak.map(({ alamat, wa, fb, ig, logo }) => (
          <div className="flex items-center justify-start gap-3">
            <img src={`${process.env.REACT_APP_ASSETS_URL}/logo/${logo}`} alt="" className="h-16" />
          </div>
        ))}
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {NavbarLinks.map((data) => (
              <li className="border-b-2">
                <NavHashLink to={data.link} onClick={() => setShowMenu(false)} className="mb-5 inline-block">
                  {data.name}
                </NavHashLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default ResponsiveMenu;
