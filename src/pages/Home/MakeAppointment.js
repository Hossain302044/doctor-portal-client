import React from 'react';
import PrimaryBtn from '../Shared/PrimaryBtn';
import doctor from './../../assets/images/doctor.png'
import appointment from './../../assets/images/appointment.png'

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }}
            className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-150px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 p-5 space-y-7'>
                <h3 className='text-xl text-primary'>Appointment</h3>
                <h2 className='text-3xl text-white'>Make an Appointment Today</h2>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quibusdam nostrum optio deserunt ducimus dignissimos aspernatur ipsa possimus debitis aliquid aliquam temporibus saepe ullam exercitationem illum quaerat quos, assumenda rerum.ipsa possimus debitis aliquid aliquam temporibus saepe ullam exercitationem illum quaerat quos, assumenda rerum.</p>
                <PrimaryBtn>GET STARTED</PrimaryBtn>
            </div>
        </section>
    );
};

export default MakeAppointment;