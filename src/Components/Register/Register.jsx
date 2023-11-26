import React, {useState} from 'react'
import logo from '../assets/logo.png'
import './Register.css'
import { useHistory } from 'react-router-dom';



const Register = () => {
  const history = useHistory();
  const regBack = ()=>{
    console.log("back to login page")
    history.push('/login')
  };

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('Married');
  const [cnic, setCnic] = useState('');
  const [dob, setDob] = useState('');
  const [insuranceId, setInsuranceId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [favoriteNovel, setFavoriteNovel] = useState('');
  const [gender, setGender] = useState('Male');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emergencyContact, setEmergencyContact] = useState('');
  const [emergencyContactName, setEmergencyContactName] = useState('');
  const [emergencyContactRelation, setEmergencyContactRelation] = useState('');
  const [emergencyContactEmail, setEmergencyContactEmail] = useState('');

  const submitFunc = () =>{
    const errorDetail = document.querySelector('.ErrorBox .errordetail');
    if(password!=confirmPassword){
        console.log("error")
        if (errorDetail) {
        errorDetail.textContent = 'Passwords do not match.';
      }
    }
    else{
     if(errorDetail){
      errorDetail.textContent='';
     }
    }
  };

  
  return (
    <div className='registerNew'>
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
        <h1>Register</h1>
        <button onClick={regBack}>Back</button>
      </div>

      <div className='contain3'>
        <form className='newReg'>
          <div className='row1'>
            <label className='name'>Full Name:  
              <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
            </label>
            <label className='email'>Email:  
              <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
            </label>            
            <label className='status' onChange={(e)=> setMaritalStatus(e.target.value)}>Marital Status:  
              <select>
              <option value="Married">Married</option>
              <option value="Single">Single</option>
              </select>
            </label>            
          </div>
        
          <div className='row2'>
            <label className='cnic'>CNIC:  
              <input type="text" value={cnic} onChange={(e)=> {setCnic(e.target.value)}} />
            </label>
            <label className='birth'>D.O.B:  
              <input type="text" value={dob} onChange={(e)=> setDob(e.target.value)} placeholder='DD-MM-YYYY'/>
            </label>            
            <label className='insurance'>Insurance ID:  
              <input type="text" value={insuranceId} onChange={(e)=> setInsuranceId(e.target.value)}/>
            </label> 
          </div>

          <div className='row3'>
            <label className='pass'>Password:  
              <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} />
            </label>
            <label className='conPass'>Confrim Password:  
              <input type="password" value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)} />
            </label>            
            <label className='novel'>Favorite Novel:  
              <input type="text" value={favoriteNovel} onChange={(e)=> setFavoriteNovel(e.target.value)}/>
            </label>            
          </div>

          <div className='row4'>
            <label className='gender' onChange={(e)=> setGender(e.target.value)}>Gender:  
            <select>
              <option value="Male" >Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            </label>
            <label className='phone'>Phone Number: 
              <input type="number" value={phoneNumber} onChange={(e)=> setPhoneNumber(e.target.value)} />
            </label>            
            <label className='emerCon'>Emergenct Contact: 
              <input type="number"value={emergencyContact} onChange={(e)=> setEmergencyContact(e.target.value)}/>
            </label>            
          </div>
          
          <div className='row5'>
            <label className='emerName'>Emergency Contact Name:  
              <input type="text" value={emergencyContactName} onChange={(e)=> setEmergencyContactName(e.target.value)} />
            </label>
            <label className='emerRel'>Emergency Contact Relation:  
              <input type="email" value={emergencyContactRelation} onChange={(e)=> setEmergencyContactRelation(e.target.value)} />
            </label>            
            <label className='emerEmail'>Emergency Contact Email:  
             <input type="email" value={setEmergencyContactEmail} onChange={(e)=> setEmergencyContactEmail(e.target.value)}/>
            </label>            
          </div>
        </form>
        <div className='contain4'>
          <div className='ErrorBox'>
            <h4 className='error'>Error:</h4>
            <p className='errordetail'></p>
          </div>
          <button type="submit" className='signUp' onClick={submitFunc}> Sign Up</button>
        </div>
      </div>
      
    </div>
  )
}

export default Register
