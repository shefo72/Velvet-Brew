
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import SignUpImg1 from '../assets/SignUp1.jpg';
import SignUpImg2 from '../assets/SignUp2.jpg';

export default function SwiperComponent() {
    return <>
        <Swiper
            modules={[Navigation, Pagination, Autoplay]} navigation={{
                prevEl: '.custom-prev',
                nextEl: '.custom-next'
            }}
        pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
    >
            <SwiperSlide>
                <div className="w-full h-screen" style={{
                        backgroundImage: `url(${SignUpImg2})`,
                        backgroundSize: "cover",
                        backgroundPosition:"center"
                }}>
                    <div className="overlay py-20 text-white p-4 w-full h-full bg-[#4A3728]/60">
                            <div className="container h-full flex flex-col justify-end items-start">
                                <h2 className="text-white text-3xl font-bold mb-4 max-w-96">
                                    Velvet Brew
                                </h2>
                                <p className='max-w-sm text-[#E8E0D4]'>Step into our digital brew bar. Every login is the beginning of a sensory journey.</p>
                                <div className="mt-4 *:ms-3">
                                </div>
                            </div>
                        </div>
                    </div>
    </SwiperSlide>
            <SwiperSlide>
                <div className="w-full h-screen" style={{
                        backgroundImage: `url(${SignUpImg1})`,
                        backgroundSize: "cover",
                        backgroundPosition:"center"
                }}>
                    <div className="overlay py-20 text-white p-4 w-full h-full bg-[#4A3728]/60">
                            <div className="container h-full flex flex-col justify-end items-start">
                                <h2 className="text-white text-3xl font-bold mb-4 max-w-96">
                                    Velvet Brew
                                </h2>
                                <p className='max-w-sm text-[#E8E0D4]'>Step into our digital brew bar. Every login is the beginning of a sensory journey.</p>
                                <div className="mt-4 *:ms-3">
                                </div>
                            </div>
                        </div>
                    </div>
    </SwiperSlide>
            <SwiperSlide>
                <div className="w-full h-screen" style={{
                        backgroundImage: `url(${SignUpImg2})`,
                        backgroundSize: "cover",
                        backgroundPosition:"center"
                }}>
                    <div className="overlay py-20 text-white p-4 w-full h-full bg-[#4A3728]/60">
                            <div className="container h-full flex flex-col justify-end items-start">
                                <h2 className="text-white text-3xl font-bold mb-4 max-w-96">
                                    Velvet Brew
                                </h2>
                                <p className='max-w-sm text-[#E8E0D4]'>Step into our digital brew bar. Every login is the beginning of a sensory journey.</p>
                                <div className="mt-4 *:ms-3">
                                </div>
                            </div>
                        </div>
                    </div>
            </SwiperSlide>
    </Swiper>
    </>      
    
};