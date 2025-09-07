"use client"
export default function Freetrial() {

    return(<>
        
    <section>
        
        <img src="images/about.png" alt="" />
        <div className="py-6 flex flex-col items-center">
            <div className="py-5">
                <h1 className="font-p text-4xl text-left">เริ่มต้นทดลองเล่นฟรี 1 วัน</h1>
                <p>กรอกรายละเอียดด้านล่าง เพื่อรับสิทธิ์ทดลองเล่นแบบไม่มีค่าใช้จ่าย</p>
            </div>
            <form action="POST" className="relative mx-6 text-black free-trial">
                <label htmlFor="">ชื่อและนามสกุล</label>
                    <input type="text" className="border-1  py-5 mb-4 w-full focus:border-lick focus:outline-hidden transition-all duration-600 ease-out " />
                <label htmlFor="">เบอร์มือถือ</label>
                    <input type="tel" placeholder="081-000-0000" className="border-1 border-white py-5 mb-4 w-full focus:border-lick focus:outline-hidden transition-all duration-600 ease-out" />
                <label htmlFor="">อีเมล</label>
                    <input type="email" placeholder="John@gmail.com" className="border-1 border-white py-5 mb-4 w-full focus:border-lick focus:outline-hidden transition-all duration-600 ease-out" />
                <label htmlFor="">เลือกสาขาใกล้คุณ</label>
                    <input type="text" placeholder="เลือกสาขา" className="border-1 border-white py-5 mb-4 w-full focus:border-lick focus:outline-hidden transition-all duration-600 ease-out" />
                    <p>การเข้าทดลองใช้บริการฟรีสำหรับผู้ที่เข้าใช้ครั้งแรกเท่านั้น ซึ่งเป็นคนไทยที่มีบัตรประชาชน หรือชาวต่างชาติที่อาศัยอยู่ในประเทศไทยที่มีวีซ่าระยะยาว ในการลงทะเบียนรับสิทธิ์ทดลองเล่นนี้ ถือว่าท่านยอมรับนโยบายข้อมูลส่วนบุคคล และยินยอมในการรับข้อมูลทางการตลาดของเรา ซึ่งท่านสามารถยกเลิกความยินยอมได้ตลอดเวลา คลิก ที่นี่ เพื่อดูข้อเงื่อนไขและข้อกำหนดฉบับเต็ม</p>
                    <button type="submit" className="bg-lick text-white text-bold text-xl px-8 py-4 my-5 font-kanit cursor-pointer">ทดลองเล่นฟรี</button>
                  </form>
        </div>
    </section>
    </>
    )
}