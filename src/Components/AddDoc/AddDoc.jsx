import React,{useState} from 'react'
import './AddDoc.css'

const AddDoc = () => {
  const BackAddDoc = () =>{
    console.log("back to admin dashboard");
  };
  
  const [docName, setDocName] = useState('');
  const [docEmail, setDocEmail] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('Married');
  const [docCNIC, setDocCNIC] = useState('');
  const [docDOB, setDocDOB] = useState('');
  const [docDept, setDocDept] = useState('Cardiology');
  const [docPass, setDocPass] = useState('');
  const [docPassCon, setDocPassCon] = useState('');
  const [docContact, setDocContact] = useState('');
  const [docGender, setDocGender] = useState('Male');
  const [docSubCon, setDocSubCon] = useState('');
  const [modeOfAvailability, setModeOfAvailability] = useState('In Person');
  const [docDays, setDocDays] = useState('Mon/Wed');
  const [startTime, setStartTime] = useState('10:00');
  const [endTime, setEndTime] = useState('12:00');
  const [docDesciption, setDocDesciption] = useState('');

  return (
    <div>
      <div className='contain1'>
        <h1>Add Doctor</h1>
      </div>
      <div className='contain2'>
        <h1>Register New Doctor</h1>
        <button onClick={BackAddDoc}>Back</button>
      </div>
      <div className='contain3'>
        <form className='adddoc'>
            <div className='row1'>
                <label htmlFor="name">Full Name:</label>
                <input type="text" name="docName" value={docName} onChange={(e)=>setDocName(e.target.value)} id="name"/>
                <label htmlFor="email">Email:</label>
                <input type="email" name="docEmail" value={docEmail} onChange={(e)=>setDocEmail(e.target.value)} id="Email"/>
                <label htmlFor="marital">Marital Status:</label>
                <select id="marital" value={maritalStatus} onChange={(e)=>setMaritalStatus(e.target.value)} >
                    <option value="Marries">Married</option>
                    <option value="Single">Single</option>
                </select>
            </div>
            <div className='row2'>
                <label htmlFor="cnic">Full Name:</label>
                <input type="text" name="docCNIC" id="cnic"/>
                <label htmlFor="dob">D.O.B:</label>
                <input placeholder = "DD-MM-YYYY "type="text" name="docDOB" id="dob"/>

                <label htmlFor="dept">Department:</label>
                <select id="dept">
                    <option value="option1">Cardiology</option>
                    <option value="option2">Dermatology</option>
                </select>
            </div>
            <div className='row3'>
              <label htmlFor="passdoc">Password:</label>
              <input type="passowrd" name="docPass" id="passdoc"/>
              <label htmlFor="confirmdoc">Confirm Password:</label>
              <input type="passowrd" name="docPassCon" id="confirmdoc"/>
              
              <label htmlFor="docCon">Contact:</label>
              <input type="number" name="docContact" id="docCon"/>
            </div>
            <div className='row4'>
              <label htmlFor="docGender">Gender:</label>
              <select id="docGender">
                <option value="option1">Male</option>
                <option value="option2">Female</option>
                <option value="option3">Other</option>
              </select>
              <label htmlFor="subCon">Substitute Contact:</label>
              <input type="number" name="docSubCon" id="subCon"/>

              <lable htmlFor="modeAvail">Mode of Availability:</lable>
              <select>
                <option value="option1">In Person</option>
                <optoin value="option2">Online</optoin>
              </select>
            </div>
            <div className='row5'>
              <label htmlFor="docDays">Days:</label>
              <select>
                <option value="option1">Mon/Wed</option>
                <option value="option2">Tue/Thurs</option>
                <option value="option3">Fri/Sat</option>
              </select>
              <lable htmlFor="startTime">Starting Time</lable>
              <select>
                <option value="option1">10:00</option>
                <option value="optio21">12:00</option>
                <option value="option3">02:00</option>
                <option value="option4">04:00</option>
                <option value="option5">06:00</option>
                <option value="option6">08:00</option>
              </select>

              <label htmlFor="endTine">Ending Time:</label>
              <select>
                <option value="option1">12:00</option>
                <option value="option2">02:00</option>
                <option value="option3">04:00</option>
                <option value="option4">06:00</option>
                <option value="option5">08:00</option>
                <option value="option6">10:00</option>
              </select>
            </div>
            <div className='row6'>
             <label htmlFor="desDoc">Brief Description:</label>
             <input type="text" name="docDesciption" id="desDoc"/>

              <label htmlFor="Cnicdoc">CNIC:</label>
              <input type="number" name="docCNIC" id="Cnicdoc"/>

              <button>Add Doctor</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default AddDoc
