// dependency imports
import React, { Fragment } from 'react';
import Menu from './components/Menu';
import Navbar from './components/Navbar';

interface Props {
    children: any
}

// protected component wrapper
const Wrapper = (props:Props) => {
    const {children} = props;
    
    return (
        <Fragment>
            <Navbar/>
            <div className="container-fluid">
                <div className="row">
                    <Menu/>
                    
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        {children}
                    </main>
                </div>
            </div>
        </Fragment>
    )
}

export default Wrapper
