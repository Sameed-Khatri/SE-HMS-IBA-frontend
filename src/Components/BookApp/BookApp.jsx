import React, {useState} from 'react'
import './BookApp.css'
import { useHistory } from 'react-router-dom';

const BookApp = () => {

  const [department, setDepartment] = useState('');
  const [date, setDate] = useState('');
  const [appointmentMode, setAppointmentMode] = useState('');
  const [appointmentType, setAppointmentType] = useState('');
  const [doctor, setDoctor] = useState('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [medicalHistory, setMedicalHistory] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const errorDetail = document.querySelector('.ErrorBox .errordetail');
    // Validation check
    if (department === '' || date === '' || appointmentMode === '' || appointmentType === '' || doctor === '' || selectedTimeSlot === '' || medicalHistory === '') {
        errorDetail.textContent = 'Error';
    }
    else{
      errorDetail.textContent = "";
    }

  };
  const backtoDash = () =>{
      console.log("back to dash")
    };
  return (
    <div className='AppBooking'>
      <div className='contain1'>
        <h1>Book An Appointment</h1>
        <button onClick={backtoDash}>Back</button>
      </div>
      <div className='contain2'>
        <form className='BookingForm'>
          <div className='formRow'>
            <div>
              <label for="depSelect">Department</label>
              <select id="depSelect" value={department} onChange={(e) => setDepartment(e.target.value)}>
                <option value="">Select Department</option>
                <option value="cardiology">Cardiology</option>
                <option value="dermatology">Dermatology</option>
              </select>
            </div>
            <div>
              <label for="DateSelect" ></label>
              <input id="DateSelect" placeholder='DD-MM-YYYY'value={date} onChange={(e)=> setDate(e.target.value)}></input>
            </div>
          </div>
          <div className='formRow'>
            <div>
              <label for="modeSelect">Appointment Mode</label>
              <select id="modeSelect" value={appointmentMode} onChange={(e) => setAppointmentMode(e.target.value)}>
                <option value="">Select Mode</option>
                <option value="InPerson">In Person</option>
                <option value="online">Online</option>
              </select>
            </div>
            <div>
              <label for="typeSelect">Appointment Type</label>
              <select id="typeSelect" value={appointmentType} onChange={(e) => setAppointmentType(e.target.value)}>
                <option value="">Select Type</option>
                <option value="followup">Follow Up</option>
                <option value="first">First</option>
              </select>
            </div>
          </div>
          <div className='formRow'>
            <div>
              <label for= "docSelect">Doctor</label>
              <select id="docSelect" value={doctor} onChange={(e) => setDoctor(e.target.value)}>
                <opton value="">Select Doctor</opton>
              </select>
            </div>
            <div className='timePopUp'>
              <label for="timePop"> Time Pop Up:</label>
              <p id="timePop" className='popTime'>hello</p>
            </div>
          </div>
          <div className="formRow">
            <div>
              <label for="slotSelect">Select Slot</label>
              <select id="slotSelect" value={selectedTimeSlot} onChange={(e) => setSelectedTimeSlot(e.target.value)}>
                <option value="">Select Slot</option>
              </select>
            </div>
            <div>
              <label for="medHis">Medical History</label>
              <input tpye="text"></input>
            </div>
          </div>
        </form>
      </div>
      <div className='contain3'>
          <div className='ErrorBox'>
            <h4 className='error'>Error:</h4>
            <p className='errordetail'></p>
          </div>
          <button type="submit" className='signUp' onClick={handleFormSubmit}> Submit</button>
        </div>
    </div>
  )
}

export default BookApp
