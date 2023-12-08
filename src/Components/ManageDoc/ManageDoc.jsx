// // import React,{useState} from 'react'
// // import './ManageDoc.css'
// // import {useHistory} from 'react-router-dom'

// // const ManageDoc = () => {
// //   const history = useHistory();

// //   const manageBack = () =>{
// //     console.log("Back to admin dashboard");
// //     history.push('/admin-dashboard');
// //   };

// //   const docDel = ()=>{
// //     console.log("Delete this doctor");    
// //   };

// //   return (
// //     <div className='managedoctor'>
// //       <div className='contain1'>
// //         <h1>Manage Doctors</h1>
// //         <button onClick={manageBack}>Back</button>
// //       </div>
// //       <div className='contain2'>
// //         <table>
// //                 <div className='headings'>
// //                     <tr>
// //                         <th>Doctor ID</th>
// //                         <th>Doctor Name</th>
// //                         <th>D.O.B</th>
// //                         <th>Phone Number</th>
// //                         <th>Gender</th>
// //                         <th>Department</th>
// //                         <th>Days</th>
// //                         <th>Timing</th>
// //                         <th>Mode</th>
// //                         <th>Keep/Delete</th>
// //                     </tr>
// //                 </div>
// //                 <div className='tableData'>
// //                     <tr>
// //                         <td>123</td>
// //                         <td>Sarah</td>
// //                         <td>12-12-2012</td>
// //                         <td>123456778</td>
// //                         <td>Female</td>
// //                         <td>Cardiology</td>
// //                         <td>M/W</td>
// //                         <td>10:00-12:00</td>
// //                         <td>In person</td>
// //                         <td><button className='delDoc'onClick={docDel}>Delete</button></td>
// //                     </tr>
// //                 </div>
// //         </table>
// //       </div>
// //     </div>
// //   )
// // }

// // export default ManageDoc

// import React, { useState, useEffect } from 'react';
// import './ManageDoc.css';
// import { useHistory } from 'react-router-dom';
// import axios from 'axios'; // Ensure axios is installed

// const ManageDoc = () => {
//     const [doctors, setDoctors] = useState([]);
//     const history = useHistory();

//     useEffect(() => {
//         const fetchDoctors = async () => {
//             try {
//                 const response = await axios.get('http://localhost:3001/admin/allDoctors');
//                 setDoctors(response.data);
//             } catch (error) {
//                 console.error('Error fetching doctors', error);
//             }
//         };

//         fetchDoctors();
//     }, []);

//     const manageBack = () => {
//         console.log("Back to admin dashboard");
//         history.push('/admin-dashboard');
//     };

//     // const docDel = (doctorId) => {
//     //     console.log("Delete this doctor", doctorId);
//     //     // Add logic to delete doctor
//     // };

//     const docDel = async (doctorId) => {
//       console.log("Delete this doctor", doctorId);

//       try {
//           // Send a DELETE request to delete the doctor
//           await axios.delete(`http://localhost:3001/admin/deleteDoctor/${doctorId}`);

//           // Remove the deleted doctor from the state
//           setDoctors(prevDoctors => prevDoctors.filter(doctor => doctor.doctor_id !== doctorId));
//       } catch (error) {
//           console.error('Error deleting doctor', error);
//       }
//   };



//     return (
//         <div className='managedoctor'>
//             <div className='contain1'>
//                 <h1>Manage Doctors</h1>
//                 <button onClick={manageBack}>Back</button>
//             </div>
//             <div className='contain2'>
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>Doctor ID</th>
//                             <th>Doctor Name</th>
//                             <th>D.O.B</th>
//                             <th>Phone Number</th>
//                             <th>Gender</th>
//                             <th>Department</th>
//                             <th>Days</th>
//                             <th>Timing</th>
//                             <th>Mode</th>
//                             <th>Keep/Delete</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {doctors.map(doctor => (
//                             <tr key={doctor.doctor_id}>
//                                 <td>{doctor.doctor_id}</td>
//                                 <td>{doctor.doctor_name}</td>
//                                 <td>{doctor.dob}</td>
//                                 <td>{doctor.phone_number}</td>
//                                 <td>{doctor.gender}</td>
//                                 <td>{doctor.department_name}</td>
//                                 <td>{doctor.day}</td>
//                                 <td>{doctor.time_slot}</td>
//                                 <td>{doctor.mode_of_availibility}</td>
//                                 <td>
//                                     <button className='delDoc' onClick={() => docDel(doctor.doctor_id)}>Delete</button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     )
// }

// export default ManageDoc;


import React, { useState, useEffect } from 'react';
import './ManageDoc.css';
import { useHistory } from 'react-router-dom';
import axios from 'axios'; // Ensure axios is installed

const ManageDoc = () => {
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state
    const history = useHistory();

    useEffect(() => {
      const fetchDoctors = async () => {
          try {
              const response = await axios.get('http://localhost:3001/admin/allDoctors');
              // Check if the response is an array, if not set it to an empty array
              setDoctors(Array.isArray(response.data) ? response.data : []);
          } catch (error) {
              console.error('Error fetching doctors', error);
          } finally {
              setLoading(false); // Update loading state when data fetching is complete
          }
      };
  
      fetchDoctors();
  }, []);
  

    const manageBack = () => {
        console.log("Back to admin dashboard");
        history.push('/admin-dashboard');
    };

    const docDel = async (doctorId) => {
        console.log("Delete this doctor", doctorId);

        try {
            // Send a DELETE request to delete the doctor
            await axios.delete(`http://localhost:3001/admin/deleteDoctor/${doctorId}`);

            // Remove the deleted doctor from the state
            setDoctors(prevDoctors => prevDoctors.filter(doctor => doctor.doctor_id !== doctorId));
        } catch (error) {
            console.error('Error deleting doctor', error);
        }
    };

    return (
        <div className='managedoctor'>
            <div className='contain1'>
                <h1>Manage Doctors</h1>
                <button onClick={manageBack}>Back</button>
            </div>
            <div className='contain2'>
                {loading ? (
                    <p>Loading...</p>
                ) : doctors.length === 0 ? (
                    <p>No doctors found</p>
                ) : (
                    <table>
                        <thead>
                            <tr>
                                <th>Doctor ID</th>
                                <th>Doctor Name</th>
                                <th>D.O.B</th>
                                <th>Phone Number</th>
                                <th>Gender</th>
                                <th>Department</th>
                                <th>Days</th>
                                <th>Timing</th>
                                <th>Mode</th>
                                <th>Keep/Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {doctors.map(doctor => (
                                <tr key={doctor.doctor_id}>
                                    <td>{doctor.doctor_id}</td>
                                    <td>{doctor.doctor_name}</td>
                                    <td>{doctor.dob}</td>
                                    <td>{doctor.phone_number}</td>
                                    <td>{doctor.gender}</td>
                                    <td>{doctor.department_name}</td>
                                    <td>{doctor.day}</td>
                                    <td>{doctor.time_slot}</td>
                                    <td>{doctor.mode_of_availibility}</td>
                                    <td>
                                        <button className='delDoc' onClick={() => docDel(doctor.doctor_id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    )
}

export default ManageDoc;

