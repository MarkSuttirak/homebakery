import React from "react";
import { Link } from "react-router-dom";

import HomeSlider from "../components/HomeSlider";
import chooseYourMeal1 from "../img/choose-your-meal1.png";
import unpackYourBox1 from "../img/unpack-your-box-1.png";
import cookCreateEnjoy1 from "../img/cook-create-enjoy-1.png";
import curveBorder from "../img/curveBorder.png";
import blogImg1 from "../img/global.jpg";
import blogImg2 from "../img/ceocmw.jpg";
import blogImg3 from "../img/cmwfood.jpg";

const posts = [
  {
    title: "CMW Foods Support บุกตลาดเนื้อสัตว์สหรัฐอเมริกา",
    date: "February 10, 2023",
    href: "#",
    category: { name: "February 10, 2023", href: "#" },
    description:
      "คุณวิทวัส ประจันตะเสน ผู้ก่อตั้งและผู้บริหาร ได้นำแบรนด์สินค้าและผลิตภัณฑ์ที่อยู่ภายใต้การบริหารบุกตลาดเนื้อสัตว์สหรัฐอเมริกา เป็นการก้าวเข้าสู้ตลาดโลก เพื่อตอกย้ำความเป็นผู้",
    imageUrl: blogImg1,
  },
  {
    title: "CEO CMW ขนทัพเซเลบริตี้แบรนด์ดัง ออกบูธ งานครบรอบ 21 ปี คมชัดลึก",
    date: "February 10, 2023",
    href: "/การประชุมเชิงปฏิบัติกา",
    category: { name: "BOOTH EXIBITION", href: "#" },
    description:
      "คุณวิทวัส ประจันตะเสน CEO บริษัท CMW Foods Support Co., Ltd. เจ้าของแบรนด์ Meats Me และ Gyu Gyu",
    imageUrl: blogImg2,
  },
  {
    title:
      "บริษัท CMW foods Support ร่วมเป็นผู้สนับสนุนหลักงาน CROWN CELEBRATION BRILLIANCE & JEWELRY EXTRAVAGANZA",
    date: "February 10, 2023",
    href: "/กิจกรรมอื่นๆ/",
    category: { name: "OTHER EVENT    ", href: "#" },
    description:
      "บริษัท CMW foods Support ร่วมเป็นผู้สนับสนุนหลักงาน CROWN CELEBRATION BRILLIANCE & JEWELRY EXTRAVAGANZAมิสแกรนด์สมุทรปราการ 2023 โดยมีคุณ",
    imageUrl: blogImg3,
  },
];

