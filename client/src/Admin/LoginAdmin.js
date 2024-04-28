import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../context/userContect.js";

function LoginAdmin() {
  const [adminData, setAdminData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { setCurrentUser } = useContext(UserContext);

  const changeInputHandler = (e) => {
    setAdminData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const loginUser = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/users/login`, adminData);
      const user = await response.data;
      setCurrentUser(user);
      navigate("/dashboard");
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
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      {kontak.map(({ logo }) => (
        <div className="md:w-1/3 max-w-sm">
          <img src={`${process.env.REACT_APP_ASSETS_URL}/logo/${logo}`} alt="" />
        </div>
      ))}
      <form className="md:w-1/3 max-w-sm" onSubmit={loginUser}>
        <div className="text-center md:text-left">
          <h3 className="mr-1 mb-2 font-semibold">Admin AL Qudsi</h3>
          {error && <p className="bg-orange-600 mb-3 rounded-lg py-1 text-white">{error}</p>}
        </div>
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded" type="text" placeholder="Email Address" name="email" value={adminData.email} onChange={changeInputHandler} autoFocus required />
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="password" placeholder="Password" name="password" value={adminData.password} onChange={changeInputHandler} required />
        <div className="text-center md:text-left">
          <button className="mt-4 bg-primary hover:bg-primary/50 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">
            Login
          </button>
        </div>
      </form>
    </section>
  );
}

export default LoginAdmin;
