// import React from 'react'
// import './PendingApp.css'
// import {useHistory} from 'react-router-dom'


// const PendingApp = () => {
//     const history = useHistory();
//     const pendingBack = ()=>{
//         console.log("back to admin Dashboard");
//         console.log(history);
//         history.push('/admin-dashboard');
//     };

//     const appApp = ()=>{
//         console.log("approve Appointment");
//     };

//     const delApp = () =>{
//         console.log("delete Appointment");
//     };

//   return (
//     <div className='pendApp'>
//         <div className='contain1'>
//             <h1>Pending Appointments</h1>
//             <button onClick={pendingBack}>Back</button>
//         </div>
//         <div className='contain2'>
//             <table>
//                 <div className='headings'>
//                     <tr>
//                         <th>Patient ID</th>
//                         <th>Patient Name</th>
//                         <th>Doctor Name</th>
//                         <th>Date</th>
//                         <th>Mode</th>
//                         <th>Appointmen Type</th>
//                         <th>Approve</th>
//                         <th>Keep/Delete</th>
//                     </tr>
//                 </div>
//                 <div className='tableData'>
//                     <tr>
//                         <td>123</td>
//                         <td>John</td>
//                         <td>Sarah</td>
//                         <td>12-12-2012</td>
//                         <td>online</td>
//                         <td>follow up</td>
//                         <td><button className='approve' onClick={appApp}>Approve</button></td>
//                         <td><button className='delete'onClick={delApp}>Delete</button></td>
//                     </tr>
//                 </div>
//             </table>
//         </div>
//     </div>
//   )
// }

// export default PendingApp

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PendingApp.css';
import { useHistory } from 'react-router-dom';

const PendingApp = () => {
    const [appointments, setAppointments] = useState([]);
    const history = useHistory();

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                // Replace this URL with your actual API endpoint
                const response = await axios.get('http://localhost:3001/admin/PendingAppointments');
                setAppointments(response.data);
            } catch (error) {
                console.error('Error fetching appointments', error);
            }
        };

        fetchAppointments();
    }, []);

    const pendingBack = () => {
        history.push('/admin-dashboard');
    };

    const handleAppointmentAction = async (appointmentID, action) => {
        try {
            if (action === 'approve') {
                await axios.put(`http://localhost:3001/admin/approveAppointment/${appointmentID}`);
            } else if (action === 'delete') {
                await axios.delete(`http://localhost:3001/admin/deleteAppointment/${appointmentID}`);
            }
            // Remove the appointment from the UI for both approve and delete actions
            setAppointments(appointments.filter(app => app.id !== appointmentID));
        } catch (error) {
            console.error(`Error ${action} appointment`, error);
        }
    };

    return (
        <div className='pendApp'>
            <div className='contain1'>
                <h1>Pending Appointments</h1>
                <button onClick={pendingBack}>Back</button>
            </div>
            <div className='contain2'>
                <table>
                    <thead>
                        <tr>
                            <th>Patient ID</th>
                            <th>Patient Name</th>
                            <th>Doctor Name</th>
                            <th>Date</th>
                            <th>Mode</th>
                            <th>Appointment Type</th>
                            <th>Approve</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map((appointment) => (
                            <tr key={appointment.id}>
                                <td>{appointment.patientID}</td>
                                <td>{appointment.patientName}</td>
                                <td>{appointment.doctorName}</td>
                                <td>{appointment.date}</td>
                                <td>{appointment.mode}</td>
                                <td>{appointment.appointmentType}</td>
                                <td><button className='approve' onClick={() => handleAppointmentAction(appointment.id, 'approve')}>Approve</button></td>
                                <td><button className='delete' onClick={() => handleAppointmentAction(appointment.id, 'delete')}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default PendingApp;
