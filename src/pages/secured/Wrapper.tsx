// dependency imports
import React, { Fragment, useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import axios from '../../axios.config';

// app component imports
import Menu from '../../components/Menu';
import Navbar from '../../components/Navbar';

interface Props {
    children: any
}

// protected component wrapper
const Wrapper = (props:Props) => {
    const {children} = props;
    const router = useHistory();

    const [redirect, setRedirect] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProfile();
        if(redirect){
            router.push('/login')
        }
    }, [redirect, router]);

    const getProfile = () => {    
        axios.get('profile').
            then(() => {
                setRedirect(false);
                setLoading(false); 
            }).catch(e => {
                setRedirect(true);
                setLoading(false);
            });
    }

    if(loading){
        return <p>Please wait</p>
    }

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
