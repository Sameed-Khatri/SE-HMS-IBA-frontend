// import React,{useState} from 'react'
// import './AddDoc.css'
// import { useHistory } from 'react-router-dom';
// import Axios from 'axios';

// const AddDoc = () => {
//   const history = useHistory();

//   const BackAddDoc = () =>{
//     history.push('/admin-dashboard')
//     console.log("back to admin dashboard");
//   };


  
//   const [docName, setDocName] = useState('');
//   const [docEmail, setDocEmail] = useState('');
//   const [maritalStatus, setMaritalStatus] = useState('Married');
//   const [docCNIC, setDocCNIC] = useState('');
//   const [docDOB, setDocDOB] = useState('');
//   const [docDept, setDocDept] = useState('Cardiology');
//   const [docPass, setDocPass] = useState('');
//   const [docPassCon, setDocPassCon] = useState('');
//   const [docContact, setDocContact] = useState('');
//   const [docGender, setDocGender] = useState('Male');
//   const [docSubCon, setDocSubCon] = useState('');
//   const [modeOfAvailability, setModeOfAvailability] = useState('In Person');
//   const [docDays, setDocDays] = useState('Mon/Wed');
//   const [startTime, setStartTime] = useState('10:00');
//   const [endTime, setEndTime] = useState('12:00');
//   const [docDesciption, setDocDesciption] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     const data = {
//       fullName: docName,
//       email: docEmail,
//       cnic: docCNIC,
//       dob: docDOB,
//       gender: docGender,
//       phoneNumber: docContact,
//       substituteContact: docSubCon,
//       departmentID: docDept,
//       briefDescription: docDesciption,
//       modeOfAvailibility: modeOfAvailability,
//       password: docPass,
//       favouriteNovel: maritalStatus,
//       days: docDays,
//       timeSlot: `${startTime} - ${endTime}`,
//     };
  
//     try {
//       const response = await Axios.post('http:localhost:3001/addDoctor', data); // Assuming your API endpoint is at the same domain.
//       if (response.status === 200) {
//         console.log('Doctor added successfully');
//         // You can navigate to a success page or perform any other actions here.
//       } else {
//         console.error('Error adding doctor:', response.data);
//         // Handle the error here, you can display an error message to the user.
//       }
//     } catch (error) {
//       console.error('Error adding doctor:', error);
//       // Handle network or other errors here.
//     }
//   };
  

//   return (
//     <div>
//       <div className='contain1'>
//         <h1>Add Doctor</h1>
//       </div>
//       <div className='contain2'>
//         <h1>Register New Doctor</h1>
//         <button onClick={BackAddDoc}>Back</button>
//       </div>
//       <div className='contain3'>
//         <form className='adddoc'>
//             <div className='row1'>
//                 <label htmlFor="name">Full Name:</label>
//                 <input type="text" name="docName" value={docName} onChange={(e)=>setDocName(e.target.value)} id="name"/>
//                 <label htmlFor="email">Email:</label>
//                 <input type="email" name="docEmail" value={docEmail} onChange={(e)=>setDocEmail(e.target.value)} id="Email"/>
//                 <label htmlFor="marital">Marital Status:</label>
//                 <select id="marital" value={maritalStatus} onChange={(e)=>setMaritalStatus(e.target.value)} >
//                     <option value="Marries">Married</option>
//                     <option value="Single">Single</option>
//                 </select>
//             </div>
//             <div className='row2'>
//                 <label htmlFor="favNovel">Favorite Novel:</label>
//                 <input type="text" name="favNovel" id="favNovel"/>
//                 <label htmlFor="dob">D.O.B:</label>
//                 <input placeholder = "DD-MM-YYYY "type="text" name="docDOB" id="dob"/>

//                 <label htmlFor="dept">Department:</label>
//                 <select id="dept">
//                     <option value="cardiology">Cardiology</option>
//                     <option value="dermatology">Dermatology</option>
//                 </select>
//             </div>
//             <div className='row3'>
//               <label htmlFor="passdoc">Password:</label>
//               <input type="password" name="docPass" id="passdoc"/>
//               <label htmlFor="confirmdoc">Confirm Password:</label>
//               <input type="password" name="docPassCon" id="confirmdoc"/>
              
