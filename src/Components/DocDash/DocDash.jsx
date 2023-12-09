// import React from 'react'
// import logo from '../assets/logo.png'
// import profile from '../assets/profile.png'
// import './DocDash.css'

// const DocDash = () => {
//     const DoctorOut = () =>{
//         console.log("doctor out")
//     };

//     const Deletebtn = () =>{
//         console.log("delete this record");
//     };

//     const OpenPres = () =>{
//         console.log("Open Prescription window");
//     };

//   return (
//     <div className='DashDoc'>
//                     <div className='contain1'>
//             <div className='logoName'>
//                 <img src={logo}/>
//                 <h1>Martin Dow</h1>
//             </div>
//             <div className='qoute'>
//                 <h4>Your Safety is Our Number 1 Priority</h4>
//             </div>
//             <div className='info'>
//                 <h4>Home</h4>
//                 <h4>About Us</h4>
//                 <h4>Contact Us</h4>
//             </div>
//         </div>
//         <div className='contain2'>
//             <div className='profile'>
//                 <div>
//                     <img src={profile}/>
//                 </div>
//                 <div className='role'>
//                     <p className='DisplayName'>Doctor Name</p>
//                 </div>
//             </div>
//             <h1>Doctor Dashboard</h1>
//             <button onClick={DoctorOut}>Log out</button>
//         </div>
//         <div className='contain3'>
//             <button className='viewAllApp'>View All Appointments</button>
//         </div>
//         <div className='contain4'>
//         <table className='DoctorApps'>
//                  <div className='headings'>
//                     <th>Appointment ID</th>
//                     <th>Patient Name</th>
//                     <th>Date</th>
//                     <th>Timing</th>
//                     <th>Mode</th>
//                     <th>Status</th>
//                     <th>Prescription</th>
//                     <th>Appointment Type</th>
//                     <th>Keep/Cancel</th>
//                 </div>
//                 <div className='tableData'>
//                     <tr>
//                     </tr>
//                 </div>
//             </table>
//         </div>
//     </div>
//   )
// }

// export default DocDash

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from '../assets/logo.png';
import profile from '../assets/profile.png';
import './DocDash.css';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const DocDash = () => {
    const [appointments, setAppointments] = useState([]);
    const { userId } = useParams();
    const curUserID = userId;
    const history = useHistory();

    useEffect(() => {
        fetchAppointments();
    }, []);

    const fetchAppointments = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/doctor/fetchUpcomingAppointments/${curUserID}`);
            setAppointments(response.data);
        } catch (error) {
            console.error('Error fetching appointments:', error);
        }
    };

    const Cancelbtn = async (appointmentId) => {
        try {
            await axios.put(`http://localhost:3001/doctor/cancelAppointment/${appointmentId}`);
            const updatedAppointments = appointments.filter(appointment => appointment.appointment_id !== appointmentId);
            setAppointments(updatedAppointments);
        } catch (error) {
            console.error('Error canceling appointment:', error);
        }
    };

    const DoctorOut = () => {
        console.log("doctor out");
        history.push('/login')
    };

    const AssignPres = () => {
        console.log("Assign Prescription");
    };

    return (
        <div className='DashDoc'>
            <div className='contain1'>
                <div className='logoName'>
                    <img src={logo} alt="logo"/>
                    <h1>Martin Dow</h1>
                </div>
                <div className='quote'>
                    <h4>Your Safety is Our Number 1 Priority</h4>
                </div>
                <div className='info'>
                    <h4>Home</h4>
                    <h4>About Us</h4>
                    <h4>Contact Us</h4>
                </div>
            </div>
            <div className='contain2'>
                <div className='profile'>
                    <div>
                        <img src={profile} alt="profile"/>
                    </div>
                    <div className='role'>
                        <p className='DisplayName'>{curUserID}</p>
                    </div>
                </div>
                <h1>Doctor Dashboard</h1>
                <button onClick={DoctorOut}>Log out</button>
            </div>
            <div className='contain3'>
                <button className='viewAllApp'>View All Appointments</button>
            </div>
            <div className='contain4'>
                <table className='DoctorApps'>
                    <div className='headings'>
                        <th>Appointment ID</th>
                        <th>Patient Name</th>
                        <th>Date</th>
                        <th>Timing</th>
                        <th>Mode</th>
                        <th>Status</th>
                        <th>Prescription</th>
                        <th>Appointment Type</th>
                        <th>Keep/Cancel</th>
                    </div>
                    {appointments && appointments.length > 0 ? (
                    <div className='tableData'>

                   


                        {appointments.map(appointment => (
                            <tr key={appointment.appointment_id}>
                                <td>{appointment.appointment_id}</td>
                                <td>{appointment.patient_name}</td>
                                <td>{appointment.appointment_date}</td>
                                <td>{appointment.time_slot}</td>
                                <td>{appointment.appointment_mode}</td>
                                <td>{appointment.appointment_status}</td>
                                <td>
                                    <button onClick={AssignPres} style={{ backgroundColor: '#9083D5' }}>Assign</button>
                                </td>
                                <td>{appointment.appointment_type}</td>
                                <td>
                                    <button onClick={() => Cancelbtn(appointment.appointment_id)} className='deleteRoc'>Cancel</button>
                                </td>
                            </tr>
                        ))}

                    </div>
                    ) : (
                        <div className="errorPrompt">No Upcoming Appointments</div>
  
          )};
                </table>
            </div>
        </div>
    );
};

export default DocDash;

