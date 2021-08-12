// dependency imports
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import "./App.css";

// app component imports
import Dashboard from './secured/Dashboard';
import Menu from './secured/components/Menu';
import Navbar from './secured/components/Navbar';
import User from './secured/User';


// App component defination
const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar/>
        <div className="container-fluid">
          <div className="row">
            <Menu/>
            
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <Route path='/' exact component={Dashboard}/>
                <Route path='/user' exact component={User}/>
            </main>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}



export default App;
