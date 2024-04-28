import React from "react";
import { PiNumberCircleOneFill, PiNumberCircleSixFill, PiNumberCircleTwoFill, PiNumberCircleThreeFill, PiNumberCircleFourFill, PiNumberCircleFiveFill } from "react-icons/pi";

const PlaceAbout = [
  {
    number: <PiNumberCircleOneFill className="h-8 w-8" />,
    desc: "Kami memiliki tim yang berpengalaman dan berpengetahuan luas dalam proses perjalanan haji dan umrah.",
    title: "Pengalaman dan Keahlian",
  },
  {
    number: <PiNumberCircleTwoFill className=" h-8 w-8" />,
    desc: "Kami mengutamakan kepuasan pelanggan dan selalu berusaha keras untuk memastikan setiap detail perjalanan berjalan dengan sempurna.",
    title: "Pelayanan Berkualitas",
  },
  {
    number: <PiNumberCircleThreeFill className=" h-8 w-8" />,
    desc: "Kami berkomitmen untuk selalu meningkatkan layanan kami dan berinovasi dalam menyediakan pengalaman perjalanan yang tak terlupakan bagi para jamaah haji dan umrah.",
    title: "Komitmen terhadap Kepuasan Pelanggan",
  },
  {
    number: <PiNumberCircleFourFill className=" h-8 w-8" />,
    desc: "Kami menawarkan berbagai macam paket perjalanan haji dan umrah yang dapat disesuaikan dengan kebutuhan dan budget Anda.",
    title: "Pilihan Paket Perjalanan yang Beragam",
  },
  {
    number: <PiNumberCircleFiveFill className=" h-8 w-8" />,
    desc: "Kami siap untuk memenuhi kebutuhan khusus Anda selama perjalanan haji dan umrah dan  berusaha keras untuk membuat perjalanan Anda nyaman dan berkesan.",
    title: "Pemenuhan Kebutuhan Khusus",
  },
  {
    number: <PiNumberCircleSixFill className=" h-8 w-8" />,
    desc: "Kami memberikan layanan purna jual yang baik. Kami siap membantu Anda dengan pertanyaan atau masalah setelah Anda kembali dari perjalanan Anda.",
    title: "Layanan Purna Jual yang Baik",
  },
];
function Tentang() {
  return (
    <div className="pt-16 " id="tentang">
      <section data-aos="fade-up" className="container">
        <h1 className="pb-2 text-xl text-center font-bold">Tentang AL Qudsi</h1>
        <div className="flex gap-2 justify-center flex-col text-justify pb-8">
          <h1>
            Al Qudsi Tour & Travel adalah perusahaan yang berkomitmen untuk menyediakan layanan haji dan umrah dengan kualitas terbaik. Sejak didirikan, kami telah berdedikasi untuk membantu jutaan muslim menjalankan ibadah haji dan umrah
            dengan nyaman dan lancar. Kami memiliki tim yang berpengalaman dan berpengetahuan luas dalam proses perjalanan haji dan umrah. Kami mengutamakan kepuasan pelanggan dan selalu berusaha keras untuk memastikan setiap detail
            perjalanan berjalan dengan sempurna.
          </h1>
          <h1>
            Visi kami adalah menjadi mitra terpercaya dalam perjalanan haji dan umrah, menyediakan layanan yang berkualitas tinggi dan mengutamakan kepuasan pelanggan. Kami berkomitmen untuk selalu meningkatkan layanan kami dan berinovasi
            dalam menyediakan pengalaman perjalanan yang tak terlupakan bagi para jamaah haji dan umrah. Kami mengundang Anda untuk menjelajahi layanan yang kami tawarkan dan menghubungi kami untuk informasi lebih lanjut. Terima kasih telah
            memilih Al Qudsi Tour & Travel sebagai mitra perjalanan ibadah Anda.
          </h1>
        </div>
        <div class="grid-auto-fit-xl grid gap-8">
          {PlaceAbout.map(({ number, desc, title }) => (
            <div className="text-center bg-primary/5 rounded-md shadow-md hover:bg-primary hover:text-white">
              <div className="mx-auto flex justify-content-center rounded-full text-sm font-semibold ">
                <p className="m-auto text-white bg-primary rounded-3xl">{number}</p>
              </div>
              <p className=" font-semibold">{title}</p>
              <h1 className="text-sm">{desc}</h1>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Tentang;
