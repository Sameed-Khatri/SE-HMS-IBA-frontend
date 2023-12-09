
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './PendingApp.css';
// import { useHistory } from 'react-router-dom';

// const PendingApp = () => {
//     const [appointments, setAppointments] = useState([]);
//     const history = useHistory();

//     useEffect(() => {
//         const fetchAppointments = async () => {
//             try {
//                 // Replace this URL with your actual API endpoint
//                 const response = await axios.get('http://localhost:3001/admin/PendingAppointments');
//                 setAppointments(response.data);
//             } catch (error) {
//                 console.error('Error fetching appointments', error);
//             }
//         };

//         fetchAppointments();
//     }, []);

//     const pendingBack = () => {
//         history.push('/admin-dashboard');
//     };

//     const handleAppointmentAction = async (appointmentID, action) => {
//         try {
//             if (action === 'approve') {
//                 await axios.put(`http://localhost:3001/admin/approveAppointment/${appointmentID}`);
//             } else if (action === 'delete') {
//                 await axios.delete(`http://localhost:3001/admin/deleteAppointment/${appointmentID}`);
//             }
//             // Remove the appointment from the UI for both approve and delete actions
//             setAppointments(appointments.filter(app => app.id !== appointmentID));
//         } catch (error) {
//             console.error(`Error ${action} appointment`, error);
//         }
//     };

//     return (
//         <div className='pendApp'>
//             <div className='contain1'>
//                 <h1>Pending Appointments</h1>
//                 <button onClick={pendingBack}>Back</button>
//             </div>
//             <div className='contain2'>
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>Patient ID</th>
//                             <th>Patient Name</th>
//                             <th>Doctor Name</th>
//                             <th>Date</th>
//                             <th>Mode</th>
//                             <th>Appointment Type</th>
//                             <th>Approve</th>
//                             <th>Delete</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {appointments.map((appointment) => (
//                             <tr key={appointment.id}>
//                                 <td>{appointment.patientID}</td>
//                                 <td>{appointment.patientName}</td>
//                                 <td>{appointment.doctorName}</td>
//                                 <td>{appointment.date}</td>
//                                 <td>{appointment.mode}</td>
//                                 <td>{appointment.appointmentType}</td>
//                                 <td><button className='approve' onClick={() => handleAppointmentAction(appointment.id, 'approve')}>Approve</button></td>
//                                 <td><button className='delete' onClick={() => handleAppointmentAction(appointment.id, 'delete')}>Delete</button></td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }

// export default PendingApp;

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
                const response = await axios.get('http://localhost:3001/admin/pendingAppointments');
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
            setAppointments(appointments.filter(app => app.appointment_id !== appointmentID));
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
                            <th>Time Slot</th>
                            <th>Mode</th>
                            <th>Type</th>
                            <th>Approve</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map((appointment) => (
                            <tr key={appointment.appointment_id}>
                                <td>{appointment.patient_id}</td>
                                <td>{appointment.patient_name}</td>
                                <td>{appointment.doctor_name}</td>
                                <td>{appointment.appointment_date}</td>
                                <td>{appointment.time_slot}</td>
                                <td>{appointment.appointment_mode}</td>
                                <td>{appointment.appointment_type}</td>
                                <td><button className='approve' onClick={() => handleAppointmentAction(appointment.appointment_id, 'approve')}>Approve</button></td>
                                <td><button className='delete' onClick={() => handleAppointmentAction(appointment.appointment_id, 'delete')}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default PendingApp;