function Home() {
  return (
    <main>
      <HomeSlider />
      <section className="mt-[180px]">
        <div className="max-w-[1070px] mx-auto flex justify-center items-center">
          <div className="w-1/2">
            <img src={chooseYourMeal1} className="rounded-[10px]" alt="" />
          </div>
          <div className="w-1/2 pl-[50px]">
            <h3 className="text-[#ff7f30] text-[36px] leading-[40px] font-bold DMSans">
              CHOOSE YOUR MEALS
            </h3>
            <p className="text-[16px] leading-[20px] mt-[20px] IBMPlex ">
              ท่านสามารถเลือกวัตถุดิบได้ด้วย ตัวของท่านเอง เลือกเลยอย่ารอช้า{" "}
              <br /> ทางเรามีสินค้ามากมายในท่านเลือกสรรอย่างไม่ขาดมือ
            </p>
          </div>
        </div>
      </section>

      <section className="mt-[80px]">
        <div className="max-w-[1070px] mx-auto flex justify-center items-center">
          <div className="w-1/2 ">
            <h3 className="text-[#ff7f30] text-[36px] leading-[40px] font-bold DMSans">
              UNPACK YOUR BOX
            </h3>
            <p className="text-[16px] leading-[20px] mt-[20px] IBMPlex ">
              ท่านไม่ต้องกังวลเรื่องการขนส่ง เรามีบริการขนส่งระดับมืออาชีพ{" "}
              <br />{" "}
              และมีการแพ็คใส่กล่องอย่างแน่นหนาไม่ต้องกังวลว่าสินค้าของท่าน{" "}
              <br />
              จะเกิดความเสียหายในการขนส่ง
            </p>
          </div>
          <div className="w-1/2">
            <img
              src={unpackYourBox1}
              className="ml-auto rounded-[10px]"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="mt-[80px] mb-[180px]">
        <div className="max-w-[1070px] mx-auto flex justify-center items-center">
          <div className="w-1/2">
            <img
              src={cookCreateEnjoy1}
              className="mr-0 rounded-[10px]"
              alt=""
            />
          </div>
          <div className="w-1/2 pl-[50px]">
            <h3 className="text-[#ff7f30] text-[36px] leading-[40px] font-bold DMSans">
              COOK, CREATE, ENJOY
            </h3>
            <p className="text-[16px] leading-[20px] mt-[20px] IBMPlex ">
              ท่านสามารถสร้างสรรค์เมนูเมนูของท่านเอง ได้ง่ายๆ โดยวัตถุดิบของเรา{" "}
              <br /> สนุกสนานไปกับการสร้างเมนูใหม่ๆ ที่ท่านอยากทานได้เลย
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[black] py-[130px]">
        <div className="text-center">
          <h2 className="text-white text-[38px] bobbyJones text-center">
            HOW TO ORDER
          </h2>
          <img src={curveBorder} className="mx-auto" alt="" />
        </div>

        <div class="grid xl:grid-cols-3 gap-4 max-w-[1250px] mx-auto -mt-[50px]">
          <div class="p-4  flex flex-col justify-center items-center mt-[150px]">
            <div className="qodef-e-icon w-[140px] h-[140px] flex justify-center items-center rounded-full transform scale-100 opacity-100 text-opacity-0 bg-white">
              <span className="qodef-e-item-icon-text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <path
                    d="M13.728 34.4393L17.9544 33.2297L43.4015 7.67969C43.6023 7.47561 43.714 7.20139 43.7127 6.91625C43.7113 6.63111 43.597 6.35793 43.3943 6.15574L41.8703 4.62702C41.7719 4.52663 41.6542 4.4467 41.5243 4.3919C41.3943 4.3371 41.2546 4.30854 41.1134 4.30787C40.9722 4.30721 40.8323 4.33446 40.7019 4.38803C40.5714 4.4416 40.453 4.52041 40.3535 4.61988L14.9736 30.1032L13.7256 34.4369L13.728 34.4393ZM44.8871 1.59817L46.4111 3.12927C48.5135 5.24137 48.5327 8.64882 46.4495 10.7395L20.2272 37.0705L11.1936 39.6517C10.6421 39.8048 10.0518 39.7347 9.55237 39.4565C9.05294 39.1784 8.6851 38.7151 8.52959 38.1682C8.41386 37.775 8.4122 37.3574 8.52479 36.9633L11.1528 27.8196L37.3055 1.55769C37.8028 1.06088 38.3949 0.667281 39.0471 0.399853C39.6993 0.132425 40.3987 -0.00347868 41.1044 6.76559e-05C41.8101 0.00361399 42.508 0.14654 43.1575 0.420509C43.807 0.694478 44.3949 1.09401 44.8871 1.59579V1.59817ZM17.2416 4.34366C18.432 4.34366 19.3968 5.3128 19.3968 6.50815C19.3987 6.79072 19.3444 7.07089 19.2371 7.33264C19.1298 7.59439 18.9715 7.83258 18.7714 8.0336C18.5712 8.23463 18.3331 8.39454 18.0706 8.50419C17.8081 8.61384 17.5264 8.67108 17.2416 8.67263H8.62079C6.23999 8.67263 4.31039 10.6109 4.31039 12.9992V38.9683C4.31039 41.359 6.23999 43.2973 8.62079 43.2973H34.4831C36.8639 43.2973 38.7959 41.359 38.7959 38.9683V30.3127C38.7959 29.1174 39.7607 28.1482 40.9511 28.1482C42.1415 28.1482 43.1063 29.1174 43.1063 30.3151V38.9683C43.1063 43.7497 39.2447 47.6262 34.4831 47.6262H8.62079C3.85919 47.6262 0 43.7497 0 38.9683V12.9992C0 8.22021 3.85919 4.34366 8.62079 4.34366H17.2416Z"
                    fill="#FF7F30"
                  ></path>
                </svg>
              </span>
            </div>
            <h5 className="text-[#FF7F30] text-[24px] text-2xl mt-5 bobbyJones">
              1.REGISTER{" "}
            </h5>
          </div>
          <div class="p-4  flex flex-col justify-center items-center">
            <div className="qodef-e-icon w-[140px] h-[140px] flex justify-center items-center rounded-full transform scale-100 opacity-100 text-opacity-0 bg-white">
              <span className="qodef-e-item-icon-text">
                <svg
                  fill="#FF7F30"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15.71 12.71a6 6 0 1 0-7.42 0 10 10 0 0 0-6.22 8.18 1 1 0 0 0 2 .22 8 8 0 0 1 15.9 0 1 1 0 0 0 1 .89h.11a1 1 0 0 0 .88-1.1 10 10 0 0 0-6.25-8.19ZM12 12a4 4 0 1 1 4-4 4 4 0 0 1-4 4Z" />
                </svg>
              </span>
            </div>
            <h5 className="text-[#FF7F30] text-[24px] text-2xl mt-5 bobbyJones">
              2.PERSONAL INFO
            </h5>
          </div>
          <div class="p-4  flex flex-col justify-center items-center mt-[150px]">
            <div className="qodef-e-icon w-[140px] h-[140px] flex justify-center items-center rounded-full transform scale-100 opacity-100 text-opacity-0 bg-white">
              <span className="qodef-e-item-icon-text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="57"
                  height="57"
                  viewBox="0 0 57 57"
                  fill="#FF7F30"
                >
                  <path d="M28.5 42.42L31.35 36.76V22.22C36.25 20.96 39.9 16.57 39.9 11.31C39.9 5.07 34.79 0 28.5 0C22.21 0 17.1 5.07 17.1 11.31C17.1 16.57 20.74 20.96 25.65 22.22V36.76L28.5 42.42ZM22.8 11.31C22.8 8.19 25.36 5.66 28.5 5.66C31.64 5.66 34.2 8.19 34.2 11.31C34.2 14.43 31.64 16.97 28.5 16.97C25.36 16.97 22.8 14.43 22.8 11.31Z"></path>
                  <path d="M40.66 24.21L39.14 29.67C46.53 31.69 51.3 35.58 51.3 39.59C51.3 44.94 41.94 50.9 28.5 50.9C15.06 50.9 5.7 44.94 5.7 39.59C5.7 35.58 10.47 31.69 17.86 29.66L16.34 24.21C6.26 26.98 0 32.87 0 39.59C0 49.1 12.52 56.56 28.5 56.56C44.48 56.56 57 49.1 57 39.59C57 32.87 50.74 26.98 40.66 24.21Z"></path>
                </svg>
              </span>
            </div>
            <h5 className="text-[#FF7F30] text-[24px] text-2xl mt-5 bobbyJones">
              3.CONTACT
            </h5>
          </div>
        </div>
        <div class="grid xl:grid-cols-2 gap-4 max-w-[850px] mx-auto mt-[50px]">
          <div class="p-4  flex flex-col justify-center items-center">
            <div className="qodef-e-icon w-[140px] h-[140px] flex justify-center items-center rounded-full transform scale-100 opacity-100 text-opacity-0 bg-white">
              <span className="qodef-e-item-icon-text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="49"
                  height="58"
                  viewBox="0 0 49 58"
                  fill="#FF7F30"
                >
                  <path d="M48.9089 16.6209C48.8925 16.5451 48.8925 16.4667 48.9089 16.3909C48.8949 16.3246 48.8949 16.256 48.9089 16.1897V15.9309L48.7364 15.4997C48.6663 15.382 48.5791 15.2754 48.4776 15.1834L48.2189 14.9534H48.0751L36.7476 7.79467L26.0526 1.18217C25.8052 0.985892 25.522 0.839441 25.2189 0.750919H24.9889C24.7319 0.708027 24.4696 0.708027 24.2126 0.750919H23.9251C23.5912 0.824784 23.271 0.950921 22.9764 1.12467L1.5001 14.4934L1.24135 14.6947L0.982604 14.9247L0.695104 15.1259L0.551355 15.2984L0.378854 15.7297V15.9884V16.1609C0.350929 16.3516 0.350929 16.5453 0.378854 16.7359V41.8347C0.377876 42.3233 0.501433 42.804 0.737859 43.2316C0.974285 43.6592 1.31578 44.0195 1.7301 44.2784L23.2926 57.6184L23.7239 57.7909H23.9539C24.4403 57.9452 24.9625 57.9452 25.4489 57.7909H25.6789L26.1101 57.6184L47.5001 44.4797C47.9144 44.2207 48.2559 43.8604 48.4924 43.4329C48.7288 43.0053 48.8523 42.5245 48.8514 42.0359V16.9372C48.8514 16.9372 48.9089 16.7359 48.9089 16.6209ZM24.5001 6.98967L29.6176 10.1522L13.5464 20.0997L8.40011 16.9372L24.5001 6.98967ZM21.6251 50.1147L5.8126 40.4547V22.0834L21.6251 31.8584V50.1147ZM24.5001 26.7984L19.0089 23.4922L35.0801 13.5159L40.6001 16.9372L24.5001 26.7984ZM43.1876 40.3684L27.3751 50.2009V31.8584L43.1876 22.0834V40.3684Z" />
                </svg>
              </span>
            </div>
            <h5 className="text-[#FF7F30] text-[24px] text-2xl mt-5 bobbyJones">
              4.PACKAGE MODEL{" "}
            </h5>
          </div>
          <div class="p-4  flex flex-col justify-center items-center">
            <div className="qodef-e-icon w-[140px] h-[140px] flex justify-center items-center rounded-full transform scale-100 opacity-100 text-opacity-0 bg-white">
              <span className="qodef-e-item-icon-text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="65"
                  height="50"
                  viewBox="0 0 65 50"
                  fill="#FF7F30"
                >
                  <path d="M0.5325 6.25043V6.25C0.5325 3.07248 3.15331 0.5 6.5 0.5H58.5C61.85 0.5 64.5 3.07569 64.5 6.25V43.75C64.5 46.9243 61.85 49.5 58.5 49.5H6.5C3.14998 49.5 0.5 46.9243 0.5 43.75L0.5325 6.25043ZM6.5 24.5H6V25V40.625C6 42.6382 7.70502 44.25 9.75 44.25H55.25C57.295 44.25 59 42.6382 59 40.625V25V24.5H58.5H6.5ZM58.5 13H59V12.5V9.375C59 7.36181 57.295 5.75 55.25 5.75H9.75C7.70502 5.75 6 7.36181 6 9.375V12.5V13H6.5H58.5Z" />
                </svg>
              </span>
            </div>
            <h5 className="text-[#FF7F30] text-[24px] text-2xl mt-5 bobbyJones">
              5.PAYMENT
            </h5>
          </div>
        </div>
      </section>

      <section className="bg-[black] py-[130px]">
        <div className="text-center">
          <h2 className="text-white text-[49px] bobbyJones text-center">
          BLOG
          </h2>
          <img src={curveBorder} className="mx-auto w-[100px] h-[14px] object-cover" alt="" />
        </div>
        <div className="relative  px-6 pt-6 lg:px-8 lg:pt-0">
         
          <div className="relative mx-auto max-w-7xl">
            
            <div className="mx-auto mt-12 grid max-w-3xl gap-5 lg:max-w-none sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <div
                  key={post.title}
                  className="flex flex-col overflow-hidden rounded-lg bg-white"
                >
                  <div className=" h-[270px] relative">
                    <img
                      className="h-full w-full object-cover"
                      src={post.imageUrl}
                      alt=""
                    />
                    
                  </div>
                  <div className="flex flex-1 flex-col justify-between mt-5  py-[30px] px-[30px] pt-0">
                    <div className="flex-1">
                        <h3 className="text-[#ff7f30] text-[18px] leading-[27px] font-bold IBMPlex">{post.title}</h3>
                      <p className="text-[14px] leading-[18px]  text-[#535353] DMSans mt-1">
                        
                          {post.date}
                        
                      </p>
                      <Link href={post.href} className="mt-2 block">
                        <p className="mt-3 text-sm NotoSansThai text-black">
                          {post.description}
                        </p>
                      </Link>

                      <Link
                        href={post.href}
                        className="flex items-center font-bold text-sm text-[#ff7f30] DMSans mt-3"
                      >
                        <span>Read More</span>

                        <span className="font-bold">
                          <span class="font-bold">
                          <svg width="10" height="10" className="ml-2" viewBox="-5 0 25 25" xmlns="http://www.w3.org/2000/svg"><path d="m3.454.57 10.848 10.424.09.08c.363.35.576.813.608 1.364l-.002.185c-.03.49-.243.954-.664 1.354l.005-.008L3.454 24.431a2.061 2.061 0 0 1-2.845 0 1.964 1.964 0 0 1 0-2.844l9.403-9.03L.609 3.413a1.964 1.964 0 0 1 0-2.844 2.061 2.061 0 0 1 2.845 0Z" fill="#FF7F30"/></svg>
                          </span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
