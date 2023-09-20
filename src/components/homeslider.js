import React, { useState, useEffect } from "react";
import homeslider1 from "../img/homeslider1.png";
import homeslider2 from "../img/homeslider2.png";

const HomeSlider = () => {
  const images = [
    {
      bgImage: homeslider1,
      text: "Empower medical product provider, to deliver particular outcome for patients, Explore what we can do together.",
      desc1: 'ผู้ให้บริการผลิตภัณฑ์ทางการแพทย์ เพื่อส่งมอบผลลัพธ์ที่ดีที่สุด',
      desc2: 'สำหรับผู้ป่วย ค้นหาสิ่งที่คุณต้องการ',

      buttonText: "ติดต่อเรา",
      buttonlink: "#",
    },
    {
      bgImage: homeslider2,
      text: "Empower medical product provider, to deliver particular outcome for patients, Explore what we can do together.",
      desc1: 'ผู้ให้บริการผลิตภัณฑ์ทางการแพทย์ เพื่อส่งมอบผลลัพธ์ที่ดีที่สุด',
      desc2: 'สำหรับผู้ป่วย ค้นหาสิ่งที่คุณต้องการ',

      buttonText: "ติดต่อเรา",
      buttonlink: "#",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Adjust the autoplay interval in milliseconds (e.g., 3000 for 3 seconds)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full">
      <div className="w-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute text-2xl  text-white ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            } transition-opacity duration-2000 ease-in-out`}
          >
            <img
              src={image.bgImage}
              alt={`Image ${index + 1}`}
              className="w-[100vw] h-[280px] object-cover"
            />
            <div className="absolute top-[12%] pl-[15%] sm:w-full">
              
              <p className="sm:w-[950px] text-4xl font-normal dDinFont">{image.text}</p>
              <p className="mt-[15px] text-[18px]"> {image.desc1}</p>
              <p className="mt-[3px] text-[18px]"> {image.desc2}</p>
              <a
                href="#"
                className="text-base font-medium text-center flex items-center justify-center  w-[115px] h-[45px] bg-white text-[#006b3d] text-uppercase rounded-[10px] mt-3"
              >
                {image.buttonText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeSlider;
