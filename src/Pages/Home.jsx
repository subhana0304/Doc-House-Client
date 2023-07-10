import React from 'react';
import Banner from '../Components/Banner';
import Services from '../Components/Services';
import { Helmet } from 'react-helmet-async';
import Card from '../Components/Card';
import Reviews from '../Components/Reviews';
import ExpertDoctors from '../Components/ExpertDoctors';
import Form from '../Components/Form';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Doc-House || Home</title>
            </Helmet>
            <Banner></Banner>
            <Services></Services>
            <Card></Card>
            <Reviews></Reviews>
            <ExpertDoctors></ExpertDoctors>
            <Form></Form>
        </div>
    );
};

export default Home;