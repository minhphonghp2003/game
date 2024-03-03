import React from 'react'
import Hero from './Hero';
import { Pagination, Autoplay, Thumbs } from 'swiper/modules';


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function HeroCaro({ items }) {
    return (
        <Swiper
            modules={[Autoplay ]}
            loop={true}
            navigation={true}
          
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
        >
            <SwiperSlide><Hero /></SwiperSlide>
            {

                items && items.map(i => {
                    return <SwiperSlide>
                        <a href={`/game/${i.id}`}>
                            <img className='w-full h-[100vh] object-cover ' src={i.image} />
                        </a>
                    </SwiperSlide>

                })
            }
        </Swiper>
       
    )
}

export default HeroCaro