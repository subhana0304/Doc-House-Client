import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ExpertDoctors = () => {
    const [experts, setExperts] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/doctors')
        .then(res => res.json())
        .then(data => setExperts(data))
    },[])

    return (
        <div className="px-10 md:px-20 my-10 md:mx-10 pt-10">
            <div className='text-center'>
                <h1 className='text-4xl font-semibold'>Our Expert Doctors</h1>
                <p className='py-5'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa <br /> quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                {
                    experts.map(expert => 
                    
                        <div key={expert.id} className='border rounded p-2 w-full'>
                            <img className='w-full' src={expert.image} alt="" />
                            <div className='p-3 space-y-2'>
                                <h4 className='text-2xl font-semibold'>{expert.name}</h4>
                                <h5 className='text-xl text-gray-500'>{expert.whichDoctor}</h5>
                                <span><img className='my-2' src="https://i.ibb.co/S76z7Wk/Group-24.png" alt="" /></span>
                                <div className="divider"></div>
                                <p>{expert.address}</p>
                                <p>{expert.availableFrom}</p>
                                <p>${expert.fees}</p>
                            </div>
                            <div className="btn btn-outline text-[#F7A582] w-full hover:bg-[#F7A582] hover:border-[#F7A582]"><Link to={`profile/${expert._id}`}>View Profile</Link></div>
                        </div>
                    
                    )
                }
            </div>
        </div>
    );
};

export default ExpertDoctors;