//               <label htmlFor="docCon">Contact:</label>
//               <input type="number" name="docContact" id="docCon"/>
//             </div>
//             <div className='row4'>
//               <label htmlFor="docGender">Gender:</label>
//               <select id="docGender">
//                 <option value="male">Male</option>
//                 <option value="female">Female</option>
//                 <option value="other">Other</option>
//               </select>
//               <label htmlFor="subCon">Substitute Contact:</label>
//               <input type="number" name="docSubCon" id="subCon"/>

//               <lable htmlFor="modeAvail">Mode of Availability:</lable>
//               <select>
//                 <option value="In Person">In Person</option>
//                 <optoin value="Online">Online</optoin>
//               </select>
//             </div>
//             <div className='row5'>
//               <label htmlFor="docDays">Days:</label>
//               <select>
//                 <option value="M/W">Mon/Wed</option>
//                 <option value="T/T">Tue/Thurs</option>
//                 <option value="F/S">Fri/Sat</option>
//               </select>
//               <lable htmlFor="startTime">Starting Time</lable>
//               <select>
//                 <option value="10:00">10:00</option>
//                 <option value="12:00">12:00</option>
//                 <option value="02:00">02:00</option>
//                 <option value="04:00">04:00</option>
//                 <option value="06:00">06:00</option>
//                 <option value="08:00">08:00</option>
//               </select>

//               <label htmlFor="endTine">Ending Time:</label>
//               <select>
//                 <option value="12:00">12:00</option>
//                 <option value="02:00">02:00</option>
//                 <option value="04:00">04:00</option>
//                 <option value="06:00">06:00</option>
//                 <option value="08:00">08:00</option>
//                 <option value="10:00">10:00</option>
//               </select>
//             </div>
//             <div className='row6'>
//              <label htmlFor="desDoc">Brief Description:</label>
//              <input type="text" name="docDesciption" id="desDoc"/>

//               <label htmlFor="Cnicdoc">CNIC:</label>
//               <input type="number" name="docCNIC" id="Cnicdoc"/>

//               <button type="submit" onSubmit={handleSubmit}>Add Doctor</button>
//             </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default AddDoc

import React, { useState } from 'react';
import './AddDoc.css';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';

