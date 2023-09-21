import React from 'react'
import blogImg1 from "../img/blogImg1.png";
import blogImg2 from "../img/blogImg2.jpeg";
import blogImg3 from "../img/blogImg3.jpg";
import rightIcon from "../img/rightIcon.svg";


const posts = [
  {
    date: "22 ธ.ค.",
    href: "/การประชุมเชิงปฏิบัติกา-2/",
    category: { name: "WORKSHOP", href: "#" },
    description:
      "บริษัทเมดิไทม์ให้ความสนับสนุนการถ่ายทอดองค์ความรู้การผ่าตัดด้านกระดูก และข้อโดยการจับมือแลกเปลี่ยนอง…",
    imageUrl: blogImg1,
  },
  {
    date: "21 ธ.ค.",
    href: "/การประชุมเชิงปฏิบัติกา",
    category: { name: "BOOTH EXIBITION", href: "#" },
    description:
      "งานประชุมวิชาการประจำปี 2563 ราชวิทยาลัยแพทย์ออร์โธปิดิกส์แห่งประเทศไทย(RCOST2563)",
    imageUrl: blogImg2,
  },
  {
    date: "4 พ.ย.",
    href: "/กิจกรรมอื่นๆ/",
    category: { name: "OTHER EVENT    ", href: "#" },
    description:
      "ทางบริษัทเมดิไทม์ ยินดีเป็นส่วนหนึ่งในการมีส่วนร่วมเพื่อทำให้สังคมไทยดีขึ้นกิจกรรมล่าสุดทางบริษัทเมด…",
    imageUrl: blogImg3,
  },
];

function BlogDetail() {
  return (
    <main>
      <section>
        <div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
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
                          <a
                            href={post.category.href}
                            className="hover:underline"
                          >
                            {post.category.name}
                          </a>
                        </p>
                        <a href={post.href} className="mt-2 block">
                          <p className="mt-3 text-[18px] font-medium text-black">
                            {post.description}
                          </p>
                        </a>

                        <a
                          href={post.href}
                          className="flex items-center font-bold text-[16px] text-[#3A8717] mt-3"
                        >
                          <span>อ่านต่อ</span>

                          <span className="font-bold">
                            <img
                              src={rightIcon}
                              alt=""
                              className="w-[10px] ml-1"
                            />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
        </div>
      </section>
    </main>
  )
}

export default BlogDetail