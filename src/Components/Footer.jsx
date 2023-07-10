import React from 'react';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <div>
                <img src="../../public/logo (4).png" alt="" />
                <p className='py-3'>Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. has been <br /> since the printer took.</p>
                <button className="btn btn-outline text-[#F7A582] font-semibold">Appointment</button>
            </div>
            <div>
                <span className="font-semibold pb-3">Quick Links</span>
                <a className="link link-hover">About Us</a>
                <a className="link link-hover">Service</a>
                <a className="link link-hover">Doctors</a>
                <a className="link link-hover">Departments</a>
                <a className="link link-hover">Online Payments</a>
                <a className="link link-hover">Contact Us</a>
                <a className="link link-hover">My Account</a>
            </div>
            <div>
                <span className="font-semibold pb-3">Doc House Services</span>
                <a className="link link-hover">Pediatric Clinic</a>
                <a className="link link-hover">Diagnosis Clinic</a>
                <a className="link link-hover">Cardiac Clinic</a>
                <a className="link link-hover">Laboratory Analysis</a>
                <a className="link link-hover">Gynecological Clinic</a>
                <a className="link link-hover">Personal Counseling</a>
                <a className="link link-hover">Dental Clinic</a>
            </div>
            <div>
                <span className="font-semibold pb-3">Working Hours</span>
                <a className="link link-hover">Monday - 10 am to 7 pm</a>
                <a className="link link-hover">Tuesday - 10 am to 7 pm</a>
                <a className="link link-hover">Wednesday - 10 am to 7 pm</a>
                <a className="link link-hover">Thursday - 10 am to 7 pm</a>
                <a className="link link-hover">Friday - 10 am to 7 pm</a>
                <a className="link link-hover">Saturday - 10 am to 7 pm</a>
                <a className="link link-hover">Sunday - 10 am to 7 pm</a>
            </div>
        </footer>
    );
};

export default Footer;