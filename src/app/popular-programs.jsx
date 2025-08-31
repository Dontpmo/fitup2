"use client";
import Carousel from "./carousel"
export default function PopularPrograms() {
    return (
        <section className="  bg-gradient-to-r from-lime-200 to-transparent py-13">

                
                <div className="text bg-lime-400 py-10 px-5  mx-3">
                
                    <div className="flex items-center">
                        <p className="text-sm">PROGRAMS</p><div className="w-5 h-[1px] bg-black"></div>
                    </div>
                    <h3 className="py-5 text-6xl font-bold">โปรแกรมขายดี</h3>
                    <p >สิทธิพิเศษของสมาชิกยิมเรา ชวนเพื่อนๆและครอบครัวมาออกกำลังกายเป็นหมู่ไปกับเทรนเนอร์มืออาชีพ ฟรี! ได้ถึง4คน/1สมาชิก ดูตารางเวลาได้ด้านล่างเลย</p>
                </div>
                <div className="px-3 my-13"><Carousel/></div>
        </section>
    )
}