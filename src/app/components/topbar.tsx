"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPerson, faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
export default function Topbar() {
  const [toggled, setToggled] = useState(false);
  return (
    <>  
    <header
      className={` fixed top-0 left-0 z-[100] w-full flex items-center text-white
        ${"bg-black"}`}
      id="header"
    >
      <a className="cursor-pointer">
        <img className="m-4" src="/images/logo.png" alt="fitup logo" />
      </a>
      <nav>
        <ul className="ml-15 navigator hidden md:block">
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
      </nav>
      <a
        href="/freetrial"
        className=" ml-[20%] md:ml-[40%] border-white border-2 px-4 py-2 cursor-pointer hover:bg-white hover:text-black"
      >
        Free trial
      </a>
      <button onClick={() => setToggled((prev) => !prev)}>
        {toggled?<FontAwesomeIcon icon={faX}/>: <FontAwesomeIcon icon={faBars} />}
      </button>
      
    </header>
    <div className={`drawer w-full flex flex-col text-white justify-center items-center bg-black fixed h-screen z-[99] transform transition-all duration-200  ${toggled? "translate-y-0" : "-translate-y-full"}`}>
        
        <nav className={`nav-bar space-y-6 flex flex-col  text-3xl text-center`}>
          <a href="">หน้าหลัก</a>
          <a href="">รูปแบบสมาชิก</a>
          <a href="">คลาส</a>
          <a href="">ผู้ฝึกสอนส่วนตัว</a>
        </nav>
        <div className="my-10">
          <a className="border-1 border-white px-25 py-3 " href="">สมัครสมาชิก</a>
        </div>
        <div className="flex flex-col text-center ">
          <a href="">
            <FontAwesomeIcon icon={faPerson}/> เข้าสู่ระบบสมาชิก
          </a>
          <a className="pt-10" href="">ติดต่อเรา</a>
        </div>



      </div>
      </>
  );
}
