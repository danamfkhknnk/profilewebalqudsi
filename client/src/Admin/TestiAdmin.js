import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/userContect";
import { useNavigate, Link, useLocation } from "react-router-dom";
import Loader from "../components/Loader";
import axios from "axios";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
function TestiAdmin() {
  const navigate = useNavigate();
  const location = useLocation();
  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;

  useEffect(() => {
    if (!token) {
      navigate("/admin");
    }
  }, []);

  const [testi, setTesti] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchTesti = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/testi`);
        setTesti(response?.data);
      } catch (err) {
        console.log(err);
      }

      setIsLoading(false);
    };

    fetchTesti();
  }, []);

  const removeTesti = async (id) => {
    try {
      const response = await axios.delete(`${process.env.REACT_APP_BASE_URL}/testi/${id}`, { withCredentials: true, headers: { Authorization: `Bearer ${token}` } });
      if (response.status == 200) {
        if (location.pathname == "/testi") {
          window.location.reload();
        }
      }
    } catch (error) {
      console.log("Tidak Bisa Delete Paket");
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {testi.length > 0 ? (
        <div className=" container min-h-screen bg-primary lg:pt-20 pt-24 pb-16">
          <div className="text-center flex justify-between  items-center">
            <h3 className="mr-1 mb-2 my-4 py-2 pl-2 border-l-4 border-white/50 font-semibold text-white">Testimoni AL Qudsi</h3>
            <Link to={"/testi/create"} className="bg-white hover:bg-white/50 py-2 px-2 text-secondary hover:text-white uppercase rounded text-xs tracking-wider ">
              Tambah Testimoni
            </Link>
          </div>
          <div className="grid-auto-fit-xs grid gap-2">
            {testi.map(({ _id: id, testigambar, nama }) => (
              <div key={id} className="p-2 bg-white/70 rounded-xl">
                <div className="overflow-hidden">
                  <img src={`${process.env.REACT_APP_ASSETS_URL}/testi/${testigambar}`} alt="No image" className="mx-auto cursor-pointer object-cover transition duration-700 hover:skew-x-2 hover:scale-110" />
                </div>
                <div className="p-2">
                  <h1 className="font-bold text-xl">{nama}</h1>
                  <div className="flex justify-between border-t-2 border-secondary/50">
                    <Link to={`/testi/${id}/edit`} className=" button mt-4 bg-primary hover:bg-primary/50 px-4 py-2 text-white uppercase rounded text-xs tracking-wider">
                      <FaEdit />
                    </Link>
                    <Link onClick={() => removeTesti(`${id}`)} className=" button mt-4 bg-primary hover:bg-primary/50 px-4 py-2 text-white uppercase rounded text-xs tracking-wider">
                      <RiDeleteBin6Fill />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className=" container min-h-screen bg-primary lg:pt-20 pt-24 pb-16">
          <div className=" md:flex md:justify-between  items-center pb-4">
            <h3 className="mr-1 mb-2 my-4 py-2 pl-2 border-l-4 border-white/50 font-semibold text-white">Testi AL Qudsi Tidak Tersedia</h3>
          </div>
        </div>
      )}
    </>
  );
}

export default TestiAdmin;
