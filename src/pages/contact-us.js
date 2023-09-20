import React from "react";
import ContactUsBannerImg from "../img/ContactUsBannerImg.png";
import phoneWhite from "../img/phoneWhite.svg";
import mapWhite from "../img/mapWhite.svg";

const ContactUs = () => {
  return (
    <>
      <main className="bg-[#FAFBFC]">
        <section
          className="h-[300px] flex items-center mb-[50px] coverCenter"
          style={{ background: `url('${ContactUsBannerImg}')` }}
        >
          <div className="container mx-auto max-w-[1200px] px-6">
            <h1 className="text-white text-[64px] font-normal dDinFont tracking-[-3px]">
              Contact us
            </h1>
            <a
              href="tel:%20+66(0)%202718-3582-3"
              className="bg-[#006B3D] text-white w-[154px] h-[54px] flex justify-center items-center font-bold py-2 px-4 rounded-lg mt-5"
            >
              <span className="">ติดต่อเรา</span>
            </a>
            <p className="text-[18px] text-white mt-6  tracking-[-1px]">
              Get in touch or create a route to the studio over here:
            </p>
          </div>
        </section>

        <section className="h-[450px] w-full flex">
          <div
            className="relative h-0 overflow-hidden w-[60%]"
            style={{ paddingBottom: "56.25%" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.618032037246!2d100.62500877490648!3d13.741560297530912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d61d782ebffff%3A0x6cf441793064ef5f!2sMeditime%20Company%20Limited!5e0!3m2!1sen!2s!4v1695198242204!5m2!1sen!2s"
              width="600"
              height="450"
              className="w-full"
              style={{ border: "0" }}
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe>
          </div>
          <div className="w-[20%] bg-[#003190] py-[50px] px-[40px]">
            <div className="w-[38px] border-2 border-white rounded-[50px] p-2">
              <img src={phoneWhite} className="w-[28px]" alt="" />
            </div>
            <h3 className="text-white text-2xl font-bold mt-5">ติดต่อเรา</h3>
            <p className="text-white text-[19px] leading-[36px] font-medium">
              โทร : <span className="text-white">02-718-3582-3</span> <br />
              โทรสาร : <span className="text-white">02-718-3584</span>
              <br />
              เวลาทำการ : วันจันทร์ – วันศุกร์
              <br />( 8 am to 5 pm )
            </p>
          </div>

          <div className="w-[20%] bg-[#006B3D] py-[50px] px-[40px]">
            <div className="w-[38px] border-2 border-white rounded-[50px] p-2">
              <img src={mapWhite} className="w-[28px]" alt="" />
            </div>
            <h3 className="text-white text-2xl font-bold mt-5">ที่อยู่</h3>
            <p className="text-white text-[19px] leading-[36px] font-medium">
            Meditime Company Limited<br />
      999/99 ถนนพระรามที่ 9 <br />
      แขวงสวนหลวง เขตสวนหลวง <br />
      กรุงเทพมหานคร 10250
            </p>
          </div>
        </section>

        <section className="container mx-auto max-w-[1000px] px-6 contact-us-form-sec mt-[80px]">
          <form action="#" method="POST">
            <div className="flex flex-col gap-y-5">
              <div className="flex items-center">
                <label
                  htmlFor="first-name"
                  className="block w-[200px] font-bold text-md"
                >
                  First Name *
                </label>
                <div className="mt-1 w-full">
                  <input
                    required
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="first-name"
                    className="form-input"
                  />
                </div>
              </div>
              <div className="flex items-center">
                <label
                  htmlFor="last-name"
                  className="block w-[200px] font-bold text-md"
                >
                  Last Name *
                </label>
                <div className="mt-1 w-full">
                  <input
                    required
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="last-name"
                    className="form-input"
                  />
                </div>
              </div>
              <div className="flex items-center">
                <label
                  htmlFor="email"
                  className="block w-[200px] font-bold text-md"
                >
                  Email *
                </label>
                <div className="mt-1 w-full">
                  <input
                    required
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="form-input"
                  />
                </div>
              </div>
              <div className="flex items-center">
                <label
                  htmlFor="phone"
                  className="block w-[200px] font-bold text-md"
                >
                  Phone *
                </label>
                <div className="mt-1 w-full">
                  <input
                    required
                    type="tel"
                    name="phone"
                    id="phone"
                    autoComplete="phone"
                    className="form-input"
                  />
                </div>
              </div>
              <div className="flex items-center">
                <label
                  htmlFor="company"
                  className="block w-[200px] font-bold text-md"
                >
                  Company
                </label>
                <div className="mt-1 w-full">
                  <input
                    type="text"
                    name="company"
                    id="company"
                    autoComplete="company"
                    className="form-input"
                  />
                </div>
              </div>
              <div className="flex items-center">
                <label
                  htmlFor="address"
                  className="block w-[200px] font-bold text-md"
                >
                  Address
                </label>
                <div className="mt-1 w-full">
                  <input
                    type="text"
                    name="address"
                    id="address"
                    autoComplete="address"
                    className="form-input"
                  />
                </div>
              </div>
              <div className="flex items-center">
                <label
                  htmlFor="city"
                  className="block w-[200px] font-bold text-md"
                >
                  City
                </label>
                <div className="mt-1 w-full">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="city"
                    className="form-input"
                  />
                </div>
              </div>
              <div className="flex items-center">
                <label
                  htmlFor="state"
                  className="block w-[200px] font-bold text-md"
                >
                  State
                </label>
                <div className="mt-1 w-full">
                  <input
                    type="text"
                    name="state"
                    id="state"
                    autoComplete="state"
                    className="form-input"
                  />
                </div>
              </div>
              <div className="flex items-center">
                <label
                  htmlFor="zip"
                  className="block w-[200px] font-bold text-md"
                >
                  Zip
                </label>
                <div className="mt-1 w-full">
                  <input
                    type="text"
                    name="zip"
                    id="zip"
                    autoComplete="zip"
                    className="form-input"
                  />
                </div>
              </div>
              <div className="flex items-center">
                <label
                  htmlFor="enduser"
                  className="block w-[200px] font-bold text-md"
                >
                  End User of Product
                </label>
                <div className="mt-1 w-full">
                  <input
                    type="text"
                    name="enduser"
                    id="enduser"
                    autoComplete="enduser"
                    className="form-input"
                  />
                </div>
              </div>

              <div className="flex items-center">
                <label
                  htmlFor="message"
                  className="block w-[200px] font-bold text-md"
                >
                  Message
                </label>
                <div className="mt-1 w-full">
                  <textarea
                    name="message"
                    id="message"
                    className="form-textarea"
                  />
                </div>
              </div>
              <div className="flex items-center">
                <label
                  htmlFor="enduser"
                  className="block w-[200px] font-bold text-md"
                ></label>
                <div className="mt-1 w-full">
                  <button
                    type="submit"
                    class=" bg-[#D73A32] py-3 px-16 text-[18px] leading-[27px] font-bold text-white"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </form>
        </section>

        <section className="container mx-auto max-w-[1280px] px-6 mb-[50px] mt-20">
          <h2 className="mt-2 text-3xl font-bold sm:text-5xl text-[#D73A32] mb-[50px] text-center">
            CHAISERI METAL AND RUBBER CO.,LTD
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-[30px]">
            <div className="text-center">
              <div className="h-[100px]">
                <img alt="" className="mx-auto mb-5" />
              </div>
              <h2 className="text-3xl font-semibold mb-2 text-[#d73a32]">
                ADDRESS
              </h2>
              <p className="text-[#262626]">
                59 moo 6, Pathum-Banglen road, Kubangluang, <br />
                Lardlumkaew, Pathumthani, 12140, Thailand
              </p>
            </div>
            <div className="text-center">
              <div className="h-[100px]">
                <img alt="" className="mx-auto mb-5" />
              </div>
              <h2 className="text-3xl font-semibold mb-2 text-[#d73a32]">
                EMAIL
              </h2>
              <p className="text-[#262626]">Info@chaiseri-defense.com</p>
            </div>
            <div className="text-center">
              <div className="h-[100px]">
                <img alt="" className="mx-auto mb-5" />
              </div>
              <h2 className="text-3xl font-semibold mb-2 text-[#d73a32]">
                TEL
              </h2>
              <p className="text-[#262626]">
                Tel: +66(0)2 581-4981 <br />
                Fax: +66(0)2 581-4981
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContactUs;
