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

      <div className="font-noto-sans-thai text-base text-custom-color">
        <p className="leading-7">ทางเราคัดสรรเฉพาะเนื้อคุณภาพได้มาตรฐานจาก “ฟาร์มปลอดสารเร่งโตและสารเร่งเนื้อแดง” รวมไปถึงเนื้อที่เราจัดจำหน่ายทุกชิ้นปราศจากการฉีด ไขมัน เพื่อให้ลูกค้าทุกท่านมั่นใจได้ว่าจะได้รับเนื้อที่มี คุณภาพพร้อมจัดส่งทั่วประเทศ

</p>
      </div>
    </main>
  );
}

export default Home;
