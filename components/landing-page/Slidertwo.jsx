import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import Image from "next/image";
import { staff } from "../common/Helper";
import { LineIcons } from "../common/Icons";

export default function Slidertwo() {
  return (
    <div className="bg-[#F2F2F2] pt-[30px] pb-[110px]">
      <h1 className="text-[#22343D] text-center font-poppins text-[30px] font-bold leading-[38px] uppercase">
        Meet Our <span className="text-[#FF725E]">Team</span>
      </h1>
      <div className="mx-auto w-fit mb-[20px]">
        <LineIcons />
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={100}
        centeredSlides={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          425: {
            slidesPerView: 1,
            spaceBetween: 55,
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 55,
          },
          768: {
            slidesPerView: 2.3,
            spaceBetween: 76,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 76,
          },
        }}
        modules={[Pagination]}
        className="mySwiper  pt-[19px] pb-[40px] max-w-[410px] sm:max-w-[490px] md:max-w-[776px] lg:max-w-[1050px] w-full mx-auto flex items-center justify-center"
      >
        {staff.map((item, index) => (
          <SwiperSlide key={index} className="max-w-[300px] pb-[70px] w-full">
            <Image
              src={item.img}
              width={120}
              height={120}
              className="mx-auto"
            />
            <p className="text-[#22343D] text-center font-Poppins text-[22px] max-md:text-[18px] max-sm:text-[16px] font-semibold pt-[10px]">
              {item.position}
            </p>
            <p className="text-[#80C4D3] text-center text-[16px] font-normal">
              {item.name}
            </p>
            {item.icons.map((icn, icnIndex) => (
              <div
                key={icnIndex}
                className="flex justify-center gap-[20px] mt-[10px] max-lg:mx-auto"
              >
                <div>{icn.fb}</div>
                <div>{icn.whatsap}</div>
                <div>{icn.insta}</div>
                <div>{icn.twitter}</div>
              </div>
            ))}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
