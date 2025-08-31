"use client";
import { SwiperSlide } from "swiper/react";
import { Swiper } from "swiper/react";
import { Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination'
export default function Carousel() {
    return (
    <Swiper 
modules={[Pagination]}
pagination={{clickable:true}}
spaceBetween={20}
slidesPerView={1}

>
<SwiperSlide>
    <div className="card bg-white relative pb-6">
                        <img className="" src="images/programs-1.png" alt="" />
                        <div>
                            <h2 className="uppercase py-3 text-4xl uppercase">Weight training</h2>
                            <ul className="text-xs">
                                <li className="border-b-lick border-b-1 flex justify-between mb-2">
                                    <span>วันจันทร์</span><span>10:00AM-12:00PM</span>
                                </li>
                                <li className="border-b-lick border-b-1 flex justify-between">
                                    <span>วันอังคาร</span><span>10:00AM-12:00PM</span>
                                </li>
                            </ul>
                        </div>
                    </div>
</SwiperSlide>
<SwiperSlide>
    <div className="card bg-white relative pb-6">
                        <img className="" src="images/programs-2.png" alt="" />
                        <div className="px-2">
                            <h2 className="uppercas py-3 text-sm uppercase">Aerobics</h2>
                            <ul className="text-xs">
                                <li className="border-b-lick border-b-1 flex justify-between mb-2">
                                    <span>วันจันทร์</span><span>10:00AM-12:00PM</span>
                                </li>
                                <li className="border-b-lick border-b-1 flex justify-between">
                                    <span>วันอังคาร</span><span>10:00AM-12:00PM</span>
                                </li>
                            </ul>
                        </div>
                    </div>
</SwiperSlide>
<SwiperSlide>
    <div className="card bg-white relative pb-6">
                        <img className="" src="images/programs-3.png" alt="" />
                        <div className="px-2">
                            <h2 className="uppercas py-3 text-sm uppercase">Aerobics</h2>
                            <ul className="text-xs">
                                <li className="border-b-lick border-b-1 flex justify-between mb-2">
                                    <span>วันอังคาร</span><span>10:00AM-12:00PM</span>
                                </li>
                                <li className="border-b-lick border-b-1 flex justify-between">
                                    <span>วันศุกร์</span><span>10:00AM-12:00PM</span>
                                </li>
                            </ul>
                        </div>
                    </div>
</SwiperSlide>
</Swiper>)
}