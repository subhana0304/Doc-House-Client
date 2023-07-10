import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Title from './Title';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Helmet } from 'react-helmet-async';

const Profile = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const doctor = useLoaderData();
    console.log(doctor);
    return (
        <>
            <Helmet>
                <title>Doc-House || DocProfile</title>
            </Helmet>
            <div className='bg-[#F3F3F3]'>
                <Title heading='Doctor Profile' subHeading='Doctor Profile'></Title>
                <div className='px-10 md:px-20 my-10 md:mx-10'>
                    <div className='bg-white p-10 md:flex'>
                        <img className='me-10' src={doctor.image} alt="" />
                        <div className='p-3 space-y-2'>
                            <h4 className='text-2xl font-semibold'>{doctor.name}</h4>
                            <h5 className='text-xl text-gray-500'>{doctor.whichDoctor}</h5>
                            <span><img className='my-2' src="https://i.ibb.co/S76z7Wk/Group-24.png" alt="" /></span>
                            <div className="divider"></div>
                            <p>{doctor.address}</p>
                            <p>{doctor.availableFrom}</p>
                            <p>${doctor.fees}</p>
                            <div>
                                <button className='btn btn-outline'>Dental Filling</button>
                                <button className='btn btn-outline ms-3'>Teeth Whitening</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='px-10 md:px-20 md:mx-10'>
                    <div className='bg-white p-10'>
                        <div className=''>
                            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                                <TabList className="tabs tabs-boxed bg-white flex justify-around space-x-3">
                                    <Tab >OverView</Tab>
                                    <Tab >Location</Tab>
                                    <Tab >Reviews</Tab>
                                </TabList>
                                <TabPanel className='py-5'>
                                    <div>
                                        <p className='font-semibold'>About:</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        <div className='md:flex'>
                                            <div className="left md:w-1/2">
                                                <p className='font-semibold mt-5'>Work & Education:</p>
                                                <ul className='ms-5'>
                                                    <li className='list-disc ms-5 font-medium'>American Dental Medical University</li>
                                                    <p className='ms-5'> BDS (1998 - 2003)</p>
                                                    <li className='list-disc ms-5 font-medium'>American Dental Medical University</li>
                                                    <p className='ms-5'> MDS (2003 - 2005)</p>
                                                </ul>
                                                <p className='font-semibold mt-5'>Experience:</p>
                                                <ul className='ms-5'>
                                                    <li className='list-disc ms-5 font-medium'>Glowing Smiles Family Dental Clinic</li>
                                                    <p className='ms-5'>2010 - Present (5 years)</p>
                                                    <li className='list-disc ms-5 font-medium'>Comfort Care Dental Clinic</li>
                                                    <p className='ms-5'>2007 - 2010 (3 years)</p>
                                                    <li className='list-disc ms-5 font-medium'>Dream Smile Dental Practice</li>
                                                    <p className='ms-5'>2005 - 2007 (2 years)</p>
                                                </ul>
                                                <p className='font-semibold mt-5'>Services:</p>
                                                <ul className='ms-5'>
                                                    <li className='list-disc ms-5'>Tooth cleaning</li>
                                                    <li className='list-disc ms-5'>Root Canal Therapy</li>
                                                    <li className='list-disc ms-5'>Implants</li>
                                                    <li className='list-disc ms-5'>Composite Bonding</li>
                                                    <li className='list-disc ms-5'>Fissure Sealants</li>
                                                    <li className='list-disc ms-5'>Surgical Extractions</li>
                                                </ul>
                                            </div>
                                            <div className="right md:w-1/2">
                                                <p className='font-semibold mt-5'>Awards:</p>
                                                <ul className='ms-5'>
                                                    <p className='ms-5 mt-3'>July 2019</p>
                                                    <li className='list-disc ms-5 font-medium'>Humanitarian Award</li>
                                                    <p className='ms-5 text-sm'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus.Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                                                    <p className='ms-5 mt-3'> March 2011</p>
                                                    <li className='list-disc ms-5 font-medium'>Certificate for International Volunteer Service</li>
                                                    <p className='ms-5 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                                                    <p className='ms-5 mt-3'> May 2008</p>
                                                    <li className='list-disc ms-5 font-medium'>The Dental Professional of The Year Award</li>
                                                    <p className='ms-5 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                                                </ul>
                                                <p className='font-semibold mt-5'>Specializations:</p>
                                                <ul className='ms-5'>
                                                    <li className='list-disc ms-5'>Children Care</li>
                                                    <li className='list-disc ms-5'>Dental Care</li>
                                                    <li className='list-disc ms-5'>Implants</li>
                                                    <li className='list-disc ms-5'>Oral and Maxillofacial Surgery</li>
                                                    <li className='list-disc ms-5'>Orthodontist</li>
                                                    <li className='list-disc ms-5'>Periodontist</li>
                                                    <li className='list-disc ms-5'>Prosthodontics</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel className='py-5'>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur corporis dolorum, dignissimos expedita quod fuga? Reiciendis est voluptatem nam vitae id consequuntur corporis aliquid! Voluptatibus, iusto dolore excepturi cumque velit id quam nobis numquam explicabo pariatur laborum totam labore doloremque ratione placeat. Quis ducimus voluptas quasi quisquam, quae minima amet?</p>
                                    <p className='text-xl font-semibold mt-4'>{doctor.address}</p>
                                    <p className='ms-5 font-semibold'>Available time</p>
                                    <p className='ms-5'>{doctor.availableFrom}</p>
                                </TabPanel>
                                <TabPanel className='py-5'>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur corporis dolorum, dignissimos expedita quod fuga? Reiciendis est voluptatem nam vitae id consequuntur corporis aliquid! Voluptatibus, iusto dolore excepturi cumque velit id quam nobis numquam explicabo pariatur laborum totam labore doloremque ratione placeat. Quis ducimus voluptas quasi quisquam, quae minima amet?</p>
                                    <p className='text-xl font-semibold mt-4'>Rating</p>
                                    <span><img className='my-2' src="https://i.ibb.co/S76z7Wk/Group-24.png" alt="" /></span>
                                </TabPanel>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;