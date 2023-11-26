import React,{useState} from 'react'
import './LoginRegister.css'
import logo from '../assets/logo.png'
import desk from '../assets/desk2.png'
import axios from 'axios';
import { useHistory } from 'react-router-dom';



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

  const history = useHistory();
  const submitClick = () => {
    const apiUrl = 'http://localhost:3001/user/MartinDow/signin';
  
    axios.post(apiUrl, {
      userid: inputName,
      password: inputPass,
      role: role,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      console.log('API Response:', response);
      console.log('Status Code:', response.status);
      console.log('Response Data:', response.data);
    
      // Assuming the first element of the outer array contains the user data
      const userData = response.data[0];
    
      console.log('User Data:', userData);
    
      // Assuming the role is the fourth element in the inner array
      const userRole = userData[3];
    
      if (userRole.toLowerCase() === 'admin') {
        console.log('Redirecting to Admin Dashboard');
        history.push('/admin-dashboard');
      } else {
        console.log('User role is not admin. Do something else.');
      }
    })
    .catch(error => {
      // Log the error
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
          <button >Forget Password</button>
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
