import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const DashLinks = [
  {
    title: "PAKET",
    link: "/paket",
  },
  {
    title: "GALERI",
    link: "/galeri",
  },
  {
    title: "TESTIMONI",
    link: "/testi",
  },
  {
    title: "KONTAK",
    link: "/kontak/65e1eab65c98102a6b39d239",
  },
];
function Dashboard() {
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
    <div className="bg-primary w-full">
      <div className="container min-h-screen  lg:pt-20 pt-24 pb-16">
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
                <Link to="/logout" className="bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-3 py-1 rounded-full">
                  Logout
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <div className="grid-auto-fit-xl grid gap-2">
          {DashLinks.map(({ _id: id, title, link }) => (
            <div key={id} className="p-2 bg-white/70 rounded-xl">
              <div className="p-2">
                <h1 className="font-bold text-xl">{title}</h1>
                <div className="flex justify-between border-t-2 border-secondary/50">
                  <Link to={link} className=" button mt-4 bg-primary hover:bg-primary/50 px-4 py-2 text-white uppercase rounded text-xs tracking-wider">
                    Selengkapnya
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
