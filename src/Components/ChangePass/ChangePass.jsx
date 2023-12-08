// import React,{useState} from 'react'
// import logo from '../assets/logo.png'
// import './ChangePass.css'
// import { useHistory } from 'react-router-dom';




// const ChangePass = () => {
//   const history = useHistory();
//   const changeBack = ()=>{
//     console.log("Back to login");
//     history.push('/login');
//   };

//   const SubChangePass=()=>{
//     const errorDetail = document.querySelector('.ChErrorBox .ChErrordetail');
//     if(newPassword!=confirmPassword){
//       if(errorDetail){
//         errorDetail.textContent = 'Passwords do not Match!';
//       }
//     }
//     else{
//       if(errorDetail){
//         errorDetail.textContent = '';
//         //query will come
//       }
//     }
//   };

//   const [userId, setUserId] = useState('');
//   const [cnic, setCnic] = useState('');
//   const [favNovel, setFavNovel] = useState('');
//   const [email, setEmail] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   return (
//     <div className='changepass'>
//     <div className='contain1'>
//       <div className='logoName'>
//         <img src={logo}/>
//         <h1>Martin Dow</h1>
//       </div>
//       <div className='qoute'>
//         <h4>Your Safety is Our Number 1 Priority</h4>
//       </div>
//       <div className='info'>
//         <h4>Home</h4>
//         <h4>About Us</h4>
//         <h4>Contact Us</h4>
//       </div>
//     </div>
//     <div className='contain2'>
//         <h1>Change Password</h1>
//         <button onClick={changeBack}>Back</button>
//     </div>
//     <div className='contain3'>
//         <form className='PassChange'>
//         <div className='row1'>
//             <label className='userID' value={userId} onChange={(e) => setUserId(e.target.value)}>User ID:  
//               <input type="text" />
//             </label>
//             <label className='cnic'>CNIC:  
//               <input type="text" value={cnic} onChange={(e) => setCnic(e.target.value)}/>
//             </label>                       
//         </div>
//         <div className='row2'>
//             <label className='favNovel'value={favNovel} onChange={(e) => setFavNovel(e.target.value)}>Favorite Novel:  
//               <input type="text" />
//             </label>
//             <label className='email'>Email:  
//               <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
//             </label>                       
//         </div>

//         <div className='row3'>
//             <label className='newPass'>New Password:  
//               <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
//             </label>
//             <label className='conNewPass'>Confirm Password:  
//               <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
//             </label>                       
//         </div>
//         </form>
//         </div>
//         <div className='contain4'>
//             <div className='ChErrorBox'>
//               <h4 className='Cherror'>Error:</h4>
//               <p className='ChErrordetail'></p>
//             </div>
//             <button onClick={SubChangePass}>Change Password</button>
//         </div>
//     </div>
//   )
// }

// export default ChangePass

import React, { useState } from 'react';
import logo from '../assets/logo.png';
import './ChangePass.css';
import { useHistory } from 'react-router-dom';

const ChangePass = () => {
  const history = useHistory();

  const changeBack = () => {
    console.log('Back to login');
    history.push('/login');
  };

  const SubChangePass = () => {
    // Basic frontend validation
    if (newPassword !== confirmPassword) {
      const errorDetail = document.querySelector('.ChErrorBox .ChErrordetail');
      if (errorDetail) {
        errorDetail.textContent = 'Passwords do not match!';
      }
    } else {
      const errorDetail = document.querySelector('.ChErrorBox .ChErrordetail');
      if (errorDetail) {
        errorDetail.textContent = '';

        // Send a PUT request to update the password
        const userData = {
          userid: userId,
          cnic: cnic,
          favouriteNovel: favNovel,
          newPassword: newPassword,
        };

        fetch('http://localhost:3001/MartinDow/forgotpassword', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.status === 'Password updated successfully') {
              alert('Password updated successfully!');
              history.push('/login');
            } else {
              alert(`Password update failed: ${data.status}`);
            }
          })
          .catch((error) => {
            console.error('Error:', error);
            alert('Error: Unable to connect to the server.');
          });
      }
    }
  };

  const [userId, setUserId] = useState('');
  const [cnic, setCnic] = useState('');
  const [favNovel, setFavNovel] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className='changepass'>
      <div className='contain1'>
        <div className='logoName'>
          <img src={logo} alt="Logo" />
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
        <h1>Change Password</h1>
        <button onClick={changeBack}>Back</button>
      </div>
      <div className='contain3'>
        <form className='PassChange'>
          <div className='row1'>
            <label className='userID' value={userId} onChange={(e) => setUserId(e.target.value)}>
              User ID:
              <input type="text" />
            </label>
            <label className='cnic'>
              CNIC:
              <input type="text" value={cnic} onChange={(e) => setCnic(e.target.value)} />
            </label>
          </div>
          <div className='row2'>
            <label className='favNovel' value={favNovel} onChange={(e) => setFavNovel(e.target.value)}>
              Favorite Novel:
              <input type="text" />
            </label>
            <label className='email'>
              Email:
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
          </div>
          <div className='row3'>
            <label className='newPass'>
              New Password:
              <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
            </label>
            <label className='conNewPass'>
              Confirm Password:
              <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </label>
          </div>
        </form>
      </div>
      <div className='contain4'>
        <div className='ChErrorBox'>
          <h4 className='Cherror'>Error:</h4>
          <p className='ChErrordetail'></p>
        </div>
        <button onClick={SubChangePass}>Change Password</button>
      </div>
    </div>
  );
};

export default ChangePass;
