// dependency imports
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import "./App.css";

// app component imports
import Dashboard from './secured/Dashboard';
import User from './secured/User';
import Login from './public/Login';
import Register from './public/Register';


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
