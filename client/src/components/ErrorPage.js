import React from "react";
import { Link } from "react-router-dom";
function ErrorPage() {
  return (
    <section className="err">
      <div className="text-center pt-20 m-auto block w-full ">
        <Link to="/" className="bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-3 py-2 rounded-full">
          Kembali Ke Halaman Utama
        </Link>
        <h2 className="mt-4 font-semibold">Halaman Tidak Ditemukan</h2>
      </div>
    </section>
  );
}

export default ErrorPage;
