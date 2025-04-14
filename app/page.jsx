"use client";
import { useState } from "react";

export default function page() {
  const [input, setInput] = useState(false);

  return (
    <div className="">
      <div className="flex justify-between border-b-[1px] p-2 border-[#dee2e6]">
        <div className="flex gap-2 px-12">
          <div>
            <a
              className="text-[#484848] font-bold text-[11px] cursor-pointer border-b-[1px] border-transparent hover:border-[#484848] transition-all"
              href=""
            >
              МЭДЭЭ
            </a>
          </div>
          <div>
            <a
              className="text-[#484848] cursor-pointer font-bold text-[11px] border-b-[1px] border-transparent hover:border-[#484848] transition-all"
              href=""
            >
              ЗАРЛАЛ
            </a>
          </div>
          <div>
            <a
              className="text-[#484848] cursor-pointer font-bold text-[11px] border-b-[1px] border-transparent hover:border-[#484848] transition-all"
              href=""
            >
              SCIENCE FM 94.1
            </a>
          </div>
        </div>
        <div className="flex gap-2">
          <div>
            <a
              className="text-[#484848] cursor-pointer font-bold text-[11px] border-b-[1px] border-transparent hover:border-[#484848] transition-all"
              href=""
            >
              ЭЛСЭГЧ
            </a>
          </div>
          <div>
            <a
              className="text-[#484848] cursor-pointer font-bold text-[11px] border-b-[1px] border-transparent hover:border-[#484848] transition-all"
              href=""
            >
              ХОЛБОО БАРИХ
            </a>
          </div>
          <div>
            <a
              className="text-[#484848] cursor-pointer font-bold text-[11px] border-b-[1px] border-transparent hover:border-[#484848] transition-all"
              href=""
            >
              АЖЛЫН БАЙР
            </a>
          </div>
        </div>
      </div>
      <div className="flex lg:px-12 justify-between max-sm:justify-end p-4 items-center max-sm:flex-wrap">
        <img
          className="w-[370px] max-sm:w-[100%]"
          src="https://www.must.edu.mn/static/assets/img/logo/logo-must.png"
          alt="img"
        />
        <div className="bg-[#ffc20d] max-sm:justify-end max-sm:mt-8 text-[12px] rounded-[0.3rem] font-bold p-2 hover:text-white transition-colors duration-300">
          ЧУХАЛ ХОЛБООС
        </div>
      </div>
      <div className="flex px-4">
        <div className="bg-[#f3f3f3] p-2">
          <form className="flex gap-2 flex-wrap mb-4">
            <div className="flex gap-1">
              <input
                type="radio"
                name="searchType"
                id="diploma"
                value="Дипломын дугаар"
              />
              <label htmlFor="diploma" className="text-[14px] text-[#212529]">
                Дипломын дугаар
              </label>
            </div>
            <div className="flex gap-1">
              <input
                type="radio"
                name="searchType"
                id="register"
                value="Регистрийн дугаар"
              />
              <label htmlFor="register" className="text-[14px] text-[#212529]">
                Регистрийн дугаар
              </label>
            </div>
          </form>
          <div className="">
            <input
              type="text"
              className="border-[1px] p-1 max-w-[350px] bg-white w-full border-[#ced4da]"
            />
          </div>
          {input && (
            <input
              type="text"
              className="border-[1px] p-1 max-w-[350px] bg-white w-full border-[#ced4da]"
            />
          )}

          <p className="text-[14px] text-[#212529]">
            Хэрэв таны хайсан мэдээлэл гарч ирэхгүй бол <br />
            <span className="text-[#007bff]"> энд</span> дарж шалгана уу!
          </p>

          <div className="border-1 my-4 py-[6px] px-[12px] inline-block font-bold text-[#07158f] border-[#6c757d] rounded-[.25rem]">
            Хайх
          </div>
        </div>
      </div>
    </div>
  );
}
