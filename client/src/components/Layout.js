import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavbarAdmin from "./NavbarAdmin";

const Layout = () => {
  return (
    <>
      <NavbarAdmin />
      <div className="bg-primary">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
