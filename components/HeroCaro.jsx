"use client"
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Hero from './Hero';


function HeroCaro({ items }) {
    return (
        <div data-hs-carousel='{
    "loadingClasses": "opacity-0",
    "isAutoPlay": true
  }' className="relative ">
            <div className="hs-carousel relative overflow-hidden w-full h-[100vh] bg-white rounded-lg">
                <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
                    <div className="hs-carousel-slide">
                        <Hero />
                    </div>
                    {
                        items && items.map(i => {

                            return <div className={`hs-carousel-slide `}>
                                <a href={`/game/${i.id}`}>
                                    <img className='w-full h-full object-cover ' src={i.image} />
                                </a>
                            </div>

                        })
                    }
                </div>
            </div>

            <button type="button" className="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-white hover:bg-gray-800/[.1]">
                <span className="text-2xl" aria-hidden="true">
                    <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                    </svg>
                </span>
                <span className="sr-only">Previous</span>
            </button>
            <button type="button" className="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-white hover:bg-gray-800/[.1]">
                <span className="sr-only">Next</span>
                <span className="text-2xl" aria-hidden="true">
                    <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                </span>
            </button>

            {/* <div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2">
                <span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
                <span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
                <span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
            </div> */}
        </div>
        // <Carousel dynamicHeight={false} autoPlay={true} infiniteLoop={true} interval={2700} emulateTouch={true} showArrows={false} showStatus={false} swipeable={true}>
        //     <Hero />
        //     {items && items.map(i => {
        //         return <img className='' src={i.image} alt="" />
        //     })}

        // </Carousel>
    )
}

export default HeroCaro