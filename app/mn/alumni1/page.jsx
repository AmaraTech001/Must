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
    <div>
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
        <section className="flex lg:px-12 justify-between max-sm:justify-end p-4 py-8 items-center max-sm:flex-wrap">
          <img
            className="w-[370px] max-sm:w-[100%]"
            src="https://www.must.edu.mn/static/assets/img/logo/logo-must.png"
            alt="img"
          />
          <div className="bg-[#ffc20d] max-sm:justify-end max-sm:mt-8 text-[12px] rounded-[0.3rem] font-bold p-2 hover:text-white transition-colors duration-300">
            ЧУХАЛ ХОЛБООС
          </div>
        </section>
        <section className="flex lg:px-12 pb-5 justify-between text-[#07158f]">
          <a className="text-[12px] font-bold">БИДНИЙ ТУХАЙ</a>
          <a className="text-[12px] font-bold">ЗАСАГЛАЛ</a>
          <a className="text-[12px] font-bold">СУРГАЛТ</a>
          <a className="text-[12px] font-bold">ЭРДЭМ ШИНЖИЛГЭЭ, ИННОВАЦИ</a>
          <a className="text-[12px] font-bold">ОЮУТАН</a>
          <a className="text-[12px] font-bold">ХАМТЫН АЖИЛЛАГАА</a>
          <a className="text-[12px] font-bold">САНХҮҮ, ХӨРӨНГӨ ОРУУЛАЛТ</a>
        </section>
        <section className="flex lg:px-12 px-4 max-md:justify-center max-md:flex-col gap-4 ">
          <div className="bg-[#f3f3f3] p-2 max-sm:w-full max-w-[600px]">
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
                <label
                  htmlFor="register"
                  className="text-[14px] text-[#212529]"
                >
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
          <div>
            {modal && (
              <div className="w-full flex flex-col max-md:mb-6">
                <table className="w-full border-collapse">
                  <tbody>
                    <tr>
                      <td className="border border-[#dee2e6] p-2">Овог:</td>
                      <td className="border border-[#dee2e6] p-2">
                        ЦЭЕННЯМБУУ
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-[#dee2e6] p-2">Нэр:</td>
                      <td className="border border-[#dee2e6] p-2">
                        ХАТАНБААТАР
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-[#dee2e6] p-2">Регистр:</td>
                      <td className="border border-[#dee2e6] p-2">
                        ФА89081814
                      </td>
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
                      <td className="border border-[#dee2e6] p-2">
                        D201122177
                      </td>
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
                      <td className="border border-[#dee2e6] p-2">
                        Төгссөн он:
                      </td>
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
                    Гар утаснаас хэвлэж авахдаа google chrome хөтөч ашиглана уу
                    !!!
                  </p>
                </div>
              </div>
            )}
          </div>
          {modal2 && (
            <div className="w-[60%] max-md:hidden">
              <h1 className=" text-center">ЗАРЛАЛ</h1>
              <p className="text-[#212529]">
                2002 оноос өмнөх ШУТИС, ТИС, ПДС төгссөн төгсөгч нар БШУЯ-ны
                Дээд боловсролын удирдлага мэдээллийн системд бүртгэл оруулахад
                дараах материалыг бүрдүүлнэ. Үүнд:
              </p>
              <ol className="list-decimal list-inside space-y-1 ml-6 text-[#212529]">
                <li className="text-[#212529]">
                  ШУТИС-ийн дипломын хавсралтын хуулбар, тамга /Номын сангийн
                  208 тоот/
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
            </div>
          )}
        </section>
      </div>
      <section className="bg-[#07158f] mt-6">
        <div className="max-w-[1220px] w-full m-auto">
          <div className="flex mx-12 py-8 justify-between gap-6 max-sm:flex-wrap">
            <div className="">
              <h1 className="text-white text-[17px] py-6 font-bold">
                БҮРЭЛДЭХҮҮН СУРГУУЛЬ
              </h1>
              <ul className="ml-4 list-disc text-white">
                <li>
                  <a className="text-[#ffffff8e] text-[11px] hover:text-white hover:underline">
                    Барилга, архитектурын сургууль
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-[#ffffff8e] text-[11px] hover:text-white hover:underline"
                  >
                    Нийгэм, хүмүүнлэгийн сургууль
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-[#ffffff8e] text-[11px] hover:text-white hover:underline"
                  >
                    Хүнс, хөнгөн үйлдвэрлэл, дизайны сургууль
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-[#ffffff8e] text-[11px] hover:text-white hover:underline"
                  >
                    Геологи, уул уурхайн сургууль
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-[#ffffff8e] text-[11px] hover:text-white hover:underline"
                  >
                    Мэдээлэл, холбооны технологийн сургууль
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-[#ffffff8e] text-[11px] hover:text-white hover:underline"
                  >
                    Эрчим хүчний инженерчлэлийн сургууль
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-[#ffffff8e] text-[11px] hover:text-white hover:underline"
                  >
                    Механик инженер, тээврийн сургууль
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-[#ffffff8e] text-[11px] hover:text-white hover:underline"
                  >
                    Хэрэглээний шинжлэх ухааны сургууль
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-[#ffffff8e] text-[11px] hover:text-white hover:underline"
                  >
                    Дархан-Уул аймаг дахь технологийн сургууль
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-[#ffffff8e] text-[11px] hover:text-white hover:underline"
                  >
                    "Эрдэнэт цогцолбор" дээд сургууль
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-[#ffffff8e] text-[11px] hover:text-white hover:underline"
                  >
                    Гадаад хэлний сургууль
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-[#ffffff8e] text-[11px] hover:text-white hover:underline"
                  >
                    Өмнөговь аймаг дахь технологийн дээд сургууль
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-[#ffffff8e] text-[11px] hover:text-white hover:underline"
                  >
                    ШУТИС-ийн харьяа Ерөнхий боловсролын ахлах сургууль
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-[#ffffff8e] text-[11px] hover:text-white hover:underline"
                  >
                    Менежментийн сургууль
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-[#ffffff8e] text-[11px] hover:text-white hover:underline"
                  >
                    ШУТИС-Коосэн технологийн коллеж
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-[#ffffff8e] text-[11px] hover:text-white hover:underline"
                  >
                    Ахисан түвшний сургууль
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="flex flex-col">
                <h2 className="font-bold text-[12px] py-6 text-white">
                  Бидний тухай
                </h2>
                <a
                  className="text-[#ffffff8e] text-[11px] hover:text-white hover:underline"
                  href=""
                >
                  Мэндчилгээ
                </a>
                <a
                  className="text-[#ffffff8e] text-[11px] hover:text-white hover:underline"
                  href=""
                >
                  Эрхэм зорилго
                </a>
                <a
                  className="text-[#ffffff8e] text-[11px] hover:text-white hover:underline"
                  href=""
                >
                  Түүхэн замнал
                </a>
              </div>
              <div className="flex flex-col">
                <h2 className="font-bold text-[12px] py-6 text-white">
                  ЗАСАГЛАЛ
                </h2>
                <a
                  className="text-[#ffffff8e] text-[11px] hover:text-white hover:underline"
                  href=""
                >
                  Дvрэм, журам
                </a>
                <a
                  className="text-[#ffffff8e] text-[11px] hover:text-white hover:underline"
                  href=""
                >
                  Зөвлөлүүд
                </a>
                <a
                  className="text-[#ffffff8e] text-[11px] hover:text-white hover:underline"
                  href=""
                >
                  ҮЙЛ АЖИЛЛАГААНЫ ТАЙЛАН
                </a>
                <a
                  className="text-[#ffffff8e] text-[11px] hover:text-white hover:underline"
                  href=""
                >
                  Чанарын менежмент
                </a>
                <a
                  className="text-[#ffffff8e] text-[11px] hover:text-white hover:underline"
                  href=""
                >
                  Бүтэц
                </a>
              </div>
              <div className="flex flex-col">
                <h2 className="font-bold text-[12px] py-6 text-white">
                  Сургалт
                </h2>
                <a
                  className="text-[#ffffff8e] text-[11px] hover:text-white hover:underline"
                  href=""
                >
                  Сургалтын нэгдсэн хуанли
                </a>
                <a
                  className="text-[#ffffff8e] text-[11px] hover:text-white hover:underline"
                  href=""
                >
                  Хөтөлбөрийн хороо
                </a>
                <a
                  className="text-[#ffffff8e] text-[11px] hover:text-white hover:underline"
                  href=""
                >
                  Хөтөлбөрийн магадлан итгэмжлэл
                </a>
                <a
                  className="text-[#ffffff8e] text-[11px] hover:text-white hover:underline"
                  href=""
                >
                  Цахим сургалт
                </a>
                <a
                  className="text-[#ffffff8e] text-[11px] hover:text-white hover:underline"
                  href=""
                >
                  Сургалтын хөтөлбөр
                </a>
                <a
                  className="text-[#ffffff8e] text-[11px] hover:text-white hover:underline"
                  href=""
                >
                  ХАМТАРСАН ХӨТӨЛБӨР
                </a>
              </div>
            </div>
            <div>
              <div className="flex flex-col">
                <h2 className="font-bold text-[12px] py-6 text-white">
                  ЭРДЭМ ШИНЖИЛГЭЭ, ИННОВАЦИ
                </h2>
                <a
                  className="text-[#ffffff8e] text-[11px] hover:text-white hover:underline"
                  href=""
                >
                  эрдэм шинжилгээний хуанли
                </a>
                <a
                  className="text-[#ffffff8e] text-[11px] hover:text-white hover:underline"
                  href=""
                >
                  ШУТИС-ИЙН МУЗЕЙ
                </a>
                <a
                  className="text-[#ffffff8e] text-[11px] hover:text-white hover:underline"
                  href=""
                >
                  Эрдэм шинжилгээний хүрээлэнгүүд
                </a>
                <a
                  className="text-[#ffffff8e] text-[11px] hover:text-white hover:underline"
                  href=""
                >
                  ЭРДЭМ ШИНЖИЛГЭЭНИЙ ВЭБ
                </a>
              </div>
              <div className="flex flex-col">
                <h2 className="font-bold text-[12px] py-6 text-white">
                  Оюутан
                </h2>
                <a
                  className="text-[#ffffff8e] text-[11px] hover:text-white hover:underline"
                  href=""
                >
                  Танилцуулга
                </a>
                <a
                  className="text-[#ffffff8e] text-[11px] hover:text-white hover:underline"
                  href=""
                >
                  Оюутны хөгжил, төлөвшилд чиглэсэн үйл ажиллагаа
                </a>
                <a
                  className="text-[#ffffff8e] text-[11px] hover:text-white hover:underline"
                  href=""
                >
                  Нэгдсэн арга хэмжээ
                </a>
                <a
                  className="text-[#ffffff8e] text-[11px] hover:text-white hover:underline"
                  href=""
                >
                  Хурлын танхим, бусад
                </a>
                <a
                  className="text-[#ffffff8e] text-[11px] hover:text-white hover:underline"
                  href=""
                >
                  Хөдөлмөр эрхлэлт, нийгмийн үйлчилгээ
                </a>
                <a
                  className="text-[#ffffff8e] text-[11px] hover:text-white hover:underline"
                  href=""
                >
                  Оюутны дуу, бүжгийн "ШУТИС-ийн залуус" чуулга
                </a>
                <a
                  className="text-[#ffffff8e] text-[11px] hover:text-white hover:underline"
                  href=""
                >
                  Оюутны үйлчилгээний нэгдсэн хуанли
                </a>
                <a
                  className="text-[#ffffff8e] text-[11px] hover:text-white hover:underline"
                  href=""
                >
                  Оюутны гарын авлага
                </a>
              </div>
            </div>
            <div>
              <div className="flex flex-col">
                <h2 className="font-bold text-[12px] py-6 text-white">
                  ХАМТЫН АЖИЛЛАГАА
                </h2>
                <a
                  className="text-[#ffffff8e] text-[11px] hover:text-white hover:underline"
                  href=""
                >
                  Зочин профессор, гадаад багш, мэргэжилтэн
                </a>
                <a
                  className="text-[#ffffff8e] text-[11px] hover:text-white hover:underline"
                  href=""
                >
                  Гадаад оюутан
                </a>
                <a
                  className="text-[#ffffff8e] text-[11px] hover:text-white hover:underline"
                  href=""
                >
                  Олон улсын хөтөлбөр, төслүүд
                </a>
                <a
                  className="text-[#ffffff8e] text-[11px] hover:text-white hover:underline"
                  href=""
                >
                  Багш, оюутнуудад зориулсан мэдээлэл
                </a>
                <a
                  className="text-[#ffffff8e] text-[11px] hover:text-white hover:underline"
                  href=""
                >
                  Гадаад харилцаа
                </a>
              </div>
              <div className="flex flex-col">
                <h2 className="font-bold text-[12px] py-6 text-white">
                  САНХҮҮ, ХӨРӨНГӨ ОРУУЛАЛТ
                </h2>
                <a
                  className="text-[#ffffff8e] text-[11px] hover:text-white hover:underline"
                  href=""
                >
                  Нэг кредитийн үнэлгээ
                </a>
                <a
                  className="text-[#ffffff8e] text-[11px] hover:text-white hover:underline"
                  href=""
                >
                  САНХҮҮ БҮРТГЭЛ
                </a>
                <a
                  className="text-[#ffffff8e] text-[11px] hover:text-white hover:underline"
                  href=""
                >
                  Санхүүгийн тайлан шинжилгээ
                </a>
                <a
                  className="text-[#ffffff8e] text-[11px] hover:text-white hover:underline"
                  href=""
                >
                  Санхүүгийн аудитын тайлан
                </a>
                <a
                  className="text-[#ffffff8e] text-[11px] hover:text-white hover:underline"
                  href=""
                >
                  ШИЛЭН ДАНСНЫ МЭДЭЭЛЭЛ
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#ffc20d]">
        <div className="max-w-[1220px] w-full m-auto flex max-md:flex-wrap">
          <div className="flex mx-12 py-8 max-w-[290px] justify-between gap-6  text-[#07158f]">
            <div>
              <h2 className="text-[16px] font-bold">МАНАЙ ХАЯГ</h2>
              <p className="text-[13px]">
                Шинжлэх Ухаан Технологийн Их Сургууль 8-р хороо, Бага тойруу,
                Сүхбаатар дүүрэг Улаанбаатар, Монгол улс 14191
              </p>
              <p className="text-[13px]">Ш/х : 46/520</p>
              <p className="text-[13px]">Утас : (976)-11-324590</p>
            </div>
          </div>
          <div className="flex mx-12 py-8 justify-between gap-6  text-[#07158f]">
            <div>
              <h2 className="text-[16px] font-bold">
                МАНАЙ СҮЛЖЭЭНД НЭГДЭЭРЭЙ
              </h2>
              <h2 className="text-[16px] font-bold">
                МЭДЭЭ ХҮЛЭЭН АВАХ И-МЭЙЛ:
              </h2>
              <p className="text-[13px]">news@must.edu.mn</p>
            </div>
          </div>
          <div className="flex mx-12 py-8 flex-col gap-6  text-[#07158f]">
            <div className="flex gap-4 items-center">
              <img
                className="w-[60px] h-[62px]"
                src="https://www.must.edu.mn/static/assets/img/logo/suld.png"
                alt=""
              />
              <h2 className="text-[16px] font-bold">
                МАНАЙ СҮЛЖЭЭНД НЭГДЭЭРЭЙ
              </h2>
            </div>
            <div className="flex gap-4 items-center">
              <img
                className="w-[60px] h-[62px]"
                src="https://www.must.edu.mn/static/assets/img/logo/atg_1.png"
                alt=""
              />
              <div className="flex flex-col">
                <h2 className="text-[16px] font-bold">
                  АВИЛГАТАЙ ТЭМЦЭХ ГАЗАР
                </h2>
                <p>ШУДАРГА НИЙГМИЙН ТӨЛӨӨ ХАМТДАА</p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <img
                className="w-[60px] h-[62px]"
                src="https://www.must.edu.mn/static/assets/img/logo/atg_1.png"
                alt=""
              />
              <div className="flex flex-col">
                <h2 className="text-[16px] font-bold">
                  ХӨРӨНГӨ, ОРЛОГЫН МЭДҮҮЛЭГ
                </h2>
                <p>ХУВИЙН АШИГ СОНИРХОЛЫН МЭДҮҮЛЭГ</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#07158f]">
        <div className="max-w-[1220px] pt-5 pb-7 w-full m-auto flex justify-center text-white">
          <p className="px-3">
            © 2005-2025 Монгол Улсын Шинжлэх Ухаан Технологийн Их Сургууль,
            Мэдээллийн технологийн төв
          </p>
        </div>
      </section>
    </div>
  );
}
