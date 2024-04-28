import React from "react";
import Navbar from "../components/Navbar";
import Intro from "./Intro";
import AOS from "aos";
import Paket from "./Paket";
import "aos/dist/aos.css";
import Bannerimg from "./Bannerimg";
import Tentang from "./Tentang";
import Galeri from "./Galeri";
import Testi from "./Testi";
import Kontak from "./Kontak";

function Home() {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1100,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <div>
        <Navbar />
        <Intro />
        <Tentang />
        <Galeri />
        <Paket />
        <Bannerimg />
        <Testi />
        <Kontak />
      </div>
    </>
  );
}

export default Home;
