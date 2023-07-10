import React from 'react';
import { Link } from 'react-router-dom';

const Title = ({heading, subHeading}) => {
    return (
        
            <div className='bg-[#07332F] pt-24 text-white px-10 md:px-24 pb-10'>
                <p className='pt-10 mb-2'><Link to='/'>Home </Link>/ <span className='font-semibold'> {subHeading}</span></p>
                <h2 className='text-3xl font-semibold'>{heading}</h2>
            </div>
        
    );
};

export default Title;