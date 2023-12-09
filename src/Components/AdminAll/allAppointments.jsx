// import React,{useState} from 'react'
// import './allAppointments.css'
// import {useHistory} from 'react-router-dom'

// const AllAppointments = () => {
//   const history = useHistory();

//   const allAppBack=()=>{
//     console.log("Back to Dashboard");
//     history.push('/admin-dashboard');
//   };

//   const [mode, setMode] = useState('');

//   const modeChange = (e)=>{
//     setMode(e.target.value);
//     console.log(e.target.value)

//   };

//   const [status,setStatus] = useState('');
//   const statusChange=(e)=>{
//     setStatus(e.target.value);
//     console.log(e.target.value);
//   };

//   const [type, setType] = useState('');
//   return (
//     <div className='adminAll'>
//       <div className='contain1'>
//         <h1>All Appointments</h1>
//         <button onClick={allAppBack}>Back</button>
//       </div>
//       <div className='contain2'>
//         <table>
//           <div className='headings'>
//               <tr>
//                 <th>Appointment ID</th>
//                 <th>Patient ID</th>
//                 <th>Patient Name</th>
//                 <th>Doctor ID</th>
//                 <th>Dcotor Name</th>
//                 <th>Date</th>
//                 <th onChange={modeChange}>            
//                     <select>
//                         <option value = "option1">Mode</option>
//                         <option value = "Online">Online</option>
//                         <option value = "InPerson">In Person</option>
//                     </select>
//                 </th>
//                 <th>
//                     <select onChange={statusChange}>
//                         <option value="option1">Status</option>
//                         <option value="Done">Done</option>
//                         <option value="Cancel">Cancel</option>
//                     </select>
//                 </th>
//                 <th>
//                     <select on onChange={(e)=>{setType(e.target.value)}}>
//                     <option value="option1">Type</option>
//                     <option value="FollowUp">Follow up</option>
//                     <option value="First">First</option>
//                     </select>
//                 </th>
//               </tr>
//             </div>
//             <div className='tableData'>
//               <tr> 
//                 <td> 123</td>
//                 <td>456</td>
//                 <td>john</td>
//                 <td>789</td>
//                 <td>Sarah</td>
//                 <td>12-12-2012</td>
//                 <td>Online</td>
//                 <td>Aprroved</td>
//                 <td>first</td>
//               </tr>
//             </div>
//         </table>
//       </div>
//     </div>
//   )
// }


// export default AllAppointments
// import React, { useState, useEffect } from 'react';
// import './allAppointments.css';
// import { useHistory } from 'react-router-dom';
// import axios from 'axios';

// const AllAppointments = () => {
//   const history = useHistory();
//   const [appointments, setAppointments] = useState([]);
//   const [statusMessage, setStatusMessage] = useState('');
//   const [mode, setMode] = useState('');
//   const [status, setStatus] = useState('');
//   const [type, setType] = useState('');

//   useEffect(() => {
//     fetchAppointments();
//   }, []);

//   const fetchAppointments = async () => {
//     try {
//       const response = await axios.get('http://localhost:3001/admin/allAppointments');
//       if (response.data.status === 'no appointments made') {
//         setStatusMessage(response.data.status);
//       } else {
//         setAppointments(response.data);
//       }
//     } catch (error) {
//       console.error('Error fetching appointments:', error);
//       setStatusMessage('Error fetching appointments');
//     }
//   };

//   const allAppBack = () => {
//     console.log("Back to Dashboard");
//     history.push('/admin-dashboard');
//   };

//   const modeChange = (e) => {
//     setMode(e.target.value);
//     console.log(e.target.value);
//   };

//   const statusChange = (e) => {
//     setStatus(e.target.value);
//     console.log(e.target.value);
//   };

//   const typeChange = (e) => {
//     setType(e.target.value);
//     console.log(e.target.value);
//   };

