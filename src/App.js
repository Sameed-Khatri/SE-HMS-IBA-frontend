import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginRegister from './Components/LoginRegister/LoginRegister.jsx';
import Register from './Components/Register/Register.jsx';
import ChangePass from './Components/ChangePass/ChangePass.jsx';
import AdminDash from './Components/AdminDash/AdminDash.jsx';
import AdminAll from './Components/AdminAll/allAppointments.jsx';
import PendingApp from './Components/PendingApp/PendingApp.jsx';
import ManageDoc from './Components/ManageDoc/ManageDoc.jsx';
import AddDoc from './Components/AddDoc/AddDoc.jsx';

// function App() {
//   return (
//     <div>
//     {/*<LoginRegister/>*/}
//      {/*<Register/>*/}
//      {/*<ChangePass/>*/}
//      <AdminDash/>
//      {/*<AdminAll/>*/}
//      {/*<PendingApp/>*/}     
//      {/*<ManageDoc/>*/}
//      {/*<AddDoc/>*/}

//     </div>
//   );
// }

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginRegister} />
        <Route path="/register" component={Register} />
        <Route path="/change-password" component={ChangePass} />
        <Route path="/admin-dashboard" component={AdminDash} />
        <Route path="/admin-all" component={AdminAll} />
        <Route path="/pending-appointments" component={PendingApp} />
        <Route path="/manage-doctors" component={ManageDoc} />
        <Route path="/add-doctor" component={AddDoc} />
        <Route path="/" component={LoginRegister} />
      </Switch>
    </Router>
  );
}

export default App;
