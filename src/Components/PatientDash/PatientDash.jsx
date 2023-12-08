import React from 'react'
import './PatientDash.css'
import logo from '../assets/logo.png'
import profile from '../assets/profile.png'
import { useHistory } from 'react-router-dom';

const PatientDash = () => {
    const history = useHistory();

    const bookingPage = () =>{
        console.log("Go to booking page")
        
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
                    <p className='DisplayName'>Patient Name</p>
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
            <div className='headings'>
                    <th>Date</th>
                    <th>Doctor's Name</th>
                    <th>Time</th>
                    <th>Chamber</th>
                    <th>Status</th>
                </div>
                <div className='tableData'>
                    <tr>
                        <td>30-10-2023</td>
                        <td>Travis Head</td>
                        <td>10:00</td>
                        <td>online</td>
                        <td>Scheduled</td>
                    </tr>
                </div>
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
                        <td>123</td>
                        <td>Travis Head</td>
                        <td><button onClick={viewPres} className='viewPres'>View</button></td>
                        <td>30-10-2023</td>
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