//   return (
//     <div className='adminAll'>
//       <div className='contain1'>
//         <h1>All Appointments</h1>
//         <button onClick={allAppBack}>Back</button>
//       </div>
//       <div className='contain2'>
//         {appointments && appointments.length > 0 ? (
//           <table>
//             <thead>
//               <tr>
//                 <th>Appointment ID</th>
//                 <th>Patient ID</th>
//                 <th>Patient Name</th>
//                 <th>Doctor ID</th>
//                 <th>Doctor Name</th>
//                 <th>Date</th>
//                 <th>
//                   <select value={mode} onChange={modeChange}>
//                     <option value="option1">Mode</option>
//                     <option value="Online">Online</option>
//                     <option value="InPerson">In Person</option>
//                   </select>
//                 </th>
//                 <th>
//                   <select value={status} onChange={statusChange}>
//                     <option value="option1">Status</option>
//                     <option value="Done">Done</option>
//                     <option value="Cancel">Cancel</option>
//                   </select>
//                 </th>
//                 <th>
//                   <select value={type} onChange={typeChange}>
//                     <option value="option1">Type</option>
//                     <option value="FollowUp">Follow up</option>
//                     <option value="First">First</option>
//                   </select>
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {appointments.map(appointment => (
//                 <tr key={appointment.appointment_id}>
//                   <td>{appointment.appointment_id}</td>
//                   <td>{appointment.patient_id}</td>
//                   <td>{appointment.patient_name}</td>
//                   <td>{appointment.doctor_id}</td>
//                   <td>{appointment.doctor_name}</td>
//                   <td>{appointment.date_time}</td>
//                   <td>{appointment.appointment_mode}</td>
//                   <td>{appointment.appointment_status}</td>
//                   <td>{appointment.appointment_type}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <div>{statusMessage}</div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AllAppointments;

import React, { useState, useEffect } from 'react';
import './allAppointments.css';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const AllAppointments = () => {
  const history = useHistory();
  const [appointments, setAppointments] = useState([]);
  const [statusMessage, setStatusMessage] = useState('');
  const [mode, setMode] = useState('');
  const [status, setStatus] = useState('');
  const [type, setType] = useState('');

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await axios.get('http://localhost:3001/admin/allAppointments');
      if (response.data.status === 'no appointments made') {
        setStatusMessage(response.data.status);
      } else {
        setAppointments(response.data);
      }
    } catch (error) {
      console.error('Error fetching appointments:', error);
      setStatusMessage('Error fetching appointments');
    }
  };

  const allAppBack = () => {
    console.log("Back to Dashboard");
    history.push('/admin-dashboard');
  };

  const searchAppointments = async () => {
    try {
      const response = await axios.get('http://localhost:3001/admin/searchAppointments', {
        params: { mode, status, type },
      });
      if (response.data.status === 'no appointments found') {
        setStatusMessage(response.data.status);
      } else {
        setAppointments(response.data);
      }
    } catch (error) {
      console.error('Error searching appointments:', error);
      setStatusMessage('Error searching appointments');
    }
  };

  return (
    <div className='adminAll'>
      <div className='contain1'>
        <h1>All Appointments</h1>
        <button onClick={allAppBack}>Back</button>
        <button onClick={searchAppointments}>Search</button>
      </div>
      <div className='contain2'>
        
          <table>
            <thead>
              <tr>
                <th>Appointment ID</th>
                <th>Patient ID</th>
                <th>Patient Name</th>
                <th>Doctor ID</th>
                <th>Doctor Name</th>
                <th>Date</th>
                <th>
                  <select value={mode} onChange={e => setMode(e.target.value)}>
                    <option value="">Mode</option>
                    <option value="Online">Online</option>
                    <option value="In Person">In Person</option>
                  </select>
                </th>
                <th>
                  <select value={status} onChange={e => setStatus(e.target.value)}>
                    <option value="">Status</option>
                    <option value="Scheduled">Scheduled</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </th>
                <th>
                  <select value={type} onChange={e => setType(e.target.value)}>
                    <option value="">Type</option>
                    <option value="Follow Up">Follow up</option>
                    <option value="First">First</option>
                  </select>
                </th>
              </tr>
            </thead>
            {appointments && appointments.length > 0 ? (
            <tbody>
              {appointments.map(appointment => (
                <tr key={appointment.appointment_id}>
                  <td>{appointment.appointment_id}</td>
                  <td>{appointment.patient_id}</td>
                  <td>{appointment.patient_name}</td>
                  <td>{appointment.doctor_id}</td>
                  <td>{appointment.doctor_name}</td>
                  <td>{appointment.appointment_date}</td>
                  <td>{appointment.appointment_mode}</td>
                  <td>{appointment.appointment_status}</td>
                  <td>{appointment.appointment_type}</td>
                </tr>
              ))}
            </tbody>
                    ) : (
                      <div className="errorPrompt">No such Data</div>

        )}
          </table>

      </div>
    </div>
  );
};

export default AllAppointments;

