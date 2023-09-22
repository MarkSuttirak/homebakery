import React from "react";
import blogImg1 from "../img/blogImg1.png";
import blogImg2 from "../img/blogImg2.jpeg";
import blogImg3 from "../img/blogImg3.jpg";
import blogFeatureimg from "../img/blogFeatureimg.png";
import blogDetalImg from "../img/blogDetalImg.jpg";
import rightIcon from "../img/rightIcon.svg";

const posts = [
  {
    title: "กิจกรรมอื่นๆ",
    date: "4 พ.ย.",
    href: "/กิจกรรมอื่นๆ/",
    category: { name: "OTHER EVENT    ", href: "#" },
    description:
      "ทางบริษัทเมดิไทม์ ยินดีเป็นส่วนหนึ่งในการมีส่วนร่วมเพื่อทำให้สังคมไทยดีขึ้นกิจกรรมล่าสุดทางบริษัทเมด…",
    imageUrl: blogImg3,
  },

  {
    title: "การประชุมเชิงปฏิบัติการ",
    date: "21 ธ.ค.",
    href: "/การประชุมเชิงปฏิบัติกา",
    category: { name: "BOOTH EXIBITION", href: "#" },
    description:
      "งานประชุมวิชาการประจำปี 2563 ราชวิทยาลัยแพทย์ออร์โธปิดิกส์แห่งประเทศไทย(RCOST2563)",
    imageUrl: blogImg2,
  },
  {
    title:
      "การประชุมเชิงปฏิบัติการบริษัทมีการจัดงานประชุมเชิงปฏิบัติการอยู่เสมอ",
    date: "22 ธ.ค.",
    href: "/การประชุมเชิงปฏิบัติกา-2/",
    category: { name: "WORKSHOP", href: "#" },
    description:
      "บริษัทเมดิไทม์ให้ความสนับสนุนการถ่ายทอดองค์ความรู้การผ่าตัดด้านกระดูก และข้อโดยการจับมือแลกเปลี่ยนอง…",
    imageUrl: blogImg1,
  },
];

function BlogDetail() {
  return (
    <main>
      <section>
        <img src={blogFeatureimg} alt="" />
      </section>
      <section className="mt-14 mx-7">
        <div className="max-w-[1270px] mx-auto">
          <h1 className="text-[#3a8717] text-[48px] font-semibold blog-title">
            กิจกรรมอื่นๆ
          </h1>
          <p className="text-[#9b9b9b] text-[18px] font-bold published-date mt-2">
              พฤศจิกายน 4, 2021
            </p>
          <div className="blog-data mt-6">
            
            <p className="text-[#3a4f66] text-2xl leading-10">
              ทางบริษัทเมดิไทม์
              ยินดีเป็นส่วนหนึ่งในการมีส่วนร่วมเพื่อทำให้สังคมไทยดีขึ้นกิจกรรมล่าสุดทางบริษัทเมดิไทม์นำโดยคณะผู้บริหารร่วมบริจาคให้โรงพยาบาลนพรัตนราชธานี
              จำนวน100,000บาทเพื่อสมทบทุนการรักษาพยาบาลผู้ป่วยโควิด19
            </p>
            <p className="text-[#3a4f66] text-2xl leading-10 mt-8">
            บริษัทเมดิไทม์ให้ความสำคัญกับกิจกรรมเพื่อสังคมเพื่อส่งเสริมให้พนักงานได้ทำกิจกรรมร่วมกัน
            </p>
            <p className="text-[#3a4f66] text-2xl leading-10">
            พร้อมๆกับให้พนักงานทุกคน ตระหนักถึงคุณค่าที่เราต้องมอบกลับคืนสู่สังคม
            </p>
            <img src={blogDetalImg} alt="" className="mt-9"/>

            <iframe
          className="w-full h-[200px] sm:h-[400px] xl:h-[700px] mt-7"
          src="https://www.youtube.com/embed/MHlIPdNvtaw?si=eVFISWVc-OLfMgUo"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
          </div>
        </div>
      </section>
      <section className="my-[120px] mx-7">
        <div className="max-w-[1270px] mx-auto">
          <h2 className="text-[#3a8717] text-[48px] font-semibold">ข่าวสารที่เกี่ยวข้อง</h2>
          <div className="mx-auto mt-12 grid max-w-3xl gap-8 lg:max-w-none sm:grid-cols-3">
            {posts.map((post) => (
              <div
                key={post.title}
                className="flex flex-col overflow-hidden rounded-lg"
              >
                <div className=" h-[270px]">
                  <img
                    className="h-full w-full object-cover rounded-[10px]"
                    src={post.imageUrl}
                    alt=""
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between mt-5">
                  <div className="flex-1">
                    <p className="text-[18px] font-medium text-[#2a3d53]">
                      <a href={post.category.href}>{post.category.name}</a>
                    </p>

                    <p className="text-[24px] leading-[30px] font-bold text-[#3a8717] mt-[10px]">
                      <a href={post.href}>{post.title}</a>
                    </p>
                    <a href={post.href} className="mt-2 block">
                      <p className="mt-3 text-[18px] font-medium text-black">
                        {post.description}
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default BlogDetail;
