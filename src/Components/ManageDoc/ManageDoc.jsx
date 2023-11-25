import React,{useState} from 'react'
import './ManageDoc.css'

const ManageDoc = () => {
  const manageBack = () =>{
    console.log("Back to admin dashboard");
  };

  const docDel = ()=>{
    console.log("Delete this doctor");    
  };

  return (
    <div className='managedoctor'>
      <div className='contain1'>
        <h1>Manage Doctors</h1>
        <button onClick={manageBack}>Back</button>
      </div>
      <div className='contain2'>
        <table>
                <div className='headings'>
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
                </div>
                <div className='tableData'>
                    <tr>
                        <td>123</td>
                        <td>Sarah</td>
                        <td>12-12-2012</td>
                        <td>123456778</td>
                        <td>Female</td>
                        <td>Cardiology</td>
                        <td>M/W</td>
                        <td>10:00-12:00</td>
                        <td>In person</td>
                        <td><button className='delDoc'onClick={docDel}>Delete</button></td>
                    </tr>
                </div>
        </table>
      </div>
    </div>
  )
}

export default ManageDoc
