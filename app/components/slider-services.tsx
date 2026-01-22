"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { ArrowRight } from "lucide-react";
import { Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from "swiper"; 
import { serviceData } from '@/data';
import "swiper/css";
import "swiper/css/pagination";

const SliderServices = () => {
    const swiperRef = useRef<SwiperType | null>(null); 

    return (
        <div className="relative flex items-center justify-center px-4">
            <div className="w-full max-w-6xl">
                <Swiper
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    breakpoints={{
                        320: { slidesPerView: 1, spaceBetween: 16 },
                        640: { slidesPerView: 1.5, spaceBetween: 20 },
                        768: { slidesPerView: 2, spaceBetween: 24 },
                        1024: { slidesPerView: 3, spaceBetween: 28 }
                    }}
                    pagination={{
                        clickable: true,
                        bulletClass: 'bullet-class',
                        bulletActiveClass: 'bullet-active-class'
                    }}
                    modules={[Pagination]}
                    className="h-auto min-h-[320px] w-full"
                >
                    {serviceData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="h-full p-6 rounded-xl bg-white/80 border border-gray-200/60 hover:border-gray-300/80 transition-colors duration-300">
                                <div className="mb-5 text-3xl text-gray-700">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-medium text-gray-800 mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="flex justify-center mt-8">
                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                    >
                        <ArrowRight className="w-5 h-5 text-gray-700" />
                    </button>
                </div>
            </div>

            {/* Estilos inline para evitar problemas */}
            <style jsx global>{`
                .bullet-class {
                    width: 8px;
                    height: 8px;
                    background: #d1d5db;
                    opacity: 0.5;
                    margin: 0 4px;
                    border-radius: 50%;
                }
                .bullet-active-class {
                    background: #6b7280;
                    opacity: 1;
                }
                .swiper-pagination {
                    position: relative !important;
                    margin-top: 24px !important;
                }
            `}</style>
        </div>
    );
}

export default SliderServices;