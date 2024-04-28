import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/userContect";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";

const EditTesti = () => {
  const [nama, setNama] = useState("");
  const [testimonial, setTestimonial] = useState("");
  const [testigambar, setTestigambar] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  //auth
  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;

  useEffect(() => {
    if (!token) {
      navigate("/admin");
    }
  }, []);

  useEffect(() => {
    const getTesti = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/testi/${id}`);
        setNama(response.data.nama);
        setTestimonial(response.data.testimonial);
      } catch (error) {
        console.log(error);
      }
    };
    getTesti();
  }, []);

  const editTesti = async (e) => {
    e.preventDefault();
    const postTesti = new FormData();
    postTesti.set("nama", nama);
    postTesti.set("testimonial", testimonial);
    postTesti.set("testigambar", testigambar);
    try {
      const response = await axios.patch(`${process.env.REACT_APP_BASE_URL}/testi/${id}`, postTesti, { withCredentials: true, headers: { Authorization: `Bearer ${token}` } });
      if (response.status == 200) {
        return navigate("/testi");
      }
    } catch (err) {
      setError(err.response.data.message);
    }
  };
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
    <div className="bg-primary">
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
            <div className="flex items-center gap-4">
              <Link to="/testi" className="bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-3 py-1 rounded-full">
                Kembali
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="min-h-screen flex flex-col md:flex-row justify-center lg:pt-20 pt-24 space-y-10 md:space-y-0 md:space-x-16 my-2 mx-5 md:mx-0 md:my-0">
        <div className="md:w-1/3">
          <div className="text-center md:text-left">
            <h3 className="mr-1 mb-2 my-8 py-2 pl-2 border-l-4 border-white/50 font-semibold text-white">Edit Testi AL qudsi</h3>
          </div>
          {error && <p className="bg-white/50 mb-3 rounded-xl text-white text-center ">{error}</p>}
          <form onSubmit={editTesti}>
            <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded" type="text" placeholder="Nama Jamaah" value={nama} onChange={(e) => setNama(e.target.value)} autoFocus required />
            <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="text" placeholder="Testimonial Jamaah" value={testimonial} onChange={(e) => setTestimonial(e.target.value)} required />
            <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="file" onChange={(e) => setTestigambar(e.target.files[0])} accept="png, jpg, jpeg" required />
            <div className="text-center md:text-left">
              <button className="mt-4 bg-white/50 hover:bg-white py-2 text-white hover:text-secondary uppercase rounded text-xs tracking-wider w-full" type="submit">
                simpan
              </button>
            </div>
          </form>
        </div>
      </section>

      <div className="">
        <div className="text-center py-3 border-t-2 right-0 left-0 bottom-0 fixed border-gray-300/50 bg-primary text-white">@copyright 2024 All rights reserved || Made with ❤️ by Dilshad</div>
      </div>
    </div>
  );
};

export default EditTesti;
