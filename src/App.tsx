// dependency imports
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import "./App.css";

// app component imports
import Dashboard from './pages/secured/Dashboard';
import User from './pages/secured/User';
import Login from './pages/public/auth/Login';
import Register from './pages/public/auth/Register';


// App component defination
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path='/' exact component={Dashboard}/>
        <Route path='/user' exact component={User}/>
        <Route path='/login' exact component={Login}/>
        <Route path='/register' exact component={Register}/>
      </BrowserRouter>
    </div>
  )
}



export default App;
