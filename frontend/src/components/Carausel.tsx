import React, { useState } from "react";

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const prev = () => {
        setCurrentSlide((currentSlide) => (currentSlide === 0 ? slides.length - 1 : currentSlide - 1));
    };

    const next = () => {
        setCurrentSlide((currentSlide) => (currentSlide === slides.length - 1 ? 0 : currentSlide + 1));
    };

    const slides = [
        "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Fashion/GW/MFD/1x._CB583514833_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img22/premium/jan7/Under_1499_Tallhero_3000x1200._CB584583557_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200._CB574597993_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img18/Lawn_Garden/Ud/2024/Jan/Hero/03-Pc-GW-Hero._CB583325281_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/jan2024/MFD_SHoes/Unrec/Footwear/4_3000pc._CB583023268_.jpg"
    ];

    return (
        <main className="w-full ">
            <div className="w-full overflow-hidden relative">
                <div className="flex transition-transform ease-out duration-500" style={{ transform: `translate(-${currentSlide * 100}%)` }}>
                    {slides.map((slide, index) => (
                        <img key={index} className="w-full h-full object-cover" src={slide} alt={`Slide ${index}`} />
                    ))}




                </div>


                <div className="absolute inset-0 flex items-center justify-between p-4 mt-[-350px]">
                    <button onClick={prev} className="p-2 rounded-full  text-black focus:outline-none hover:text-gray-700 ">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>


                    </button>

                    <button onClick={next} className="p-2 rounded-full  text-black hover:text-gray-700  focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>

                    </button>

                </div>

            </div>

        </main>
    );
};

export default Carousel;
