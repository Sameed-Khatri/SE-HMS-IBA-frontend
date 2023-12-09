import React from 'react'
import './PatientDash.css'
import logo from '../assets/logo.png'
import profile from '../assets/profile.png'
import { useHistory} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState,useEffect } from 'react';



const PatientDash = () => {
    const { selectionInfo } = useSelector((state) => state.selection);
    const history = useHistory();
    console.log({ selectionInfo });
    const { userId } = useParams();

    const curUserID = {userId}.userId;
    console.log(curUserID);
    console.log({userId});

    const [upcomingAppointments, setUpcomingAppointments] = useState([]); // State to store upcoming appointments

    // Function to fetch upcoming appointments
    const fetchUpcomingAppointments = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/patient/fetchUpcomingAppointments/${curUserID}`);
            setUpcomingAppointments(response.data);
        } catch (error) {
            console.error('Error fetching upcoming appointments', error);
        }
    };

    useEffect(() => {
        fetchUpcomingAppointments(); // Fetch upcoming appointments when the component mounts
    }, []);


    const bookingPage = () =>{
        console.log("Go to booking page")
        history.push(`/book-appointment/${curUserID}`)
        
    };

    const PatientOut = () =>{
        //history.push('/login');
        console.log("patient log out");
        history.push('/login')
    };

    const ViewAllApp = () =>{
        console.log("View all appointments");
    };

    const ViewAllPres = () =>{
        console.log("View All presciptions");
    };

    const viewPres = () =>{
        console.log("Jump to prescriptions")
    };
  return (
    <div className='PatientDashbaord'>
            <div className='contain1'>
            <div className='logoName'>
                <img src={logo}/>
                <h1>Martin Dow</h1>
            </div>
            <div className='qoute'>
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
                    <img src={profile}/>
                </div>
                <div className='role'>
                    <p className='DisplayName'>{userId}</p>
                </div>
            </div>
            <h1>Patient Dashboard</h1>
            <button onClick={PatientOut}>Log out</button>
        </div>
        <div className='contain3'>
            <button onClick={ViewAllApp}>Appointments</button>
            <button onClick={ViewAllPres}>Presciptions</button>
        </div>
        <div className='contain4'>
            <table className='PatientApp'>
            <thead className="headings">
                        <tr>
                            <th>Appointment ID</th>
                            <th>Doctor's Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Mode</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    {upcomingAppointments && upcomingAppointments.length > 0 ? (
                    <tbody className="tableData">
                        {upcomingAppointments.map(appointment => (
                            <tr key={appointment.appointment_id}>
                                <td>{appointment.appointment_id}</td>
                                <td>{appointment.doctor_name}</td>
                                <td>{appointment.appointment_date}</td>
                                <td>{appointment.time_slot}</td>
                                <td>{appointment.appointment_mode}</td>
                                <td>{appointment.appointment_status}</td>
                            </tr>
                        ))}
                    </tbody>
                    ) : (
                        <div className="errorPrompt">No Upcoming Appointments</div>
  
          )};
                
            </table>
            <table className='PatientPres'>
                 <div className='headings'>
                    <th>Prescription ID</th>
                    <th>Doctor's Name</th>
                    <th>Prescription</th>
                    <th>Date</th>
                </div>
                <div className='tableData'>
                    <tr>
                    </tr>
                </div>
                
            </table>
        </div>
        <div className='contain5'>
            <button className = 'bookPageBtn' onClick={bookingPage}>Book an Appointment</button>
        </div>
    </div>
  )
}

export default PatientDash
