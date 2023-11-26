import React from 'react'
import './PendingApp.css'
import {useHistory} from 'react-router-dom'


const PendingApp = () => {
    const history = useHistory();
    const pendingBack = ()=>{
        console.log("back to admin Dashboard");
        console.log(history);
        history.push('/admin-dashboard');
    };

    const appApp = ()=>{
        console.log("approve Appointment");
    };

    const delApp = () =>{
        console.log("delete Appointment");
    };

  return (
    <div className='pendApp'>
        <div className='contain1'>
            <h1>Pending Appointments</h1>
            <button onClick={pendingBack}>Back</button>
        </div>
        <div className='contain2'>
            <table>
                <div className='headings'>
                    <tr>
                        <th>Patient ID</th>
                        <th>Patient Name</th>
                        <th>Doctor Name</th>
                        <th>Date</th>
                        <th>Mode</th>
                        <th>Appointmen Type</th>
                        <th>Approve</th>
                        <th>Keep/Delete</th>
                    </tr>
                </div>
                <div className='tableData'>
                    <tr>
                        <td>123</td>
                        <td>John</td>
                        <td>Sarah</td>
                        <td>12-12-2012</td>
                        <td>online</td>
                        <td>follow up</td>
                        <td><button className='approve' onClick={appApp}>Approve</button></td>
                        <td><button className='delete'onClick={delApp}>Delete</button></td>
                    </tr>
                </div>
            </table>
        </div>
    </div>
  )
}

export default PendingApp
