import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ServiceCard from '../Shared/ServiceCard';

const Services = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    // console.log(services);

    const cavityProtection = services.filter(service => service.name === 'Cavity Protection');
    const cosmeticDentistry = services.filter(service => service.name === 'Cosmetic Dentistry')
    const oralSurgery = services.filter(service => service.name === 'Oral Surgery')

    return (
        <div className='px-10 md:px-20 py-10 grid grid-cols-1 md:grid-cols-2 gap-3 items-center'>
            <div className='md:p-10'>
                <img src="https://i.ibb.co/Qm1zkQr/doctor.png" alt="" />
            </div>
            <div className='mx-auto md:px-10'>
                <h1 className='text-4xl font-semibold'>Our Services</h1>
                <p className='py-5'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <div className=''>
                    <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                        <TabList className="tabs tabs-boxed">
                            <Tab >Cavity Protection</Tab>
                            <Tab >Cosmetic Dentistry</Tab>
                            <Tab >Oral Surgery</Tab>
                        </TabList>
                        <TabPanel className='w-full'>
                            {
                                cavityProtection.map(service => <ServiceCard
                                    key={service.id}
                                    service={service}
                                ></ServiceCard>)
                            }
                        </TabPanel>
                        <TabPanel className='w-full'>
                        {
                                cosmeticDentistry.map(service => <ServiceCard
                                    key={service.id}
                                    service={service}
                                ></ServiceCard>)
                            }
                        </TabPanel>
                        <TabPanel className='w-full'>
                        {
                                oralSurgery.map(service => <ServiceCard
                                    key={service.id}
                                    service={service}
                                ></ServiceCard>)
                            }
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default Services;