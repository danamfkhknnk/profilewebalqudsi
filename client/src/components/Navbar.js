import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";

export const NavbarLinks = [
  {
    name: "Paket",
    link: "#paket",
  },
  {
    name: "Tentang",
    link: "#tentang",
  },
  {
    name: "Galeri",
    link: "#galeri",
  },
  {
    name: "Testimoni",
    link: "#testi",
  },
  {
    name: "Kontak",
    link: "#kontak",
  },
];
function Navbar() {
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
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
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
            <div className="hidden md:block">
              <ul className="flex items-center gap-6">
                <li className="py-4 ">
                  <NavHashLink to="#tentang" activeClassName="active">
                    Tentang
                  </NavHashLink>
                </li>
                <li className="py-4">
                  <NavHashLink to="#galeri" activeClassName="active">
                    Galeri
                  </NavHashLink>
                </li>
                <li className="py-4">
                  <NavHashLink to="#paket" activeClassName="active">
                    Paket
                  </NavHashLink>
                </li>
                <li className="py-4">
                  <NavHashLink to="#testi" activeClassName="active">
                    Testimoni
                  </NavHashLink>
                </li>
                <li className="py-4">
                  <NavHashLink to="#kontak" activeClassName="active">
                    Kontak
                  </NavHashLink>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-4">
              <Link to={"/admin"} className="bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-3 py-1 rounded-full">
                Login
              </Link>
              <div className="md:hidden block">
                {showMenu ? <HiMenuAlt1 onClick={toggleMenu} className=" cursor-pointer transition-all" size={30} /> : <HiMenuAlt3 onClick={toggleMenu} className="cursor-pointer transition-all" size={30} />}
              </div>
            </div>
          </div>
        </div>
        <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
      </nav>
    </>
  );
}

export default Navbar;
