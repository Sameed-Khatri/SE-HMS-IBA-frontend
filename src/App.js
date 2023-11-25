import logo from './logo.svg';
import './App.css';
import LoginRegister from './Components/LoginRegister/LoginRegister.jsx';
import Register from './Components/Register/Register.jsx';
import ChangePass from './Components/ChangePass/ChangePass.jsx';
import AdminDash from './Components/AdminDash/AdminDash.jsx';
import AdminAll from './Components/AdminAll/allAppointments.jsx';
import PendingApp from './Components/PendingApp/PendingApp.jsx';
import ManageDoc from './Components/ManageDoc/ManageDoc.jsx';
import AddDoc from './Components/AddDoc/AddDoc.jsx';

function App() {
  return (
    <div>
     {/*<LoginRegister/>*/}
     {/*<Register/>*/}
     {/*<ChangePass/>*/}
     {/*<AdminDash/>*/}
     <AdminAll/>
     {/*<PendingApp/>*/}     
     {/*<ManageDoc/>*/}
     {/*<AddDoc/>*/}

    </div>
  );
}

export default App;
