import React from 'react';

const ServiceCard = ({ service }) => {
    const {id, title, image, description} = service;
    return (
        <div className="card  bg-base-100 shadow-xl mt-10 mx-auto">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl font-semibold my-3">{title}</h2>
                <p className='mb-3'>{description}</p>
                <div className="card-actions">
                <button className="btn btn-outline text-[#F7A582] font-semibold my-3">More Details</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;