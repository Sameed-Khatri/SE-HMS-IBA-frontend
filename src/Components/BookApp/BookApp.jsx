// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import './BookApp.css';
// // import { useHistory } from 'react-router-dom';
// // import { useParams } from 'react-router-dom';


// // const BookApp = () => {
// //   const history = useHistory();
// //   const { userId } = useParams();
// //   console.log({userId}.userId);
// //   const curUserID = {userId}.userId;
// //   console.log(curUserID);

// //   const [department, setDepartment] = useState('');
// //   const [date, setDate] = useState('');
// //   const [appointmentMode, setAppointmentMode] = useState('');
// //   const [appointmentType, setAppointmentType] = useState('');
// //   const [doctor, setDoctor] = useState('');
// //   const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
// //   const [medicalHistory, setMedicalHistory] = useState('');
// //   const [doctors, setDoctors] = useState([]);
// //   const [timeSlots, setTimeSlots] = useState([]);

// //   useEffect(() => {
// //     if (department && date && appointmentType && appointmentMode) {
// //       fetchDoctors();
// //     }
// //   }, [department, date, appointmentType, appointmentMode]);

// //   const fetchDoctors = async () => {
// //     try {
// //       const response = await axios.get('http://localhost:3001/patient/searchDoctors', {
// //         params: {
// //           department: department,
// //           date: date,
// //           appointmentMode: appointmentMode,
// //         }
// //       });
// //       setDoctors(response.data);
// //       setTimeSlots(response.data.map(doctor => doctor.timeSlot));
// //     } catch (error) {
// //       console.error('Error fetching doctors', error);
// //     }
// //   };

// //   const handleFormSubmit = async (event) => {
// //     event.preventDefault();
// //     const errorDetail = document.querySelector('.ErrorBox .errordetail');
// //     if (department === '' || date === '' || appointmentMode === '' || appointmentType === '' || doctor === '' || selectedTimeSlot === '' || medicalHistory === '') {
// //       errorDetail.textContent = 'Error';
// //     } else {
// //       try {
// //         const patientID = curUserID; // Replace this with actual patient ID
// //         const response = await axios.post(`http://localhost:3001/patient/bookAppointment/${patientID}`, {
// //           department: department,
// //           date: date,
// //           appointmentMode: appointmentMode,
// //           appointmentType: appointmentType,
// //           doctorName: doctor,
// //         });
// //         errorDetail.textContent = 'Appointment booked successfully';
// //       } catch (error) {
// //         console.error('Error booking appointment', error);
// //         errorDetail.textContent = 'Error booking appointment';
// //       }
// //     }
// //   };

// //   const backtoDash = () => {
// //     console.log("back to dash")
// //     history.push('/patient-dashboard')
// //   };

