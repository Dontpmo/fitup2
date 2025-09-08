
export default function Ft() {
  return (
    <>
  
    <section className="ft">
      <img src="images/about.png" alt="" />
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
          <form action="POST" className=" text-sm relative  text-black form">
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

        <div className="mt-10">
       
          <img src="/images/howft.png" alt="" />
          <div className="px-5">
            <div className="flex items-center my-5">
                <p className="head">เข้าได้ทุกโซนในคลับ</p><div className="line"></div>
              </div>
            
              <div>
            
                <h2 className="text-4xl">คุณสามารถใช้สิทธิทดลองเล่นได้อย่างไร?</h2>
                <p>คุณสามารถจองและเข้าคลาสออกกำลังกายได้ทุกคลาส หรือจะเล่นโซนยิมออกกำลังกาย ผ่อนคลายไปด้วยสระว่ายน้ำ สระสปา ห้องสตรีม พร้อมค้นหาและสนุกไปกับคลาสออกกำลังกายออนไลน์ที่คุณชอบได้ทุกที่ทุกเวลา ทั้งหมดนี้เราให้คุณทดลองได้ฟรี และคุณสามารถใช้แบบไหนก็ได้ที่ใช่คุณ</p>
              </div>
            
          </div>
        </div>
        <div className="mt-10">
       
       <img src="/images/ft-img2.png" alt="" />
       <div className="px-5">
         <div className="flex items-center my-5">
             <p className="head">ไม่ผูกมัดใดๆ</p><div className="line"></div>
           </div>
         
           <div>
         
             <h2 className="text-4xl">ไม่มีข้อผูกมัด</h2>
             <p className="mb-10">พูดคุยกับพนักงานของเราแบบสบายๆ เพราะเราอยากช่วยให้คุณเข้าใจตัวเลือกรูปแบบสมาชิกที่เหมาะกับคุณ. ไม่ว่าจะมีคำถาม? หรือ บอกข่าวเล่าเรื่อง, เราพร้อมเสมอสำหรับคำตอบ. แชตหาเราได้เลย</p>
           </div>
           <a href="contact-us" className="font-bold mt-12">พูดคุยกับเรา</a>
         
       </div>
     </div>
     <div className="mt-10">
       
       <img src="/images/ft-img3.png" alt="" />
       <div className="px-5">
         <div className="flex items-center my-5">
             <p className="head">พาทัวร์และสัมผัสบรรยากาศสุดพรีเมี่ยม</p><div className="line"></div>
           </div>
         
           <div>
         
             <h2 className="text-4xl">พาคุณเดินให้ทั่วคลับ</h2>
             <p className="mb-10">เราอยากจะชวนคุณดูสตูดิโอออกกำลังกาย โซนออกกำลังกายส่วนตัว อุปกรณ์ที่ทันสมัยของเรา</p>
           </div>
         
       </div>
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
  </>
  );
}

