import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='text-center my-24'>
            <h3 className='text-2xl font-semibold'>Sorry,</h3>
            <p className='text-xl'>This Page is not Found</p>
            <img src="../../public/error.png" alt="" />
            <button className='btn bg-[#F7A582] border-[#F7A582] text-white hover:bg-[#faa27c] hover:border-[#F7A582]'><Link>Back to Home</Link></button>
            </div>
        </div>
    );
};

export default Error;