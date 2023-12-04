import React,{useState} from 'react'
import './DocAllApps.css'
import userEvent from '@testing-library/user-event';

const DocAllApps = () => {
    const [mode,setMode] = useState('');
    const [status, setStatus] = useState('');
    const [type, setType] = useState('');
const Assignpres = ()=>{
    console.log("assign prescription");
};
  return (
    <div className='AllAppsDoc'>
        <div className='contain1'>
            <h1>All Appointments</h1>
            <button className='backtoDash'>Back</button>
        </div>
        <div className='contain2'>
            <table className='docTableApps'>
                    <div className='headings'>
                        <th>Patient Name</th>
                        <th>Date</th>
                        <th>Timing</th>
                        <th>
                            <select onChange={(e) => setMode(e.target.value)}>
                                <option value=''>Mode</option>
                                <option value='online'>Online</option>
                                <option value='Inperson'>In person</option>
                            </select>
                        </th>
                        <th>
                            <select onChange={(e) => setStatus(e.target.value)}>
                                <option value=''>Status</option>
                                <option value='done'>Done</option>
                                <option value='upcoming'>Upcoming</option>
                            </select>
                        </th>
                        <th>Prescription</th>
                        <th>
                            <select onChange={(e) => setType(e.target.value)}>
                                <option value=''>Appointment Type</option>
                                <option value='followup'>Follow up</option>
                                <option value='first'>First</option>
                            </select>
                        </th>
                        
                    </div>
                    <div className='tableData'>
                        <tr>
                            <td>Joe Bond</td>
                            <td>03-11-2023</td>
                            <td>15:30</td>
                            <td>Online</td>
                            <td>Done</td>
                            <td><button onClick={Assignpres} style={{ backgroundColor: '#9083D5' }}>Assign</button></td>
                            <td>Follow Up</td>
                        </tr>
                    </div>
            </table>
        </div>
    </div>
  )
}

export default DocAllApps
