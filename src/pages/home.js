import React, { useState } from "react";
import kImaging from "../img/4kImaging.png";
import kImagingHover from "../img/4kImagingHover.png";
import shoulderRestortion from "../img/shoulderRestortion.png";
import shoulderRestortionHover from "../img/shoulderRestortionHover.png";
import kneePreservation from "../img/kneePreservation.png";
import kneePreservationHover from "../img/kneePreservationHover.png";
import extremitySecurity from "../img/extremitySecurity.png";
import extremitySecurityHover from "../img/extremitySecurityHover.png";
import poweredInstruction from "../img/poweredInstruction.png";
import poweredInstructionHover from "../img/poweredInstructionHover.png";
import rightIcon from "../img/rightIcon.svg";

import HomeSlider from "../components/homeslider";

const upperBox = [
  {
    title: "Sport Medicine",
    desc: "4K Imaging System, Shoulder Restoration System, Knee Repair and Construction System และ Extremity System",
    btnText: "ดูเพิ่มเติม",
    btnLink:
      "https://www.conmed.com/en-US/Specialties-and-Techniques/Specialties/Orthopedics",
  },
  {
    title: "Powered Instruments",
    desc: "Large bone, small bone, sternal saw, high-speed drill",
    btnText: "ดูเพิ่มเติม",
    btnLink: "https://www.conmed.com/en-US/Products/Surgical-Power-Tools",
  },
  {
    title: "VWELL Products",
    desc: "Personalized Insole",
    btnText: "ดูเพิ่มเติม",
    btnLink: "https://www.vwell.care/footcare",
  },
];

const imageItems = [
  {
    key: "kImaging",
    image: kImaging,
    hoverImage: kImagingHover,
  },
  {
    key: "shoulderRestortion",
    image: shoulderRestortion,
    hoverImage: shoulderRestortionHover,
  },
  {
    key: "kneePreservation",
    image: kneePreservation,
    hoverImage: kneePreservationHover,
  },
  {
    key: "extremitySecurity",
    image: extremitySecurity,
    hoverImage: extremitySecurityHover,
  },
  {
    key: "poweredInstruction",
    image: poweredInstruction,
    hoverImage: poweredInstructionHover,
  },
];

const Home = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (key) => {
    setHoveredItem(key);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const renderImageContainers = () => {
    return imageItems.map((item) => (
      <div
        key={item.key}
        className="image-container w-1/5 h-[230px] leading-4 bg-no-repeat bg-contain"
        onMouseEnter={() => handleMouseEnter(item.key)}
        onMouseLeave={handleMouseLeave}
        style={{
          backgroundImage: `url(${
            hoveredItem === item.key ? item.hoverImage : item.image
          })`,
        }}
      ></div>
    ));
  };

  return (
    <>
      <section className="h-[280px]">
        <HomeSlider />
      </section>
      <main>
        <section className=" bg-[#E5F0EB] px-6 xl:px-0">
          <div className="max-w-[1200px] mx-auto flex flex-wrap sm:flex-nowrap flex-col sm:flex-row justify-around gap-x-3 xl:gap-x-14  py-24 gap-y-4">
            {upperBox.map((item, index) => (
              <div
                key={index}
                className="bg-[#006B3D] sm:w-1/3 p-8 sm:p-6 xl:p-8 text-white rounded-[10px] flex flex-col gap-5"
              >
                <h2 className="text-[24px] font-bold">{item.title}</h2>
                <p className="text-base font-medium">{item.desc}</p>
                <a
                  href={item.btnLink}
                  className="flex items-center font-bold text-[14px]"
                >
                  <span>
                  {item.btnText}
                  </span>
                
                  <span className="font-bold">
                    <img src={rightIcon} alt="" className="w-[10px] ml-1"/>
                  </span>
                </a>
              </div>
            ))}
          </div>
        </section>
        <section className="max-w-[1270px] mx-auto interesting-products mt-28">
          <h2 className="text-[#003190] text-[48px] font-bold text-center">
            สินค้าที่น่าสนใจ
          </h2>
          <div className="flex gap-x-5 mt-28">{renderImageContainers()}</div>
        </section>
      </main>
    </>
  );
};

export default Home;
