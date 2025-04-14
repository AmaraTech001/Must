"use client";
import { useState } from "react";

const userInfo = {
  lastName: "МӨНХЖАРГАЛ",
  firstName: "БАЯРМАГНАЙ",
  registration: "ДЮ89073073",
  school: "ШИНЖЛЭХ УХААН ТЕХНОЛОГИЙН ИХ СУРГУУЛЬ",
  major: "ИРГЭНИЙ БА ҮЙЛДВЭРИЙН БАРИЛГА",
  diplomaNumber: "D201122177",
  degree: "БАКАЛАВР",
  averageGrade: "3.47",
  graduationYear: "2011",
};
export default function page() {
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(true);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handlesub = () => {
    const cleanedValue = value.trim().toUpperCase();
    if (cleanedValue === "D201122177" || cleanedValue === "201122177") {
      setTimeout(() => {
        setModal(true);
        setModal2(false);
      }, 1000);
    } else {
      console.log("error not found");
      setTimeout(() => {
        setModal(false);
        setModal2(true);
      }, 1000);
    }
  };

  const handlepdf = () => {};

  return (
    <div className="max-w-[1220px] w-full m-auto">
      <section className="flex justify-between border-b-[1px] p-2 border-[#dee2e6]">
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
      </section>
      <section className="flex lg:px-12 justify-between max-sm:justify-end p-4 items-center max-sm:flex-wrap">
        <img
          className="w-[370px] max-sm:w-[100%]"
          src="https://www.must.edu.mn/static/assets/img/logo/logo-must.png"
          alt="img"
        />
        <div className="bg-[#ffc20d] max-sm:justify-end max-sm:mt-8 text-[12px] rounded-[0.3rem] font-bold p-2 hover:text-white transition-colors duration-300">
          ЧУХАЛ ХОЛБООС
        </div>
      </section>
      <section className="flex px-12 max-sm:justify-center gap-4 ">
        <div className="bg-[#f3f3f3] p-2 max-sm:w-full max-w-[330px]">
          <form className="flex gap-2 mt-3 flex-wrap mb-4">
            <div className="flex gap-1">
              <input
                type="radio"
                name="searchType"
                id="diploma"
                value="Дипломын дугаар"
                defaultChecked
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

          <div className="flex">
            <div className="bg-[#e9ecef] px-2 text-[#495057] flex items-center border-t border-b border-l border-[#ced4da] rounded-l-md">
              D,E,F
            </div>
            <input
              onChange={handleChange}
              type="text"
              className="border-[1px] p-1 max-w-[350px] bg-white w-full border-[#ced4da]"
            />
          </div>
          <p className="text-[14px] my-2 text-[red]">
            Дипломын дугаарыг эхний үсэггүй оруулна уу!!!
          </p>

          <p className="text-[14px] text-[#212529]">
            Хэрэв таны хайсан мэдээлэл гарч ирэхгүй бол
            <span className="text-[#007bff] cursor-pointer"> энд</span> дарж
            шалгана уу!
          </p>
          <div
            onClick={handlesub}
            className="border-1 cursor-pointer mb-4 mt-6 py-[6px] px-[12px] inline-block font-bold text-[#07158f] border-[#6c757d] rounded-[.25rem]"
          >
            Хайх
          </div>
        </div>
        {modal && (
          <div className="w-full flex flex-col">
            <table className="w-full border-collapse">
              <tbody>
                <tr>
                  <td className="border border-[#dee2e6] p-2">Овог:</td>
                  <td className="border border-[#dee2e6] p-2">ЦЭЕННЯМБУУ</td>
                </tr>
                <tr>
                  <td className="border border-[#dee2e6] p-2">Нэр:</td>
                  <td className="border border-[#dee2e6] p-2">ХАТАНБААТАР</td>
                </tr>
                <tr>
                  <td className="border border-[#dee2e6] p-2">Регистр:</td>
                  <td className="border border-[#dee2e6] p-2">ФА89081814</td>
                </tr>
                <tr>
                  <td className="border border-[#dee2e6] p-2">Сургууль:</td>
                  <td className="border border-[#dee2e6] p-2">
                    ШИНЖЛЭХ УХААН ТЕХНОЛОГИЙН ИХ СУРГУУЛЬ
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#dee2e6] p-2">Мэргэжил:</td>
                  <td className="border border-[#dee2e6] p-2">
                    ИРГЭНИЙ БА ҮЙЛДВЭРИЙН БАРИЛГА
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#dee2e6] p-2">
                    Дипломын дугаар:
                  </td>
                  <td className="border border-[#dee2e6] p-2">D201122177</td>
                </tr>
                <tr>
                  <td className="border border-[#dee2e6] p-2">Зэрэг:</td>
                  <td className="border border-[#dee2e6] p-2">БАКАЛАВР</td>
                </tr>
                <tr>
                  <td className="border border-[#dee2e6] p-2">Голч дүн:</td>
                  <td className="border border-[#dee2e6] p-2">3.0</td>
                </tr>
                <tr>
                  <td className="border border-[#dee2e6] p-2">Төгссөн он:</td>
                  <td className="border border-[#dee2e6] p-2">2011</td>
                </tr>
              </tbody>
            </table>
            <div>
              <p className="my-3">Байгууллагын нэр</p>
              <input
                placeholder="Байгууллага"
                className="border-[1px] p-1 max-w-[350px] bg-white w-full border-[#ced4da]"
                type="text"
              />
              <p className="text-[#dc3545] text-[11px] mt-2">
                Тодорхойлолт гаргаж өгөх байгууллагын нэрийг зөв алдаагүй
                оруулна уу!!!
              </p>
              <div
                onClick={handlepdf}
                className="border-1 cursor-pointer mb-1 mt-4 py-[6px] px-[12px] inline-block font-bold text-[#07158f] border-[#6c757d] rounded-[.25rem]"
              >
                Хэвлэх
              </div>
              <p className="text-[#dc3545] text-[14px]">
                Гар утаснаас хэвлэж авахдаа google chrome хөтөч ашиглана уу !!!
              </p>
            </div>
          </div>
        )}
        {modal2 && (
          <section className="w-[60%] max-sm:w-full">
            <h1 className=" text-center">ЗАРЛАЛ</h1>
            <p className="text-[#212529]">
              2002 оноос өмнөх ШУТИС, ТИС, ПДС төгссөн төгсөгч нар БШУЯ-ны Дээд
              боловсролын удирдлага мэдээллийн системд бүртгэл оруулахад дараах
              материалыг бүрдүүлнэ. Үүнд:
            </p>
            <ol className="list-decimal list-inside space-y-1 ml-6 text-[#212529]">
              <li className="text-[#212529]">
                ШУТИС-ийн дипломын хавсралтын хуулбар, тамга /Номын сангийн 208
                тоот/
              </li>
              <li className="text-[#212529]">
                Архивын ерөнхий газрын баталгаажсан төгссөн тушаал
                <span className="text-[#007bff] px-1  inline-block">
                  info@archives.gov.mn
                </span>
                хүсэлт илгээх, ажлын 5 өдөрт хариуг гаргана.
              </li>
              <li className="text-[#212529]">Иргэний үнэмлэхийн хуулбар</li>
              <li className="text-[#212529]">Дипломын хуулбар</li>
              <li className="text-[#212529]">Хувь хүний өргөдөл</li>
            </ol>
          </section>
        )}
      </section>
    </div>
  );
}
