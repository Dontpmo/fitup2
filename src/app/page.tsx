"use client";
import Image from "next/image";
import PopularPrograms from "./popular-programs";
import Plans from "./Plans";
import { useEffect, useState } from "react";
export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScrolled = () => {
      setScrolled(window.scrollY > 50);
    };
    addEventListener("scroll", handleScrolled);
    return () => removeEventListener("scroll", handleScrolled);
  }, []);

  return (
    <main className="h-[4000px]">
      {/* Header */}
      <header
        className={` fixed z-[99] w-full flex items-center text-white
        ${scrolled ? "bg-black" : "bg-transparent"}`}
        id="header"
      >
        <a href="/">
          <img className="m-4" src="/images/logo.png" alt="fitup logo" />
        </a>
        <nav>
          <ul className="ml-20 navigator hidden md:block">
            <li>
              <a href="#home">HOME</a>
            </li>
            <li>
              <a href="#aboutUs">ABOUT US</a>
            </li>
            <li>
              <a href="#services">SERVICES</a>
            </li>
            <li>
              <a href="#programs">PROGRAMS</a>
            </li>
            <li>
              <a href="#plans">PRICING</a>
            </li>
            <li>
              <a href="#contacts">CONTACTS</a>
            </li>
          </ul>
          <a
            className="border-1 border-white px-4 py-2 bg-black"
            href="/freetrial"
          >
            ทดลองเล่นฟรี
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="animate-slideInUp relative header-content bg-[url('/images/bg-header.png')] h-[800px] flex items-center bg-cover"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-bact to-transparent"></div>
        <div className="relative flex flex-col text py-30 justify-center pl-5">
          <div className="flex items-center ">
            <span className="text-lick font-medium mr-4 font-p">
              PERSONAL TRAINER
            </span>
            <div className="w-12 h-1 border-t-2 border-green-500"></div>
          </div>
          <h1 className="text-white text-6xl uppercase leading-20 font-bold font-a md:text-8xl leading-none">
            Strong body, confident <span className="text-lick">spirit!</span>
          </h1>
          <button
            onClick={() =>
              document
                .getElementById("form")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-lick font-p p-4 w-50 hover:bg-black hover:text-lick transition-all duration-300 cursor-pointer mt-13"
          >
            ลงทะเบียนเลย
          </button>
        </div>
      </section>

      {/* About Us Section */}
      <section
        id="aboutUs"
        className="bg-gradient-to-r from-goodBrown to-transparent pt-[100px] pb-[100px]"
      >
        <div className="container-of-all flex px-3 flex-col lg:flex-row items-center justify-center">
          <div className="text md:w-[70vw]">
            <div className="flex items-center">
              <p className="text-lick uppercase">about us</p>
              <div className="h-[0.5px] w-12 border-t-2 border-lick"></div>
            </div>
            <h3 className="font-p font-bold text-6xl uppercase mb-8">
              ออกกำลังกายด้วยรอยยิ้มและ{" "}
              <span className="text-lick">ความสนุก</span>
            </h3>
            <div className="description">
              <p className="pb-7 font-normal leading-6">
                ที่ยิมของเรา
                คุณจะได้สัมผัสกับการออกกำลังกายที่ไม่ใช่แค่การเคลื่อนไหวร่างกาย
                แต่เป็นประสบการณ์ที่เต็มไปด้วยความสนุกสนานและรอยยิ้ม
                เราเข้าใจดีว่าการออกกำลังกายบางครั้งอาจทำให้หลายคนรู้สึกเหนื่อยหรือท้อ
                แต่ที่นี่ ทุกครั้งที่คุณยกน้ำหนัก โยคะ หรือเต้นแอโรบิค
                คุณจะมีเทรนเนอร์คอยให้กำลังใจอย่างใกล้ชิด
                ทำให้คุณรู้สึกอยากกลับมาฝึกซ้อมอีกครั้ง
              </p>
              <p className="font-normal leading-6">
                เรามีโปรแกรมออกกำลังกายหลากหลายที่เหมาะกับทุกความต้องการ
              </p>
            </div>

            {/* Progress Bars */}
            <div className="progressbar-wrapper py-8">
              {[
                { label: "ยกน้ำหนัก", percent: 95 },
                { label: "แอโรบิค", percent: 70 },
                { label: "โยคะ", percent: 80 },
              ].map(({ label, percent }, i) => (
                <div key={i} className="single-progressbar py-3">
                  <div className="flex justify-between">
                    <h3 className="uppercase font-bold">{label}</h3>
                    <span>{percent}%</span>
                  </div>
                  <div className="w-full bg-gray-500 h-1">
                    <div
                      className={`h-full bg-lick`}
                      style={{ width: `${percent}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* About Image */}
          <div className="mx-10 mx-3 w-full lg:w-[40%] flex justify-center">
            <img
              src="/images/about.png"
              alt="middle-aged women holding a protein shake"
              className=" shadow-[14px_-14px_0px_#b4d518]"
            />
          </div>
          =
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="Why-choose-us relative bg-[url('/images/bg-dark.png')] bg-fixed">
        <div className="absolute bg-gradient-to-r from-[rgba(107,118,86,0.3)] to-[rgba(107,118,86,0.5)] w-full h-full"></div>
        <div className="relative flex flex-col items-center pt-[80px] px-2 z-10">
          <div className="flex items-center gap-2">
            <p className="uppercase text-lick font-medium">
              ทำไมต้องเลือกยิมเรา
            </p>
            <div className="h-[1px] w-10 bg-lick"></div>
          </div>
          <h3 className="text-center font-bold uppercase text-white text-5xl my-2">
            เทรนเนอร์คุณที่เชื่อใจได้
          </h3>
          <p className="text-white py-10 text-center">
            เราเชื่อว่าการออกกำลังกายที่ดี ต้องมาพร้อมกับการดูแลที่ใส่ใจ
            และนี่คือสิ่งที่เทรนเนอร์ของเราทำอย่างเต็มที่
            ทุกคนผ่านการฝึกอบรมและมีประสบการณ์สูง
            สามารถแนะนำวิธีการออกกำลังกายที่ถูกต้องและปลอดภัย
            พร้อมให้คำแนะนำด้านโภชนาการ และปรับโปรแกรมตามเป้าหมายของคุณ
          </p>
        </div>

        {/* Numbers Grid */}
        <div className="what relative numbers w-screen bg-lick px-3 py-7 grid grid-rows-2 grid-cols-2 px-10 gap-5">
          <div className="flex flex-col gap-3 justify-center items-center text-center  ">
            <p className="font-normal text-xl text-center">ประสบการณ์กว่า</p>
            <h2 className="text-5xl">
              12+ <span className="text-sm">ปี</span>
            </h2>
          </div>
          <div className="flex flex-col gap-3 justify-center items-center border-l-1 border-black text-">
            <p className="text-xl text-center">มีลูกค้าประจำกว่า </p>
            <h2 className="text-5xl">
              50+ <span className="text-sm">คน</span>
            </h2>
          </div>
          <div className="flex flex-col gap-3 justify-center items-center text-center  ">
            <p className="font-normal text-xl text-center">
              เทรนเนอร์มีใบรับรองกว่า
            </p>
            <h2 className="text-5xl">
              14 <span className="text-sm">ใบ</span>
            </h2>
          </div>
          <div className="flex flex-col gap-3 justify-center items-center border-l-1 border-black">
            <p className="text-xl text-center">มีสถานที่ตั้งกว่า </p>
            <h2 className="text-5xl">
              12 <span className="text-sm">จุด</span>
            </h2>
          </div>
        </div>
      </section>
      <section
        id="services"
        className="our-services py-19 items-center our-services bg-radial from-goodBrown to-transparent ]"
      >
        <div className="text ml-4">
          <div className="flex items-center">
            <p className="text-lick">Services</p>
            <div className="h-[1px] w-6 bg-lick"></div>
          </div>
          <h3 className="text-6xl font-bold">
            <span className="text-lick font-p">บริการ</span>ของเรา
          </h3>
          <p className="py-5 pb-15 text-md ">
            เรารู้ดีว่า ความต้องการและเป้าหมายของลูกค้านั้นแตกต่างกัน
            แต่ยิมของเรามี โปรแกรมออกกำลังกายที่ครอบคลุมทุกความต้องการ
            ไม่ว่าคุณจะตั้งเป้าอะไร เรามีทางเลือกที่เหมาะกับคุณ
          </p>
        </div>
        <div className="services grid grid-rows-3 grid-cols-1 gap-3 px-2">
          <article className="px-8 py-11 bg-white flex flex-col items-center ">
            <img src="images/service-1.png" alt="" />
            <h2 className="uppercase mt-5">ยกเวท</h2>
            <p className="pt-4 text-center text-sm  ">
              เพิ่มความแข็งแรงของกล้ามเนื้อ และปรับรูปร่างให้ฟิตขึ้น
            </p>
          </article>
          <article className="px-8 py-11 bg-white flex flex-col items-center ">
            <img src="images/service-5.png" alt="" />
            <h2 className="uppercase mt-5">ต่อยมวย</h2>
            <p className="pt-4 text-center text-sm  ">
              ออกกำลังกายแบบคาร์ดิโอสูง สนุกและลดความเครียด
            </p>
          </article>
          <article className="px-8 py-11 bg-white flex flex-col items-center ">
            <img src="images/service-4.png" alt="" />
            <h2 className="uppercase mt-5">โยคะ</h2>
            <p className="pt-4 text-center text-sm  ">
              ปรับสมดุลร่างกายและจิตใจ ให้รู้สึกผ่อนคลาย
            </p>
          </article>

          <article className="px-8 py-11 bg-white flex flex-col items-center ">
            <img src="images/service-6.png" alt="" />
            <h2 className="uppercase mt-5">แอโรบิค</h2>
            <p className="pt-4 text-center text-sm  ">
              เบิร์นไขมัน เพิ่มความกระฉับกระเฉง และสนุกไปกับดนตรี
            </p>
          </article>
        </div>
      </section>
      <PopularPrograms />
      <Plans />
      <section
        id="form"
        className="bookings  py-10 bg-[url('/images/bg-dark.png')] relative bg-center bg-cover bg-fixed"
      >
        <div className="bg-gradient-to-r from-tik to-lightTik absolute inset-0"></div>
        <div className="relative flex justify-center flex-col items-center ">
          <div className="pb-3 text-lick flex items-center mt-15">
            <p>BOOKING</p> <div className="h-[1px] w-4 bg-lick"></div>
          </div>
          <h2 className="text-white text-4xl    ">
            BOOK FOR <span className="text-lick">TRAINING</span>
          </h2>
        </div>

        <div className="relative ">
          <form action="POST" className="relative mx-6 text-white">
            <input
              type="text"
              placeholder="ชื่อ"
              className="border-b-1 border-white py-5 mb-4 w-full focus:border-lick focus:outline-hidden transition-all duration-600 ease-out "
            />
            <input
              type="text"
              placeholder="นามสกุล"
              className="border-b-1 border-white py-5 mb-4 w-full focus:border-lick focus:outline-hidden transition-all duration-600 ease-out"
            />
            <input
              type="text"
              placeholder="เบอร์โทร"
              className="border-b-1 border-white py-5 mb-4 w-full focus:border-lick focus:outline-hidden transition-all duration-600 ease-out"
            />
            <input
              type="text"
              placeholder="Email"
              className="border-b-1 border-white py-5 mb-4 w-full focus:border-lick focus:outline-hidden transition-all duration-600 ease-out"
            />
            <button
              type="submit"
              className="bg-lick text-white text-bold text-xl px-8 py-4 my-5 font-kanit cursor-pointer"
            >
              ลงทะเบียน
            </button>
          </form>
        </div>
      </section>
      <section id="contacts" className="contacts bg-black text-white py-16">
        <div className="flex items-center">
          <span className="text-lick">ติดต่อเรา</span>
          <div className="w-10 h-[1px] bg-lick"></div>
        </div>
        <h2 className="text-5xl my-15  mt-4">CONTACTS</h2>
        <div className="info flex flex-col items-center  mx-5 justify-between flex-wrap gap-10">
          <div>
            <h3 className="text-2xl">ตำแหน่งที่อยู่</h3>
            <p>หมู่ที่ 7 235 Bang Phra, Si Racha District, Chon Buri 20110</p>
          </div>
          <div>
            <h3 className="text-2xl">เวลาทำการ</h3>
            <p>Monday - Friday 8AM - 6PM</p>
            <p>Saturday - Sunday 9AM - 5PM</p>
          </div>
          <div>
            <h3 className="text-2xl">เบอร์ติดต่อ</h3>
            <p>012-345-6789</p>
            <p>081-999-9999</p>
          </div>
          <div>
            <h3 className="text-2xl">อีเมล</h3>
            <p>company@gmail.com</p>
          </div>
        </div>
      </section>
    </main>
  );
}
