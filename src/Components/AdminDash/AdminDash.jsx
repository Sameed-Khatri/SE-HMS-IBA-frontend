import React from 'react'
import logo from '../assets/logo.png'
import './AdminDash.css'
import profile from '../assets/profile.png'


const AdminDash = () => {

    const AdminOut = ()=>{
        console.log("Admin Log out")
    };

    const allApp = ()=>{
        console.log("show all Appointments")
    };

    const managedoc = () =>{
        console.log("manage doc")
    };

    const adddoc = () =>{
        console.log("Add Doctors")
    };
     const PendApp = () =>{
        console.log("show pending Apps")
     };
  return (
    <div className='adminDash'>
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
                    <p>Admin</p>
                </div>
            </div>
            <h1>Admin Dashboard</h1>
            <button onClick={AdminOut}>Log out</button>
        </div>
        <div className='contain3'>
            <div className='row1'>
                <button onClick={PendApp}>Pending Appointments</button>
                <button onClick={allApp}>All Appointments</button>
            </div>
            <div className='row2'>
                <button onClick={managedoc}>Manage Doctors</button>
                <button onClick={adddoc}>Add Doctors</button>
            </div>
        </div>
    </div>
  )
}

export default AdminDash
