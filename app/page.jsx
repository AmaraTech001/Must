import React from "react";

export default function page() {
  return (
    <div className="">
      <div className="flex justify-between border-b-[1px] p-2 border-[#dee2e6]">
        <div className="flex gap-2 px-12">
          <div>
            <a
              className="text-[#484848] hover:underline-[1px] cursor-pointer font-bold text-[11px]"
              href=""
            >
              МЭДЭЭ
            </a>
          </div>
          <div>
            <a
              className="text-[#484848] cursor-pointer font-bold text-[11px]"
              href=""
            >
              ЗАРЛАЛ
            </a>
          </div>
          <div>
            <a
              className="text-[#484848] cursor-pointer font-bold text-[11px]"
              href=""
            >
              SCIENCE FM 94.1
            </a>
          </div>
        </div>
        <div className="flex gap-2">
          <div>
            <a
              className="text-[#484848] cursor-pointer font-bold text-[11px]"
              href=""
            >
              ЭЛСЭГЧ
            </a>
          </div>
          <div>
            <a
              className="text-[#484848] cursor-pointer font-bold text-[11px]"
              href=""
            >
              ХОЛБОО БАРИХ
            </a>
          </div>
          <div>
            <a
              className="text-[#484848] cursor-pointer font-bold text-[11px]"
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
    </div>
  );
}
