import React from 'react';

const Card = () => {
    return (
        <div className='px-10 md:mb-20 md:px-20 md:mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center justify-center mx-auto'>
            <div className=" flex justify-around p-10 rounded bg-[#07332F] text-white">
                <div>
                <img className='w-[50px]' src="../../public/Frame.png" alt="" />
                </div>
                <div className="">
                    <h2 className="card-title">Opening Hours</h2>
                    <p>Open 9.00 am to 5.00pm <br /> Everyday</p>
                </div>
            </div>
            <div className=" flex justify-around p-10 rounded bg-[#F7A582] text-white">
                <div>
                <img className='w-[50px]' src="../../public/Frame (1).png" alt="" />
                </div>
                <div className="">
                    <h2 className="card-title">Our Locations</h2>
                    <p>Dhanmondi 17, Dhaka <br /> -1200, Bangladesh</p>
                </div>
            </div>
            <div className=" flex justify-around p-10 rounded bg-[#07332F] text-white">
                <div>
                <img className='w-[50px]' src="../../public/Frame (2).png" alt="" />
                </div>
                <div className="">
                    <h2 className="card-title">Contact Us</h2>
                    <p>+88 01750 00 00 00 <br /> +88 01750 00 00 00 </p>
                </div>
            </div>
        </div>
    );
};

export default Card;