const AddDoc = () => {
  const history = useHistory();

  const BackAddDoc = () => {
    history.push('/admin-dashboard');
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
  const [favNovel, setFavNovel] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      docName === '' ||
      docEmail === '' ||
      docCNIC === '' ||
      docDOB === '' ||
      docPass === '' ||
      docPassCon === '' ||
      docContact === '' ||
      docSubCon === '' ||
      docDesciption === '' ||
      favNovel === ''
    ) {
      alert('Please fill in all fields');
      return;
    }

    const data = {
      fullName: docName,
      email: docEmail,
      cnic: docCNIC,
      dob: docDOB,
      gender: docGender,
      phoneNumber: docContact,
      substituteContact: docSubCon,
      departmentName: docDept,
      briefDescription: docDesciption,
      modeOfAvailibility: modeOfAvailability,
      password: docPass,
      favouriteNovel: favNovel,
      days: docDays,
      timeSlot: `${startTime} - ${endTime}`,
    };

    try {
      const response = await Axios.post('http://localhost:3001/admin/addDoctor', data);
      if (response.status === 200) {
        console.log('Doctor added successfully');
      } else {
        console.error('Error adding doctor:', response.data);
        history.push('/admin-dashboard');

      }
    } catch (error) {
      console.error('Error adding doctor:', error);
    }
  };

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
        <form className='adddoc' onSubmit={handleSubmit}>
            <div className='row1'>
                <label htmlFor="name">Full Name:</label>
                <input type="text" name="docName" value={docName} onChange={(e) => setDocName(e.target.value)} id="name"/>
                <label htmlFor="email">Email:</label>
                <input type="email" name="docEmail" value={docEmail} onChange={(e) => setDocEmail(e.target.value)} id="email"/>
                <label htmlFor="marital">Marital Status:</label>
                <select id="marital" value={maritalStatus} onChange={(e) => setMaritalStatus(e.target.value)}>
                    <option value="Married">Married</option>
                    <option value="Single">Single</option>
                </select>
            </div>
            <div className='row2'>
                <label htmlFor="favNovel">Favorite Novel:</label>
                <input type="text" name="favNovel" value={favNovel} onChange={(e) => setFavNovel(e.target.value)} id="favNovel"/>
                <label htmlFor="dob">D.O.B:</label>
                <input type="text" name="docDOB" value={docDOB} onChange={(e) => setDocDOB(e.target.value)} id="dob" placeholder="DD-MM-YYYY"/>

                <label htmlFor="dept">Department:</label>
                <select id="dept" value={docDept} onChange={(e) => setDocDept(e.target.value)}>
                    <option value="Cardiology">Cardiology</option>
                    <option value="Dermatology">Dermatology</option>
                </select>
            </div>
            <div className='row3'>
              <label htmlFor="passdoc">Password:</label>
              <input type="password" name="docPass" value={docPass} onChange={(e) => setDocPass(e.target.value)} id="passdoc"/>
              <label htmlFor="confirmdoc">Confirm Password:</label>
              <input type="password" name="docPassCon" value={docPassCon} onChange={(e) => setDocPassCon(e.target.value)} id="confirmdoc"/>
              
              <label htmlFor="docCon">Contact:</label>
              <input type="number" name="docContact" value={docContact} onChange={(e) => setDocContact(e.target.value)} id="docCon"/>
            </div>
            <div className='row4'>
              <label htmlFor="docGender">Gender:</label>
              <select id="docGender" value={docGender} onChange={(e) => setDocGender(e.target.value)}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <label htmlFor="subCon">Substitute Contact:</label>
              <input type="number" name="docSubCon" value={docSubCon} onChange={(e) => setDocSubCon(e.target.value)} id="subCon"/>

              <label htmlFor="modeAvail">Mode of Availability:</label>
              <select value={modeOfAvailability} onChange={(e) => setModeOfAvailability(e.target.value)}>
                <option value="In Person">In Person</option>
                <option value="Online">Online</option>
              </select>
            </div>
            <div className='row5'>
              <label htmlFor="docDays">Days:</label>
              <select value={docDays} onChange={(e) => setDocDays(e.target.value)}>
                <option value="Mon/Wed">Mon/Wed</option>
                <option value="Tue/Thurs">Tue/Thurs</option>
                <option value="Fri/Sat">Fri/Sat</option>
              </select>
              <label htmlFor="startTime">Starting Time:</label>
              <select value={startTime} onChange={(e) => setStartTime(e.target.value)}>
                <option value="10:00">10:00</option>
                <option value="12:00">12:00</option>
                <option value="02:00">02:00</option>
                <option value="04:00">04:00</option>
                <option value="06:00">06:00</option>
                <option value="08:00">08:00</option>
              </select>

              <label htmlFor="endTime">Ending Time:</label>
              <select value={endTime} onChange={(e) => setEndTime(e.target.value)}>
                <option value="12:00">12:00</option>
                <option value="02:00">02:00</option>
                <option value="04:00">04:00</option>
                <option value="06:00">06:00</option>
                <option value="08:00">08:00</option>
                <option value="10:00">10:00</option>
              </select>
            </div>
            <div className='row6'>
              <label htmlFor="desDoc">Brief Description:</label>
              <input type="text" name="docDesciption" value={docDesciption} onChange={(e) => setDocDesciption(e.target.value)} id="desDoc"/>

              <label htmlFor="Cnicdoc">CNIC:</label>
              <input type="number" name="docCNIC" value={docCNIC} onChange={(e) => setDocCNIC(e.target.value)} id="Cnicdoc"/>

              <button type="submit">Add Doctor</button>
            </div>
        </form>
      </div>
    </div>
  );
}

export default AddDoc;

