// import React from 'react'
// import logo from '../assets/logo.png'
// import './AdminDash.css'
// import profile from '../assets/profile.png'
// import { useHistory } from 'react-router-dom';


// const AdminDash = () => {
//     const history = useHistory();

//     const AdminOut = ()=>{
//         console.log("Admin Log out");
//         history.push('/login');
//     };

//     const allApp = ()=>{
//         console.log("show all Appointments");
//         history.push('/admin-all');
//     };

//     const managedoc = () =>{
//         console.log("manage doc");
//         history.push('/manage-doctors');
//     };

//     const adddoc = () =>{
//         console.log("Add Doctors")
//         history.push('/add-doctor');
//     };
//      const PendApp = () =>{
//         console.log("show pending Apps");
//         history.push('/pending-appointments');

//      };
//   return (
//     <div className='adminDash'>
//         <div className='contain1'>
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
//                     <p>Admin</p>
//                 </div>
//             </div>
//             <h1>Admin Dashboard</h1>
//             <button onClick={AdminOut}>Log out</button>
//         </div>
//         <div className='contain3'>
//             <div className='row1'>
//                 <button onClick={PendApp}>Pending Appointments</button>
//                 <button onClick={allApp}>All Appointments</button>
//             </div>
//             <div className='row2'>
//                 <button onClick={managedoc}>Manage Doctors</button>
//                 <button onClick={adddoc}>Add Doctors</button>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default AdminDash

import React from 'react';
import logo from '../assets/logo.png';
import './AdminDash.css';
import profile from '../assets/profile.png';
import { useHistory } from 'react-router-dom';

const AdminDash = () => {
    const history = useHistory();

    const AdminOut = () => {
        console.log("Admin Log out");
        history.push('/login');
    };

    const allApp = () => {
        console.log("show all Appointments");
        history.push('/admin-all');
    };

    const managedoc = () => {
        console.log("manage doc");
        history.push('/manage-doctors');
    };

    const adddoc = () => {
        console.log("Add Doctors");
        history.push('/add-doctor');
    };

    const PendApp = () => {
        console.log("show pending Apps");
        history.push('/pending-appointments');
    };

    return (
        <div className='adminDash'>
            <div className='contain1'>
                <div className='logoName'>
                    <img src={logo} alt="Logo"/>
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
                        <img src={profile} alt="Profile"/>
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

export default AdminDash;
