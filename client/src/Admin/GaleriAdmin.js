import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/userContect";
import { useNavigate, Link, useLocation } from "react-router-dom";
import Loader from "../components/Loader";
import axios from "axios";
import { RiDeleteBin6Fill } from "react-icons/ri";
function GaleriAdmin() {
  const navigate = useNavigate();
  const location = useLocation();
  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;
  const [galeri, setGaleri] = useState("");
  useEffect(() => {
    if (!token) {
      navigate("/admin");
    }
  }, []);

  const [getgaleri, setGetgaleri] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchGaleri = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/galeri`);
        setGetgaleri(response?.data);
      } catch (err) {
        console.log(err);
      }

      setIsLoading(false);
    };

    fetchGaleri();
  }, []);

  const createGaleri = async (e) => {
    e.preventDefault();
    const postGaleri = new FormData();
    postGaleri.set("galeri", galeri);
    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/galeri`, postGaleri, { withCredentials: true, headers: { Authorization: `Bearer ${token}` } });
      if (response.status == 201) {
        if (location.pathname == "/galeri") {
          window.location.reload();
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const removeGaleri = async (id) => {
    try {
      const response = await axios.delete(`${process.env.REACT_APP_BASE_URL}/galeri/${id}`, { withCredentials: true, headers: { Authorization: `Bearer ${token}` } });
      if (response.status == 200) {
        if (location.pathname == "/galeri") {
          window.location.reload();
        }
      }
    } catch (error) {
      console.log("Tidak Bisa Delete Galeri");
    }
  };
  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      {getgaleri.length > 0 ? (
        <div className=" container min-h-screen bg-primary lg:pt-20 pt-24 pb-16">
          <div className=" md:flex md:justify-between  items-center pb-4">
            <h3 className="mr-1 mb-2 my-3 py-2 pl-2 border-l-4 border-white/50 font-semibold text-white">Galeri AL Qudsi</h3>
            <form onSubmit={createGaleri} className="md:flex gap-2">
              <input className="text-sm md:py-2 px-1 w-full py-1 border border-solid border-gray-300 rounded mt-4" type="file" onChange={(e) => setGaleri(e.target.files[0])} accept="png, jpg, jpeg" required />
              <div>
                <button className="mt-5 md:px-4 md:py-3 px-2 py-2  bg-white/50 hover:bg-white  text-white hover:text-secondary uppercase rounded text-xs tracking-wider w-full" type="submit">
                  Tambah
                </button>
              </div>
            </form>
          </div>
          <div className="grid-auto-fit-xs grid gap-2">
            {getgaleri.map(({ _id: id, galeri }) => (
              <galeri key={id} className="p-4 bg-white/70 rounded-xl">
                <div className="gap-8 w-full items-center">
                  <div className=" rounded-md overflow-hidden">
                    <img src={`${process.env.REACT_APP_ASSETS_URL}/galeri/${galeri}`} />
                  </div>
                  <div className="gap-2 flex justify-center">
                    <Link onClick={() => removeGaleri(`${id}`)} className=" button mt-4 bg-primary hover:bg-primary/50 px-4 py-2 text-white uppercase rounded text-xs tracking-wider">
                      <RiDeleteBin6Fill />
                    </Link>
                  </div>
                </div>
              </galeri>
            ))}
          </div>
        </div>
      ) : (
        <h2>Tidak Ada Galeri</h2>
      )}
    </>
  );
}

export default GaleriAdmin;
