"use client";
import Image from "next/image";
import PopularPrograms from "./popular-programs";
import Plans from "./Plans";
import { useEffect, useState } from "react";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons/faArrowCircleDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight,faNavicon } from "@fortawesome/free-solid-svg-icons";
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
            สมัครตอนนี้
          </button>
        </div>
      </section>

     
      <section
        id="services"
        className="our-services py-19 items-center our-services bg-radient-to-r from-lime-500 to-transparent  "
      >
        <div className="text ml-4 head-text">
          <div className="flex items-center">
            <p className="text-lick">Services</p>
            <div className="h-[1px] w-6 bg-lick"></div>
          </div>
          <h3 className="text-6xl font-bold">
            <span className="text-lick font-p">บริการ</span>ของเรา
          </h3>
          <p className="py-5 pb-15 text-md ">
          เรารู้ดีว่า ความต้องการและเป้าหมายของลูกค้านั้นแตกต่างกัน

            ไม่ว่าคุณจะตั้งเป้าอะไร เรามีทางเลือกที่เหมาะกับคุณ
          </p>
        </div>
        <div className="services flex flex-col   ">
          <article className=" bg-white flex flex-col items-center   pb-10">
            <img src="images/gym.png" alt="" />
            
              <h2 className="font-5xl mt-5">ฟิตเนส</h2>
              <p className="pt-3 text-center text-lg  ">
              พื้นที่ทั้งหมดเป็นของคุณ ออกกำลังกายบนพื้นที่กว้างขว้างที่มีอุปกรณ์อันทันสมัย และโซนที่ถูกจัดสรร เพื่อตอบสนองทุกสไตล์การออกกำลังกายในยิม
              </p>
              <div className="px-8 flex flex-col items-center">
              <div className="flex gap-2 mt-10"><a href="" className="hover:text-lick  ">ค้นหาคลับใกล้คุณ<FontAwesomeIcon icon={faArrowRight} className="pt-1"/></a></div>
            </div>
          </article>
          <article className=" bg-white flex flex-col items-center   pb-2">
            <img src="images/Yoga.png" alt="" />
            <div className="px-8 w-full">
              <h2 className="uppercase mt-5">โยคะ</h2>
              <p className="pt-3 text-center text-md  ">
              ฝึกฝนร่างกาย จิตใจ และจิตวิญญาณของคุณในสตูดิโอที่ออกแบบมาให้เหมาะกับทุกๆ คน ด้วยคลาส 3 รูปแบบ อาศัยศาตร์และความรู้จากโบราณกาลซึ่งประยุกต์ให้เข้ากับปัจจุบัน
              </p>
              <a href="" className="link ">ดูรายละเอียดคลาส</a>
            </div>
          </article>
          <div className="flex flex-col items-center justify-center bg-black text-white h-100">
            <h2 className="text-center">ทุกอย่าง<br /><span className="text-lick underline">ในราคาเดียว</span></h2>
            <div><a href="" className="link">ดูรายละเอียดเพิ่มเติม</a></div>
          </div>
          <article className=" bg-white flex flex-col items-center  pb-10">
            <img src="images/pilatis.webp" alt="" />
            <div className="px-8">
              <h2 className="uppercase mt-5">พิลาติส</h2>
              <p className="pt-3 text-center text-md  ">
              ช่วยร่างกายให้ทำงานสอดประสานเข้ากันกับอุปกรณ์ที่ออกแบบมาเพื่อเสริมสร้างรากฐานที่ดีและเป็นเลิศในการออกกำลังด้วยจังหวะที่ต่อเนื่อง ให้คุณรู้สึกดีกับความลื่นไหลของร่างกาย
              </p>
              <a href="" className="link ">ดูรายละเอียดคลาส</a>
            </div>
            
          </article>

          <article className=" bg-white flex flex-col items-center ">
            <img src="images/cycle.webp" alt="" />
            <div className="px-8">
              <h2 className="uppercase mt-5">ปั่นจักรยาน</h2>
              <p className="pt-4 text-center text-sm  ">
              ไม่ว่าคุณจะต้องการเติมพลังงานให้ตัวเองหรือต้องการมาปาร์ตี้ เรามีคลาสจักรยานที่ออกแบบมาเฉพาะคุณ
              </p>
              <a href="" className="link ">ดูรายละเอียดคลาส</a>
            </div>
          </article>
        </div>
      </section>
      <PopularPrograms />
      
      <section className="ft pb-10">
      <div className="lg:flex">
        <div className="flex justify-center"><img src="images/about.png" className="w-full h-auto" alt="" /></div>
        <div className="px-5 flex flex-col freetrial py-6">
          <div className="flex items-center pb-5">
            <p className="head">ทดลองเล่น</p><div className="line"></div>
          </div>
          <h1 className="text-4xl ">เริ่มต้นทดลองเล่นฟรี 1 วัน</h1>
          <h6 className="text-md mt-2 mb-12">
            กรอกรายละเอียดด้านล่าง เพื่อรับสิทธิ์ทดลองเล่นแบบไม่มีค่าใช้จ่าย
            และพบกับผู้ฝึกสอนส่วนตัวมืออาชีพของเราที่คลับใกล้บ้านท่าน
          </h6>
          <div className="relative text-sm ">
            <form action="POST" className=" text-sm relative  text-black form md:w-[50vw]">
              <label htmlFor="" className="font-semibold">ชื่อและนามสกุล</label>
              <input
                type="text"
                className="border-1 border-gray-300 py-2 px-2 mb-4 w-full focus:border-lick focus:outline-hidden transition-all duration-600 ease-out "
              />
              <label htmlFor="">เบอร์มือถือ</label>
              <input
                type="text"
                className="border-1 border-gray-300 px-2 py-2 mb-4 w-full focus:border-lick focus:outline-hidden transition-all duration-600 ease-out"
              />
              <label htmlFor="">อีเมล</label>
              <input
                type="text"
                className="border-1 border-gray-300 px-2 py-2 mb-4 w-full focus:border-lick focus:outline-hidden transition-all duration-600 ease-out"
              />
              <label htmlFor="">คลับใกล้ฉัน</label>
              <input
                type="text"
                className="border-1 border-gray-300 px-2 py-2 mb-4 w-full focus:border-lick focus:outline-hidden transition-all duration-600 ease-out"
              />
              <p>
                การเข้าทดลองใช้บริการฟรีสำหรับผู้ที่เข้าใช้ครั้งแรกเท่านั้น
                ซึ่งเป็นคนไทยที่มีบัตรประชาชน
                หรือชาวต่างชาติที่อาศัยอยู่ในประเทศไทยที่มีวีซ่าระยะยาว
                ในการลงทะเบียนรับสิทธิ์ทดลองเล่นนี้
                ถือว่าท่านยอมรับนโยบายข้อมูลส่วนบุคคล
                และยินยอมในการรับข้อมูลทางการตลาดของเรา
                ซึ่งท่านสามารถยกเลิกความยินยอมได้ตลอดเวลา คลิก ที่นี่
                เพื่อดูข้อเงื่อนไขและข้อกำหนดฉบับเต็ม
              </p>
              <button
                type="submit"
                className=" w-full bg-lick text-white text-bold text-xl px-8 py-4 my-5 font-kanit cursor-pointer"
              >
                ลงทะเบียน
              </button>
            </form>
          </div>
          </div>
      </div>
      </section>
      <section id="contacts" className="contacts bg-black text-white py-16">
        <img src="images/logo.png" alt="" />
        <div className="flex flex-col">
          <p className="">คลับ</p>
          <a href="location">ตำแหน่งที่ตั้ง</a>
          <a href="location">รูปแบบสมาชิก</a>
          <a href="location">คลาส</a>
          <a href="location">ตารางคลาส</a>
        </div>
        <div className="flex flex-col ">
          <p>ติดต่อเรา</p>
          <a href="location">ทดลองเล่นฟรี</a>
          <a href="location">พูดคุยกับเรา</a>
          
        </div>

      </section>
    </main>
  );
}
