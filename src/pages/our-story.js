import React from 'react'
import Delicious from "../img/Delicious.png";
import Healthy from "../img/Healthy.png";
import Homemade from "../img/Homemade.png";

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

function OurStory() {
  return (
    <main>
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
    </main>
  )
}

export default OurStory