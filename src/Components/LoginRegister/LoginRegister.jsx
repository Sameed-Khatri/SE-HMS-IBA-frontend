import React,{useState} from 'react'
import './LoginRegister.css'
import logo from '../assets/logo.png'
import desk from '../assets/desk2.png'
import axios from 'axios';



const LoginRegister = () => {
  const user ="";
  const userRole = (role) =>{
    console.log(role);
    setRole(role);
  };

  const [inputName,setInputName] = useState('');

  const handleNameChange = (event) =>{
    setInputName(event.target.value);
  }
  //variables for retireved data
  const retName='';
  const retPass='';
  
  //here data query will come for fetching password and id
  //const submitClick = ()=>{
    //if(retName==inputName && retPass==inputPass){
      console.log("okay");
    //}
   // else{
     // console.log("not okay")
   // }
  
  //};


  const submitClick = () => {
    // Assuming your API endpoint is at 'http://your-api-url/MartinDow/signin'
    const apiUrl = 'http://your-api-url/MartinDow/signin';

    // Make a POST request to the API
    axios.post(apiUrl, {
      userid: inputName,
      password: inputPass,
      role: role,
    })
    .then(response => {
      // Handle the API response here
      console.log('API Response:', response.data);
      // You can add more logic based on the response from the API
    })
    .catch(error => {
      // Handle errors
      console.error('Error calling API:', error);
    });
  };


  const [inputPass,setInputPass] = useState('');

  const handlePassChange = (event) =>{
    console.log(event.target.value);
    setInputPass(event.target.value);
  }
  
  const [role,setRole] = useState('');


  return (
    <div className='logReg'>
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
      <div className='signIn'>
        <h1>Sign In</h1>
        <h1>Role: {role}</h1>
        <div type="hidden" className='input'>
          
          <label htmlFor="name">User ID:</label>
          <input type="text" value={inputName} onChange={handleNameChange} name="userName" id="name"/>
          
          <label htmlFor="pass">Password:</label>
          <input type="password" value={inputPass} onChange={handlePassChange} name="userPass" id="npassme"/>
        </div>
        <div className='signUpIn'>
          <button onClick={submitClick}>Sign In</button>
          <button>Sign Up</button>
        </div>
        <div className='pass'>
          <button>Forget Password</button>
          <button>Change Password</button>
        </div>
      </div>
      <div className='logobtn'>
        <div className='rolesbtn'>
              <button className='admin' onClick={() => userRole('Admin')} >Admin</button>
              <button className='patient'onClick={() => userRole('Patient')}>Patient</button>
              <button className='doctor'onClick={() => userRole('Doctor')}>Doctor</button>
        </div>
        <div>
          <img src={desk}/>
        </div>
      </div>
    </div>

    </div>
  )
}

export default LoginRegister
