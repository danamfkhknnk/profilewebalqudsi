import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";

function Paket() {
  const [paket, setPaket] = useState([]);
  useEffect(() => {
    const fetchPaket = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/paket`);
        setPaket(response?.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPaket();
  }, []);

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
    <>
      <div className="pt-16 pb-10" id="paket">
        <section data-aos="fade-up" className="container">
          <div className="text-center mb-4 max-w-[700px] mx-auto">
            <h1 className="text-xl font-bold">Paket AL Qudsi</h1>
            <p className="pt-2 text-center text-sm">
              Temukan paket perjalanan haji dan umrah yang sesuai dengan kebutuhan dan keinginan Anda. Kami menawarkan berbagai pilihan paket dengan layanan unggulan untuk memastikan pengalaman ibadah Anda berjalan lancar dan berkesan
            </p>
          </div>
          <div className="grid-auto-fit-xs grid gap-2">
            {paket.map(({ gambar, judul, tanggal, harga }) => (
              <div className="shadow-lg bg-primary/5 transition-all duration-500 hover:shadow-xl">
                <div className="overflow-hidden">
                  {kontak.map(({ wa }) => (
                    <a href={`https://wa.me/${wa}?text=Halo%20Admin%20AL-Qudsi%20Saya%20Tertarik%20Dengan%20${judul}.%20Bisa%20Infokan%20Lebih%20Lanjut.?%20`}>
                      <img src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${gambar}`} alt="No image" className="mx-auto cursor-pointer object-cover transition duration-700 hover:skew-x-2 hover:scale-110" />
                    </a>
                  ))}
                </div>
                <div className="space-y-2 p-3">
                  <h1 className="font-bold text-xl">{judul}</h1>
                  <p className="">{tanggal}</p>
                  <div className="border-t-2 border-secondary/50 py-3 !mt-3">
                    <div className="md:flex justify-between">
                      <p className="text-2xl font-semibold">Rp{harga}</p>
                      <a href={`https://wa.me/08231231412?text=Halo%20Admin%20AL-Qudsi%20Saya%20Tertarik%20Dengan%20${judul}.%20Bisa%20Infokan%20Lebih%20Lanjut.?%20`}>
                        <MdOutlineShoppingCartCheckout className="h-8 w-8" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Paket;
