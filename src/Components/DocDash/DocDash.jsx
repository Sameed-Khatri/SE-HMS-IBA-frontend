import React from 'react'
import logo from '../assets/logo.png'
import profile from '../assets/profile.png'
import './DocDash.css'

const DocDash = () => {
    const DoctorOut = () =>{
        console.log("doctor out")
    };

    const Deletebtn = () =>{
        console.log("delete this record");
    };

    const OpenPres = () =>{
        console.log("Open Prescription window");
    };

  return (
    <div className='DashDoc'>
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
                    <p className='DisplayName'>Doctor Name</p>
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
                    <th>Patient Name</th>
                    <th>Date</th>
                    <th>Timing</th>
                    <th>Mode</th>
                    <th>Status</th>
                    <th>Prescription</th>
                    <th>Appointment Type</th>
                    <th>Keep/Delete</th>
                </div>
                <div className='tableData'>
                    <tr>
                        <td>Joe Bond</td>
                        <td>03-11-2023</td>
                        <td>15:20</td>
                        <td>Online</td>
                        <td>done</td>
                        <td><button onClick={OpenPres} className='AssignPres'style={{ backgroundColor: '#9083D5' }}>Assign</button></td>
                        <td>Follow up</td>
                        <td><button onClick={Deletebtn} className='deleteRoc'>Delete</button></td>
                    </tr>
                </div>
            </table>
        </div>
    </div>
  )
}

export default DocDash
