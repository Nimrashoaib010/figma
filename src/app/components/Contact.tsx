import React from "react";
import Image from "next/image";
import projectline from "@/public/projectline.png";

export default function Contact() {
  return (
    <div
      id="contact"
      className="w-screen min-h-screen flex flex-col bg-gray-100 items-center justify-between overflow-hidden md:w-screen"
    >
      <div className="w-[1440px] h-[1004px] flex flex-col items-center justify-center">
        <h2 className="font-[Playfair] text-[#25282b] text-[48px] leading-[72px] font-bold text-center">
          Contact
        </h2>

        <div className="flex flex-col gap-8 w-[400px] h-[445px] md:max-w-screen-md">
          <form action="https://www.example.com/contact.php" method="post">
            <label className="mb-2 font-[Nunito] text-[16px] font-semibold leading-[21.82px]">
              Name:
              <input type="text" name="name" maxLength={30} className="w-[400px] h-[40px] p-2 border-[1px] rounded-[8px] bg-[#ffffff] mb-6" required/>
            </label>

            <label className="mb-4 font-[Nunito] text-[16px] font-semibold leading-[21.82px]">
              Email:
              <input type="email" name="email" maxLength={50} className="w-[400px] h-[40px] p-2 border-[1px] rounded-[8px] bg-[#ffffff] mb-6" required/>
            </label>

            <label className="mb-4 font-[Nunito] text-[16px] font-semibold leading-[21.82px]">
              Message:
              <textarea name="message" rows={6} className="w-[400px] h-[160px] rounded-[8px] border-[1px] p-2 bg-[#ffffff]" required></textarea>
            </label>
            <div className="flex justify-end w-full mt-6">
              <input type="submit" name="submit" className="w-[89px] h-[43px] px-6 py-2 rounded-[8px] bg-[#fdc435] font-[Roboto] font-bold text-[18px] leading-[27px] text-center cursor-pointer" required/>
            </div>
          </form>

          <div className="flex justify-center items-center ml-24 gap-6 mt-4 w-[192px] h-[102px]">
            <Image src="/instagram.png" alt="Instagram" width={37.5} height={37.5}/>

            <Image src="/linkedin.png" alt="LinkedIn" width={38} height={38} />

            <Image src="/email(1).png" alt="Mail" width={42} height={32} />
          </div>

          <div className="font-[Nunito] text-[16px] font-normal leading-5 text-center mb-2">
            Madelyn Torff 2021{" "}
          </div>
        </div>
      </div>

      <Image src="/footer.png" alt="footer" width={1440} height={344} className="w-full h-auto" />
    </div>
  );
}