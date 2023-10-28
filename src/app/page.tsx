"use client";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import Slide1 from "@/assets/defaultImage.avif";

export default function Home() {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className="relative">
            <Image
              src={Slide1}
              alt="First Slide"
              width={1920}
              height={100}
              className="max-h-64"
            />
            <div className="absolute top-1/2 left-1/2 trasnform -translate-x-1/2 -translate-y-1/2  text-center">
              <h1 className="text-4xl">Heading 1</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <Image
              src={Slide1}
              alt="First Slide"
              width={1920}
              height={100}
              className="max-h-64"
            />
            <div className="absolute top-1/2 left-1/2 trasnform -translate-x-1/2 -translate-y-1/2  text-center">
              <h1 className="text-4xl">Heading 2</h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
