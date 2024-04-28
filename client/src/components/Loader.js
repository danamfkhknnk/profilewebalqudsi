import React from "react";
import Loading from "../assets/Loader.gif";
function Loader() {
  return (
    <div className="fixed top-0 left-0 h-[100vh] w-[100vw] grid place-items-center bg-primary	">
      <div className="w-20 aspect-square	">
        <img src={Loading} />
      </div>
    </div>
  );
}

export default Loader;
