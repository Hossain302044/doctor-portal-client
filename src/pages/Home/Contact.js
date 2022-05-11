import React from 'react';
import appointment from './../../assets/images/appointment.png'
const Contact = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='flex flex-col justify-center items-center space-y-12 py-20'>
            <div className='text-center'>
                <h3 className='text-xl text-primary'>Contact Us</h3>
                <h2 className='text-3xl text-white'>Stay connected with us</h2>
            </div>
            <div className='w-6/12 flex justify-center'>
                <form action="" className='flex flex-col w-6/12 space-y-7'>
                    <input type="Email" placeholder="Email Address" className="input w-full max-w-xl input-primary" />
                    <input type="text" placeholder="Subject" className="input w-full max-w-xl input-primary" />
                    <textarea className="textarea max-w-xl textarea-primary" placeholder="Your message"></textarea>
                    <div className='flex justify-center'>
                        <input type="submit" value="submit" className='btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary' />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;