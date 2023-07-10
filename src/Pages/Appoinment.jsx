import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Helmet } from 'react-helmet-async';
import Title from '../Components/Title';
import Swal from 'sweetalert2';

const Appoinment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);
    const [disabled, setDisabled] = useState(false);

    useEffect(()=>{
        fetch('appointment.json')
        .then(res=>res.json())
        .then(data=>setAppointments(data))
    },[])
    console.log(appointments);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleAppointment = () =>{
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Appointment Done',
            showConfirmButton: false,
            timer: 1500
          })
          setDisabled(true);
    }


    return (
        <div>
            <Helmet>
                <title>Doc-House || Appointment</title>
            </Helmet>
            <div>
                <Title heading='Doctor Appointment' subHeading='Doctor Appointment'></Title>
                <div className='px-10 md:px-20 py-10'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3 items-center'>
                        <div className='mx-auto md:px-10 order-2 md:order-1'>
                            <Calendar className="p-2" onChange={handleDateChange} value={selectedDate} />
                        </div>
                        <div className='pb-10 md:p-10 order-1 md:order-2'>
                            <img src="https://i.ibb.co/GkY6r2G/chair-1.png" alt="chair-1" border="0" />
                        </div>
                    </div>
                    <div className="mt-10 text-center">
                        <h3 className='text-4xl font-semibold'>Available slots for Teeth Orthodontics.</h3>
                        
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                        {
                            appointments.map(appointment => 
                            <div key={appointment.id} className='p-5'>
                                <div className='shadow-xl p-4 rounded flex'>
                                    <img src={appointment.image} alt="" />
                                    <div className='text-left ms-5'>
                                        <h4>{appointment.name}</h4>
                                        <p>Selected Date: {selectedDate.toLocaleDateString()}</p>
                                        <p>{appointment.time}</p>
                                        <button disabled={disabled} onClick={handleAppointment} className="btn bg-[#F7A582] border-[#F7A582] w-full text-white hover:bg-[#faa27c] hover:border-[#F7A582]">Appointment</button>
                                    </div>
                                </div>
                            </div>
                            )
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appoinment;