// //   return (
// //     <div className='AppBooking'>
// //       <div className='contain1'>
// //         <h1>Book An Appointment</h1>
// //         <button onClick={backtoDash}>Back</button>
// //       </div>
// //       <div className='contain2'>
// //         <form className='BookingForm' onSubmit={handleFormSubmit}>
// //           <div className='formRow'>
// //             <div>
// //               <label htmlFor="depSelect">Department</label>
// //               <select id="depSelect" value={department} onChange={(e) => setDepartment(e.target.value)}>
// //                 <option value="">Select Department</option>
// //                 <option value="Cardiology">Cardiology</option>
// //                 <option value="Dermatology">Dermatology</option>
// //               </select>
// //             </div>
// //             <div>
// //               <label htmlFor="DateSelect"></label>
// //               <input id="DateSelect" placeholder='YYYY-MM-DD' value={date} onChange={(e) => setDate(e.target.value)} />
// //             </div>
// //           </div>
// //           <div className='formRow'>
// //             <div>
// //               <label htmlFor="modeSelect">Appointment Mode</label>
// //               <select id="modeSelect" value={appointmentMode} onChange={(e) => setAppointmentMode(e.target.value)}>
// //                 <option value="">Select Mode</option>
// //                 <option value="In Person">In Person</option>
// //                 <option value="online">Online</option>
// //               </select>
// //             </div>
// //             <div>
// //               <label htmlFor="typeSelect">Appointment Type</label>
// //               <select id="typeSelect" value={appointmentType} onChange={(e) => setAppointmentType(e.target.value)}>
// //                 <option value="">Select Type</option>
// //                 <option value="followup">Follow Up</option>
// //                 <option value="first">First</option>
// //               </select>
// //             </div>
// //           </div>
// //           <div className='formRow'>
// //             <div>
// //               <label htmlFor="docSelect">Doctor</label>
// //               <select id="docSelect" value={doctor} onChange={(e) => {
// //                 setDoctor(e.target.value);
// //                 const selectedDoctor = doctors.find(doc => doc.name === e.target.value);
// //                 if (selectedDoctor) {
// //                   setTimeSlots(selectedDoctor.timeSlots);
// //                 }
// //               }}>
// //                 <option value="">Select Doctor</option>
// //                 {doctors.map((doc, index) => (
// //                   <option key={index} value={doc.name}>{doc.name}</option>
// //                 ))}
// //               </select>
// //             </div>
// //             {doctor && (
// //               <div className='timePopUp'>
// //                 <label htmlFor="timePop"> Time Slot:</label>
// //                 <select id="timePop" value={timeSlots} onChange={(e) => setTimeSlots(e.target.value)}>
// //                   <option value="">Select Time Slot</option>
// //                   {timeSlots.map((time, index) => (
// //                     <option key={index} value={time}>{time}</option>
// //                   ))}
// //                 </select>
// //               </div>
// //             )}
// //           </div>
// //           <div className="formRow">
// //             <div>
// //               <label htmlFor="medHis">Medical History</label>
// //               <input type="text" value={medicalHistory} onChange={(e) => setMedicalHistory(e.target.value)} />
// //             </div>
// //           </div>
// //           <div className='contain3'>
// //             <div className='ErrorBox'>
// //               <h4 className='error'>Error:</h4>
// //               <p className='errordetail'></p>
// //             </div>
// //             <button type="submit" className='signUp'>Submit</button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default BookApp;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './BookApp.css';
// import { useHistory, useParams } from 'react-router-dom';

// const BookApp = () => {
//     const history = useHistory();
//     const { userId } = useParams();
//     const curUserID = userId;

//     const [department, setDepartment] = useState('');
//     const [date, setDate] = useState('');
//     const [appointmentMode, setAppointmentMode] = useState('');
//     const [appointmentType, setAppointmentType] = useState('');
//     const [doctor, setDoctor] = useState('');
//     const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
//     const [medicalHistory, setMedicalHistory] = useState('');
//     const [doctors, setDoctors] = useState([]);
//     const [timeSlots, setTimeSlots] = useState([]);

//     useEffect(() => {
//         if (department && date && appointmentType && appointmentMode) {
//             fetchDoctors();
//         }
//     }, [department, date, appointmentType, appointmentMode]);

//     const fetchDoctors = async () => {
//         try {
//             const response = await axios.get('http://localhost:3001/patient/searchDoctors', {
//                 params: {
//                     department: department,
//                     date: date,
//                     appointmentMode: appointmentMode,
//                 }
//             });
//             setDoctors(response.data);
//             setTimeSlots([]);
//         } catch (error) {
//             console.error('Error fetching doctors', error);
//         }
//     };

//     const handleFormSubmit = async (event) => {
//         event.preventDefault();
//         const errorDetail = document.querySelector('.ErrorBox .errordetail');
//         if (department === '' || date === '' || appointmentMode === '' || appointmentType === '' || doctor === '' || selectedTimeSlot === '' || medicalHistory === '') {
//             errorDetail.textContent = 'Error';
//         } else {
//             try {
//                 const patientID = curUserID;
//                 const response = await axios.post(`http://localhost:3001/patient/bookAppointment/${patientID}`, {
//                     department: department,
//                     date: date,
//                     appointmentMode: appointmentMode,
//                     appointmentType: appointmentType,
//                     doctorName: doctor,
//                     timeSlot: selectedTimeSlot,
//                     medicalHistory: medicalHistory
//                 });
//                 errorDetail.textContent = 'Appointment booked successfully';
//             } catch (error) {
//                 console.error('Error booking appointment', error);
//                 errorDetail.textContent = 'Error booking appointment';
//             }
//         }
//     };

