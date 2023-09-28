import React from "react";
import bakeryArticleBgImg from "../img/bakeryArticleBgImg.png";

function BakeryArticle() {
  return (
    <main>
      <section
        className="min-h-[50vh] relative flex items-center coverCenter"
        style={{ background: `url('${bakeryArticleBgImg}')` }}
      >
        {/* <div className="background-overlay"></div> */}
        <div className="container mx-auto max-w-[750px] px-6 flex flex-col justify-center text-center min-h-[600px]">
          <h1 className="text-white text-shadow-lg font-Avenir text-[81px] font-bold leading-[68px] tracking-[2.43px] uppercase relative">
            bakery article
          </h1>

          <p className="text-white text-shadow-sm font-noto-sans-thai text-2xl font-normal leading-[28px] mt-14">
            เนื้อหาจำลองแบบเรียบๆ ที่ใช้กันในธุรกิจงานพิมพ์หรืองานเรียงพิมพ์
            จำลองมาตรฐานของธุรกิจดังกล่าวมาตั้งแต่ศตวรรษที่
          </p>
        </div>
      </section>
    </main>
  );
}

export default BakeryArticle;
