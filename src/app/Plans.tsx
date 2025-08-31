import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import styles from "./Plans.module.css"
export default function Plans() {
    return(
    <section className="bg-radial from-goodBrown to-transparent plans">

        <div className="wrapper-of-all-three flex flex-wrap justify-between">
            <div className="bg-white flex flex-col items-center pt-12 pb-17 px-2 mx-4 mt-10 w-full  sm:w-1/2 md:w-1/3">
                <h2 className="mb-10 text-2xl font-semibold uppercase">Basic plan</h2>
                <p className='mb-2 text-sm' >เหมาะสำหรับผู้เริ่มต้น</p>
                <h3 className='mb-4 text-lg mb-5'>$ 250</h3>
                
                    <ol className='space-y-10 w-full'>
                        <li className='flex gap-2 '>
                            <FontAwesomeIcon icon={faCheck} className='text-lick w-5 h-5'/>
                            <p className='text-sm '>เข้าใช้บริการได้ 24 ชั่วโมง</p>
                        </li>
                        <li className='flex gap-2'>
                            <FontAwesomeIcon icon={faCheck} className='text-lick w-5 h-5'/>
                            <p className='text-sm'>ใช้อุปกรณ์ฟิตเนสทั้งหมด</p>
                        </li>
                        <li className='flex gap-2'>
                            <FontAwesomeIcon icon={faCheck} className='text-lick w-5 h-5'/>
                            <p className='text-sm'>ฟรี! Meal plan สำหรับคุณโดยเฉพาะ</p>
                        </li>
                        <li className='flex gap-2'>
                            <FontAwesomeIcon icon={faCheck} className='text-lick w-5 h-5'/>
                            <p className='font-archivo text-sm'>Training video</p>
                        </li>
                        <li className='flex gap-2'>
                            <FontAwesomeIcon icon={faCheck} className='text-lick w-5 h-5'/>
                            <p className='text-sm'>24/7 ซัพพอรต์</p>
                        </li>
                        <li className='flex gap-2'>
                            <FontAwesomeIcon icon={faCheck} className='text-lick w-5 h-5'/>
                            <p className='text-sm'>ใส่เพิ่ม</p>
                        </li>
                        <li className='flex gap-2'>
                            <FontAwesomeIcon icon={faCheck} className='text-lick w-5 h-5'/>
                            <p className='text-sm'>ใส่เพิ่ม</p>
                        </li>
                        
                    
                    </ol>
                
            </div>
            <div className="second shadow-[10px_10px_0_#b4d518] relative bg-black flex flex-col items-center pt-12 pb-17 px-2 mx-4 mt-10 w-full  sm:w-1/2 md:w-1/3">
           
                <h2 className="mb-10 text-2xl font-semibold uppercase"><span className='text-lick'>Regular</span> plan</h2>
                <p className='mb-2 text-sm' >สำหรับผู้ที่จริงจังกับการเปลี่ยนแปลงตัวเอง</p>
                <h3 className='mb-4 text-lg mb-5'>$ 250</h3>
                
                    <ol className='space-y-10 w-full'>
                        <li className='flex gap-2 '>
                            <FontAwesomeIcon icon={faCheck} className='text-lick w-5 h-5'/>
                            <p className='text-sm '>เข้าใช้บริการได้ 24 ชั่วโมง</p>
                        </li>
                        <li className='flex gap-2'>
                            <FontAwesomeIcon icon={faCheck} className='text-lick w-5 h-5'/>
                            <p className='text-sm'>ใช้อุปกรณ์ฟิตเนสทั้งหมด</p>
                        </li>
                        <li className='flex gap-2'>
                            <FontAwesomeIcon icon={faCheck} className='text-lick w-5 h-5'/>
                            <p className='text-sm'>ฟรี! Meal plan สำหรับคุณโดยเฉพาะ</p>
                        </li>
                        <li className='flex gap-2'>
                            <FontAwesomeIcon icon={faCheck} className='text-lick w-5 h-5'/>
                            <p className='font-archivo text-sm'>Training video</p>
                        </li>
                        <li className='flex gap-2'>
                            <FontAwesomeIcon icon={faCheck} className='text-lick w-5 h-5'/>
                            <p className='text-sm'>24/7 ซัพพอรต์</p>
                        </li>
                        <li className='flex gap-2'>
                            <FontAwesomeIcon icon={faCheck} className='text-lick w-5 h-5'/>
                            <p className='text-sm'>ใส่เพิ่ม</p>
                        </li>
                        <li className='flex gap-2'>
                            <FontAwesomeIcon icon={faCheck} className='text-lick w-5 h-5'/>
                            <p className='text-sm'>ใส่เพิ่ม</p>
                        </li>
                        
                    
                    </ol>
                
            </div>
            <div className="bg-white flex flex-col items-center pt-12 pb-17 px-2 mx-4 mt-10 w-full  sm:w-1/2 md:w-1/3">
                <h2 className="mb-10 text-2xl font-semibold uppercase">Premium plan</h2>
                <p className='mb-2 text-sm' >เหมาะกับคนที่ต้องการฟิตเต็มที่</p>
                <h3 className='mb-4 text-lg mb-5'>$ 250</h3>
                
                    <ol className='space-y-8 w-full'>
                        <li className='flex gap-2 '>
                            <FontAwesomeIcon icon={faCheck} className='text-lick w-5 h-5'/>
                            <p className='text-sm '>เข้าใช้บริการได้ 24 ชั่วโมง</p>
                        </li>
                        <li className='flex gap-2'>
                            <FontAwesomeIcon icon={faCheck} className='text-lick w-5 h-5'/>
                            <p className='text-sm'>ใช้อุปกรณ์ฟิตเนสทั้งหมด</p>
                        </li>
                        <li className='flex gap-2'>
                            <FontAwesomeIcon icon={faCheck} className='text-lick w-5 h-5'/>
                            <p className='text-sm'>ฟรี! Meal plan สำหรับคุณโดยเฉพาะ</p>
                        </li>
                        <li className='flex gap-2'>
                            <FontAwesomeIcon icon={faCheck} className='text-lick w-5 h-5'/>
                            <p className='font-archivo text-sm'>Training video</p>
                        </li>
                        <li className='flex gap-2'>
                            <FontAwesomeIcon icon={faCheck} className='text-lick w-5 h-5'/>
                            <p className='text-sm'>24/7 ซัพพอรต์</p>
                        </li>
                        <li className='flex gap-2'>
                            <FontAwesomeIcon icon={faCheck} className='text-lick w-5 h-5'/>
                            <p className='text-sm'>ใส่เพิ่ม</p>
                        </li>
                        <li className='flex gap-2'>
                            <FontAwesomeIcon icon={faCheck} className='text-lick w-5 h-5'/>
                            <p className='text-sm'>ใส่เพิ่ม</p>
                        </li>
                    
                    </ol>
                
            </div>
        </div>
    </section>)
}