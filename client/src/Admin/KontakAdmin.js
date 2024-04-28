import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/userContect";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import axios from "axios";

function KontakAdmin() {
  const [alamat, setAlamat] = useState("");
  const [wa, setWa] = useState("");
  const [fb, setFb] = useState("");
  const [ig, setIg] = useState("");
  const [logo, setLogo] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;
  const [error, setError] = useState("");

  useEffect(() => {
    if (!token) {
      navigate("/admin");
    }
  }, []);

  useEffect(() => {
    const getKontak = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/kontak/65e1eab65c98102a6b39d239`);
        setAlamat(response.data.alamat);
        setWa(response.data.wa);
        setFb(response.data.fb);
        setIg(response.data.ig);
      } catch (error) {
        console.log(error);
      }
    };
    getKontak();
  }, []);

  const editKontak = async (e) => {
    e.preventDefault();
    const postKontak = new FormData();
    postKontak.set("alamat", alamat);
    postKontak.set("wa", wa);
    postKontak.set("fb", fb);
    postKontak.set("ig", ig);
    postKontak.set("logo", logo);
    try {
      const response = await axios.patch(`${process.env.REACT_APP_BASE_URL}/kontak/65e1eab65c98102a6b39d239`, postKontak, { withCredentials: true, headers: { Authorization: `Bearer ${token}` } });
      if (response.status == 200) {
        if (location.pathname == "/kontak/65e1eab65c98102a6b39d239") {
          return navigate("/dashboard");
        }
      }
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <section className="min-h-screen flex flex-col md:flex-row justify-center lg:pt-20 pt-24 space-y-10 md:space-y-0 md:space-x-16 my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3">
        <div className="text-center md:text-left">
          <h3 className="mr-1 mb-2 my-8 py-2 pl-2 border-l-4 border-white/50 font-semibold text-white">Edit Kontak AL qudsi</h3>
        </div>
        {error && <p className="bg-white/50 mb-3 rounded-xl text-white text-center ">{error}</p>}

        <form onSubmit={editKontak}>
          <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded" type="text" placeholder="Alamat Al Qudsi" value={alamat} onChange={(e) => setAlamat(e.target.value)} autoFocus required />
          <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="text" placeholder="Whatsapp Al Qudsi" value={wa} onChange={(e) => setWa(e.target.value)} required />
          <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="text" placeholder="Facebook Al Qudsi" value={fb} onChange={(e) => setFb(e.target.value)} required />
          <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="text" placeholder="Instagram Al Qudsi" value={ig} onChange={(e) => setIg(e.target.value)} required />
          <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="file" onChange={(e) => setLogo(e.target.files[0])} accept="png, jpg, jpeg" required />
          <div className="text-center md:text-left">
            <button className="mt-4 bg-white/50 hover:bg-white py-2 text-white hover:text-secondary uppercase rounded text-xs tracking-wider w-full" type="submit">
              Simpan
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
export default KontakAdmin;
