import React,{useState} from 'react'
import './allAppointments.css'

const AllAppointments = () => {
  
  const allAppBack=()=>{
    console.log("Back to Dashboard");
  };

  const [mode, setMode] = useState('');

  const modeChange = (e)=>{
    setMode(e.target.value);
    console.log(e.target.value)

  };

  const [status,setStatus] = useState('');
  const statusChange=(e)=>{
    setStatus(e.target.value);
    console.log(e.target.value);
  };

  const [type, setType] = useState('');
  return (
    <div className='adminAll'>
      <div className='contain1'>
        <h1>All Appointments</h1>
        <button onClick={allAppBack}>Back</button>
      </div>
      <div className='contain2'>
        <table>
          <div className='headings'>
              <tr>
                <th>Appointment ID</th>
                <th>Patient ID</th>
                <th>Patient Name</th>
                <th>Doctor ID</th>
                <th>Dcotor Name</th>
                <th>Date</th>
                <th onChange={modeChange}>            
                    <select>
                        <option value = "option1">Mode</option>
                        <option value = "Online">Online</option>
                        <option value = "InPerson">In Person</option>
                    </select>
                </th>
                <th>
                    <select onChange={statusChange}>
                        <option value="option1">Status</option>
                        <option value="Done">Done</option>
                        <option value="Cancel">Cancel</option>
                    </select>
                </th>
                <th>
                    <select on onChange={(e)=>{setType(e.target.value)}}>
                    <option value="option1">Type</option>
                    <option value="FollowUp">Follow up</option>
                    <option value="First">First</option>
                    </select>
                </th>
              </tr>
            </div>
            <div className='tableData'>
              <tr> 
                <td> 123</td>
                <td>456</td>
                <td>john</td>
                <td>789</td>
                <td>Sarah</td>
                <td>12-12-2012</td>
                <td>Online</td>
                <td>Aprroved</td>
                <td>first</td>
              </tr>
            </div>
        </table>
      </div>
    </div>
  )
}


export default AllAppointments