//     const backtoDash = () => {
//         history.push('/patient-dashboard');
//     };

//     return (
//         <div className='AppBooking'>
//             <div className='contain1'>
//                 <h1>Book An Appointment</h1>
//                 <button onClick={backtoDash}>Back</button>
//             </div>
//             <div className='contain2'>
//                 <form className='BookingForm' onSubmit={handleFormSubmit}>
//                     <div className='formRow'>
//                         <div>
//                             <label htmlFor="depSelect">Department</label>
//                             <select id="depSelect" value={department} onChange={(e) => setDepartment(e.target.value)}>
//                                 <option value="">Select Department</option>
//                                 <option value="Cardiology">Cardiology</option>
//                                 <option value="Dermatology">Dermatology</option>
//                             </select>
//                         </div>
//                         <div>
//                             <label htmlFor="DateSelect"></label>
//                             <input id="DateSelect" placeholder='YYYY-MM-DD' value={date} onChange={(e) => setDate(e.target.value)} />
//                         </div>
//                     </div>
//                     <div className='formRow'>
//                         <div>
//                             <label htmlFor="modeSelect">Appointment Mode</label>
//                             <select id="modeSelect" value={appointmentMode} onChange={(e) => setAppointmentMode(e.target.value)}>
//                                 <option value="">Select Mode</option>
//                                 <option value="In Person">In Person</option>
//                                 <option value="Online">Online</option>
//                             </select>
//                         </div>
//                         <div>
//                             <label htmlFor="typeSelect">Appointment Type</label>
//                             <select id="typeSelect" value={appointmentType} onChange={(e) => setAppointmentType(e.target.value)}>
//                                 <option value="">Select Type</option>
//                                 <option value="Follow Up">Follow Up</option>
//                                 <option value="First">First</option>
//                             </select>
//                         </div>
//                     </div>
//                     <div className='formRow'>
//                         <div>
//                             <label htmlFor="docSelect">Doctor</label>
//                             <select id="docSelect" value={doctor} onChange={(e) => {
//                                 setDoctor(e.target.value);
//                                 const selectedDoctor = doctors.find(doc => doc.name === e.target.value);
//                                 if (selectedDoctor && Array.isArray(selectedDoctor.timeSlots)) {
//                                     setTimeSlots(selectedDoctor.timeSlots);
//                                 } else {
//                                     setTimeSlots([]);
//                                 }
//                             }}>
//                                 <option value="">Select Doctor</option>
//                                 {doctors.map((doc, index) => (
//                                     <option key={index} value={doc.name}>{doc.name}</option>
//                                 ))}
//                             </select>
//                         </div>
//                         {doctor && timeSlots.length > 0 && (
//                             <div className='timePopUp'>
//                                 <label htmlFor="timePop"> Time Slot:</label>
//                                 <select id="timePop" value={selectedTimeSlot} onChange={(e) => setSelectedTimeSlot(e.target.value)}>
//                                     <option value="">Select Time Slot</option>
//                                     {timeSlots.map((time, index) => (
//                                         <option key={index} value={time}>{time}</option>
//                                     ))}
//                                 </select>
//                             </div>
//                         )}
//                     </div>
//                     <div className="formRow">
//                         <div>
//                             <label htmlFor="medHis">Medical History</label>
//                             <input type="text" value={medicalHistory} onChange={(e) => setMedicalHistory(e.target.value)} />
//                         </div>
//                     </div>
//                     <div className='contain3'>
//                         <div className='ErrorBox'>
//                             <h4 className='error'>Error:</h4>
//                             <p className='errordetail'></p>
//                         </div>
//                         <button type="submit" className='signUp'>Submit</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default BookApp;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BookApp.css';
import { useHistory, useParams } from 'react-router-dom';

