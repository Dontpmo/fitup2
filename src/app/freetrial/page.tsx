export default function Ft() {
  return (
    <section className="ft">
      <img src="images/about.png" alt="" />
      <div className="px-5 flex flex-col items-center freetrial">
        <h1 className="text-4xl mt-10">เริ่มต้นทดลองเล่นฟรี 1 วัน</h1>
        <h6 className="text-md mt-5 mb-12">
          กรอกรายละเอียดด้านล่าง เพื่อรับสิทธิ์ทดลองเล่นแบบไม่มีค่าใช้จ่าย
          และพบกับผู้ฝึกสอนส่วนตัวมืออาชีพของเราที่คลับใกล้บ้านท่าน
        </h6>

        <div className="relative text-sm">
          <form action="POST" className=" text-sm relative mx-6 text-black">
            <label htmlFor="">ชื่อและนามสกุล</label>
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
            <div className="flex items-center my-2">
                <p className="head">เข้าได้ทุกโซนในคลับ</p><div className="line"></div>
              </div>
            
              <div>
            
                <h2 className="text-4xl">คุณสามารถใช้สิทธิทดลองเล่นได้อย่างไร?</h2>
                <p>คุณสามารถจองและเข้าคลาสออกกำลังกายได้ทุกคลาส หรือจะเล่นโซนยิมออกกำลังกาย ผ่อนคลายไปด้วยสระว่ายน้ำ สระสปา ห้องสตรีม พร้อมค้นหาและสนุกไปกับคลาสออกกำลังกายออนไลน์ที่คุณชอบได้ทุกที่ทุกเวลา ทั้งหมดนี้เราให้คุณทดลองได้ฟรี และคุณสามารถใช้แบบไหนก็ได้ที่ใช่คุณ</p>
              </div>
            
          </div>
        </div>
      
    </section>
  );
}

