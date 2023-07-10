import React from 'react';

const Form = () => {
    return (
        <div className="px-10 md:px-20 my-10 md:mx-10 py-10">
            <div className='bg-[#07332F] rounded p-24 grid grid-cols-1 md:grid-cols-2 gap-5 text-white'>
                <div className='space-y-2'>
                    <h1 className='text-4xl font-semibold'>Contact With Us</h1>
                    <p className='py-5 font-thin'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi.</p>
                    <div className='flex'><img className='w-[25px] mr-2' src="../../public/Frame (1).png" alt="" />+88 01750 14 14 14</div>
                    <div className='flex'><img className='w-[25px] mr-2' src="../../public/Frame (2).png" alt="" />Dhanmondi, Dhaka, Bangladesh</div>
                </div>
                <div className='space-y-5'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                        <input type="text" placeholder="Name" className="input bg-[#133D39] w-full max-w-xs" />
                        <input type="email" placeholder="Email" className="input bg-[#133D39] w-full max-w-xs" />
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                        <input type="number" placeholder="Mobile Number" className="input bg-[#133D39] w-full max-w-xs" />
                        <input type="text" placeholder="Doctor Name" className="input bg-[#133D39] w-full max-w-xs" />
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3 text-white'>
                        <input type="date" placeholder="Name" className="input bg-[#133D39] text-white w-full max-w-xs" />
                            <div className="input bg-[#133D39] text-white w-full max-w-xs">
                                <select className="select select-bordered bg-[#133D39] text-white">
                                    <option disabled selected>Time</option>
                                    <option>9:00 AM</option>
                                    <option>10:30 AM</option>
                                    <option>2:00 PM</option>
                                </select>
                            </div>
                    </div>
                    <div className="btn bg-[#F7A582] border-[#F7A582] w-full text-white hover:bg-[#faa27c] hover:border-[#F7A582]">Book Now</div>
                </div>
            </div>
        </div>
    );
};

export default Form;