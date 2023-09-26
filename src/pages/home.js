import React from "react";
import { Link } from "react-router-dom";

import HomeSlider from "../components/HomeSlider";
import Slider from "../components/Slider";
import chooseYourMeal1 from "../img/choose-your-meal1.png";
import unpackYourBox1 from "../img/unpack-your-box-1.png";
import cookCreateEnjoy1 from "../img/cook-create-enjoy-1.png";
import curveBorder from "../img/curveBorder.png";
import blogImg1 from "../img/global.jpg";
import blogImg2 from "../img/ceocmw.jpg";
import blogImg3 from "../img/cmwfood.jpg";
import Delicious from "../img/Delicious.png";
import Healthy from "../img/Healthy.png";
import Homemade from "../img/Homemade.png";
import homeImg from "../img/homeImg.png";
import product1 from "../img/product1.png";
import product2 from "../img/product2.png";
import product3 from "../img/product3.png";
import product4 from "../img/product4.png";
import snackBox from "../img/snackBox.png";

const incentives = [
  {
    name: "DELICIOUS",
    imageSrc: Delicious,
    description:
      "เธคยังไงศิลปากร  พาสปอร์ตบัตเตอร์ ตัวเองแคนูศิรินทร์วานิลา ซองแฟร์ฟลุตสคริปต์ รูบิกเดบิตซูชิครัวซองแบตเจ๊ฮวงจุ้ย",
  },
  {
    name: "HEALTHY",
    imageSrc: Healthy,
    description:
      "เธคยังไงศิลปากร  พาสปอร์ตบัตเตอร์ ตัวเองแคนูศิรินทร์วานิลา ซองแฟร์ฟลุตสคริปต์ รูบิกเดบิตซูชิครัวซองแบตเจ๊ฮวงจุ้ย",
  },
  {
    name: "HOMEMADE",
    imageSrc: Homemade,
    description:
      "เธคยังไงศิลปากร  พาสปอร์ตบัตเตอร์ ตัวเองแคนูศิรินทร์วานิลา ซองแฟร์ฟลุตสคริปต์ รูบิกเดบิตซูชิครัวซองแบตเจ๊ฮวงจุ้ย",
  },
];

const products = [
  {
    id: 1,
    name: "ท๊อฟฟี่ เค้ก",
    color: "toffee Cake",
    price: "฿130",
    href: "#",
    imageSrc: product1,
  },
  {
    id: 2,
    name: "ท๊อฟฟี่ เค้ก",
    color: "toffee Cake",
    price: "฿130",
    href: "#",
    imageSrc: product2,
  },
  {
    id: 3,
    name: "ท๊อฟฟี่ เค้ก",
    color: "toffee Cake",
    price: "฿130",
    href: "#",
    imageSrc: product3,
  },
  {
    id: 4,
    name: "ท๊อฟฟี่ เค้ก",
    color: "toffee Cake",
    price: "฿130",
    href: "#",
    imageSrc: product4,
  },
  // More products...
];

// const posts = [
//   {
//     title: "CMW Foods Support บุกตลาดเนื้อสัตว์สหรัฐอเมริกา",
//     date: "February 10, 2023",
//     href: "#",
//     category: { name: "February 10, 2023", href: "#" },
//     description:
//       "คุณวิทวัส ประจันตะเสน ผู้ก่อตั้งและผู้บริหาร ได้นำแบรนด์สินค้าและผลิตภัณฑ์ที่อยู่ภายใต้การบริหารบุกตลาดเนื้อสัตว์สหรัฐอเมริกา เป็นการก้าวเข้าสู้ตลาดโลก เพื่อตอกย้ำความเป็นผู้",
//     imageUrl: blogImg1,
//   },
//   {
//     title: "CEO CMW ขนทัพเซเลบริตี้แบรนด์ดัง ออกบูธ งานครบรอบ 21 ปี คมชัดลึก",
//     date: "February 10, 2023",
//     href: "/การประชุมเชิงปฏิบัติกา",
//     category: { name: "BOOTH EXIBITION", href: "#" },
//     description:
//       "คุณวิทวัส ประจันตะเสน CEO บริษัท CMW Foods Support Co., Ltd. เจ้าของแบรนด์ Meats Me และ Gyu Gyu",
//     imageUrl: blogImg2,
//   },
//   {
//     title:
//       "บริษัท CMW foods Support ร่วมเป็นผู้สนับสนุนหลักงาน CROWN CELEBRATION BRILLIANCE & JEWELRY EXTRAVAGANZA",
//     date: "February 10, 2023",
//     href: "/กิจกรรมอื่นๆ/",
//     category: { name: "OTHER EVENT    ", href: "#" },
//     description:
//       "บริษัท CMW foods Support ร่วมเป็นผู้สนับสนุนหลักงาน CROWN CELEBRATION BRILLIANCE & JEWELRY EXTRAVAGANZAมิสแกรนด์สมุทรปราการ 2023 โดยมีคุณ",
//     imageUrl: blogImg3,
//   },
// ];

