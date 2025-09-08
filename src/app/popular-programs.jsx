"use client";
import Carousel from "./carousel"
import Plans from "./Plans";
export default function PopularPrograms() {
    return (
        <section id="programs" className="  bg-radient from-goodbrown to-transparent pt-13">

                
                <div className="text bg-lime-400 py-10 px-5  mx-3">
                
                    <div className="flex items-center">
                        <p className="text-sm">PROGRAMS</p><div className="w-5 h-[1px] bg-black"></div>
                    </div>
                    <h3 className="py-5 text-6xl font-bold">รูปแบบสมาชิกที่เหมาะสมกับคุณ</h3>
                    <p >ค้นหารูปแบบสมาชิกที่ยืดหยุ่นและเข้ากับไลฟ์สไตล์คุณ ค่าแรกเข้า 0 บาท</p>
                </div>
                <Plans/>
               
        </section>
    )
}
