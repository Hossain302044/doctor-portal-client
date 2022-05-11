import React from 'react';
import PrimaryBtn from '../Shared/PrimaryBtn';
import treatment from './../../assets/images/treatment.png';

const ServiceHero = () => {
    const serviceHeroContent = {
        serviceName: 'Exceptional Dental Care, on Your Terms',
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page"
    }
    return (
        <div className="hero pt-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className='mr-0 lg:mr-20'>
                    <img src={treatment} className="max-w-md rounded-lg shadow-2xl" alt='' />
                </div>
                <div className='m-0 lg:m-10'>
                    <h1 className="text-5xl font-bold">{serviceHeroContent.serviceName}</h1>
                    <p className="py-6">{serviceHeroContent.description}</p>
                    <PrimaryBtn >GET STARTED</PrimaryBtn>
                </div>
            </div>
        </div>
    );
};

export default ServiceHero;