function Home() {
  return (
    <main>
      <Slider />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
          <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-[#795E32] font-Avenir text-[48px] font-bold leading-[68px] tracking-[1.44px]">
                ABOUT US
              </h2>
              <p className="mt-4 text-[#795E32] font-noto-sans-thai text-2xl font-normal leading-[28px]">
                เยลลี่ซีเรียส สุนทรีย์ซีเนียร์เรซินโปรเจกต์คัตเอาต์ ตัวตนราเม็ง
                เสกสรรค์เซฟตี้เต๊ะราเม็ง ครัวซองต์ร็อคมอบตัว
                บึมเพียวปูอัดแครกเกอร์เจล ความหมายละอ่อน
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3 place-items-center">
              {incentives.map((incentive) => (
                <div key={incentive.name} className="sm:flex lg:block">
                  <div className="sm:flex-shrink-0">
                    <img
                      className="h-auto w-[210px] mx-auto"
                      src={incentive.imageSrc}
                      alt=""
                    />
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0 text-center">
                    <h3 className="text-[#614B28] font-Avenir text-[33px] font-bold">
                      {incentive.name}
                    </h3>
                    <p className="mt-2 text-[#614B28] font-noto-sans-thai text-[18px] leading-[28px] font-normal">
                      {incentive.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section>
        <img src={homeImg} alt="" />
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-[#795E32] font-Avenir text-[48px] font-bold leading-[68px] tracking-[1.44px]">
              BEST SELLER
            </h2>
            <p className="mt-4 text-[#795E32] font-noto-sans-thai text-2xl font-normal leading-[28px]">
              เยลลี่ซีเรียส สุนทรีย์ซีเนียร์เรซินโปรเจกต์คัตเอาต์ ตัวตนราเม็ง
              เสกสรรค์เซฟตี้เต๊ะราเม็ง ครัวซองต์ร็อคมอบตัว
              บึมเพียวปูอัดแครกเกอร์เจล ความหมายละอ่อน
            </p>
          </div>

          <div className="mt-[60px] grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
                  <img
                    src={product.imageSrc}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-4 text-2xl font-noto-sans-thai text-[#795E32]">
                  <a href={product.href}>
                    <span className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <p className="mt-1 text-lg text-[#795E32] capitalize">
                  {product.color}
                </p>
                <p className="mt-1 text-2xl font-Avenir font-medium text-[#E6A141]">
                  {product.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="grid sm:grid-cols-2 min-h-[600px]">
        <div>
          <img src={snackBox} className="h-full object-cover" alt="" />
        </div>
        <div className="bg-[#293485]  xl:pl-[110px] md:pl-[80px] pl-[30px]">
          <div className="flex flex-col justify-center h-full">
            <span className="text-white font-Avenir text-[48px] font-bold leading-[68%] tracking-[1.44px] uppercase">
              SNACK BOX
            </span>
            <p className="max-w-[500px] mt-5 text-white font-noto-sans-thai text-2xl font-normal leading-[28px]">
              ซิงลีกสุนทรีย์แพนดา รีเสิร์ชอุปการคุณผู้นำแคชเชียร์
              โรแมนติคเซลส์ราเม็งสเกตช์เดโม อริยสงฆ์แครอทล เทคโนแครตเอ๋อมลภาวะ
              แจ็กพ็อต
            </p>
            <button className="w-[208px] h-[56px] mt-[20px] bg-[#E41E25] rounded-full text-2xl leading-[28px] text-white font-noto-sans-thai">
              VIEW MORE
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
