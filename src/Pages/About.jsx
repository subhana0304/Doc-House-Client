import React from 'react';
import { Helmet } from 'react-helmet-async';
import Title from '../Components/Title';

const About = () => {
    return (
        <div>
            <Helmet>
                <title>Doc-House || About</title>
            </Helmet>
            <div>
            <Title heading='Doc-House About' subHeading='About'></Title>
            <div className='px-10 md:px-20 py-10 grid grid-cols-1 md:grid-cols-2 gap-3 items-center'>
            <div className='mx-auto md:px-10 order-2 md:order-1'>
                <h1 className='text-4xl font-semibold'>About Doc-House</h1>
                <p className='py-5'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <p className='py-5'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
                <p className='py-5'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <p className='py-5'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </div>
            <div className='pb-10 md:p-10 order-1 md:order-2'>
                <img src="https://i.ibb.co/Qm1zkQr/doctor.png" alt="" />
            </div>
            </div>
            </div>
        </div>
    );
};

export default About;