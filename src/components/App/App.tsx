import React from 'react'
import Dashboard from '../Dashboard/Dashboard';
import Menu from '../Menu/Menu';
import Navbar from '../Navbar/Navbar';
import "./App.css";

const App = () => {
  return (
    <div className='App'>
      <Navbar/>
       <div className="container-fluid">
        <div className="row">
          <Menu/>
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <Dashboard/>
          </main>
        </div>
      </div>
    </div>
  )
}



export default App;
