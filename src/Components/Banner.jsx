import React from 'react';

const Banner = () => {
    
    return (
        <div className='banner p-10'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse items-center">
                    <img src="https://i.ibb.co/kM4Ykc5/img1.png" className="w-full md:w-1/2 md:p-10" />
                    <div className='text-white w-full md:w-1/2 md:p-10'>
                        <h1 className="text-5xl font-semibold">Your Best Medical Help Center</h1>
                        <p className="py-6 font-light">Lorem Ipsum is simply dummy text they are printing typesetting has been the industry’s stardard.</p>
                        <button className="btn bg-[#F7A582] border-0 text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;