const BookApp = () => {
    const history = useHistory();
    const { userId } = useParams();
    const curUserID = userId;

    const [department, setDepartment] = useState('');
    const [date, setDate] = useState('');
    const [appointmentMode, setAppointmentMode] = useState('');
    const [appointmentType, setAppointmentType] = useState('');
    const [doctor, setDoctor] = useState('');
    const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
    const [medicalHistory, setMedicalHistory] = useState('');
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        if (department && date && appointmentType && appointmentMode) {
            fetchDoctors();
        }
    }, [department, date, appointmentType, appointmentMode]);

    const fetchDoctors = async () => {
        try {
            const response = await axios.get('http://localhost:3001/patient/searchDoctors', {
                params: {
                    department: department,
                    date: date,
                    appointmentMode: appointmentMode,
                }
            });
            setDoctors(response.data);
        } catch (error) {
            console.error('Error fetching doctors', error);
        }
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(selectedTimeSlot);
        const errorDetail = document.querySelector('.ErrorBox .errordetail');
        if (department === '' || date === '' || appointmentMode === '' || appointmentType === '' || doctor === '' || selectedTimeSlot === '' || medicalHistory === '') {
            errorDetail.textContent = 'Error';
        } else {
            try {
                const patientID = curUserID;
                const response = await axios.post(`http://localhost:3001/patient/bookAppointment/${patientID}`, {
                    department: department,
                    date: date,
                    appointmentMode: appointmentMode,
                    appointmentType: appointmentType,
                    doctorName: doctor,
                    timeSlot: selectedTimeSlot,
                    medicalHistory: medicalHistory
                });
                errorDetail.textContent = 'Appointment booked successfully';
            } catch (error) {
                console.error('Error booking appointment', error);
                errorDetail.textContent = 'Error booking appointment';
            }
        }
    };

    const backtoDash = () => {
        history.push('/patient-dashboard');
    };

    return (
        <div className='AppBooking'>
            <div className='contain1'>
                <h1>Book An Appointment</h1>
                <button onClick={backtoDash}>Back</button>
            </div>
            <div className='contain2'>
                <form className='BookingForm' onSubmit={handleFormSubmit}>
                    <div className='formRow'>
                        <div>
                            <label htmlFor="depSelect">Department</label>
                            <select id="depSelect" value={department} onChange={(e) => setDepartment(e.target.value)}>
                                <option value="">Select Department</option>
                                <option value="Cardiology">Cardiology</option>
                                <option value="Dermatology">Dermatology</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="DateSelect"></label>
                            <input id="DateSelect" placeholder='YYYY-MM-DD' value={date} onChange={(e) => setDate(e.target.value)} />
                        </div>
                    </div>
                    <div className='formRow'>
                        <div>
                            <label htmlFor="modeSelect">Appointment Mode</label>
                            <select id="modeSelect" value={appointmentMode} onChange={(e) => setAppointmentMode(e.target.value)}>
                                <option value="">Select Mode</option>
                                <option value="In Person">In Person</option>
                                <option value="Online">Online</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="typeSelect">Appointment Type</label>
                            <select id="typeSelect" value={appointmentType} onChange={(e) => setAppointmentType(e.target.value)}>
                                <option value="">Select Type</option>
                                <option value="Follow Up">Follow Up</option>
                                <option value="First">First</option>
                            </select>
                        </div>
                    </div>
                    <div className='formRow'>
                        <div>
                            <label htmlFor="docSelect">Doctor</label>
                            <select id="docSelect" value={doctor} onChange={(e) => {
                                setDoctor(e.target.value);
                                const selectedDoctor = doctors.find(doc => doc.name === e.target.value);
                                if (selectedDoctor) {
                                    setSelectedTimeSlot(selectedDoctor.timeSlots);
                                } else {
                                    setSelectedTimeSlot('');
                                }
                            }}>
                                <option value="">Select Doctor</option>
                                {doctors.map((doc, index) => (
                                    <option key={index} value={doc.name}>{doc.name}</option>
                                ))}
                            </select>
                        </div>
                        {doctor && selectedTimeSlot && (
                            <div className='timePopUp'>
                                <label> Time Slot:</label>
                                <p>{selectedTimeSlot}</p>
                            </div>
                        )}
                    </div>
                    <div className="formRow">
                        <div>
                            <label htmlFor="medHis">Medical History</label>
                            <input type="text" value={medicalHistory} onChange={(e) => setMedicalHistory(e.target.value)} />
                        </div>
                    </div>
                    <div className='contain3'>
                        <div className='ErrorBox'>
                            <h4 className='error'>Error:</h4>
                            <p className='errordetail'></p>
                        </div>
                        <button type="submit" className='signUp'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookApp;
