// dependency imports
import React, { Component } from 'react';
import { Fragment } from 'react';
import '../public/Public.css';

// Login auth component
class Login extends Component {
    render() {
        return (
            <Fragment>
                <div className='page-container'>
                    <main className="form-signin">
                        <form>
                            <img className="mb-4" src="/logo192.png" alt="react-admin-logo" width="57" height="57"/>
                                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                                <div className="form-floating">
                                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label htmlFor="floatingInput">Email address</label>
                                </div>

                                <div className="form-floating">
                                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                    <label htmlFor="floatingPassword">Password</label>
                                </div>

                                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                                <p className="mt-5 mb-3 text-muted text-center">© 2017–2021, React admin</p>
                            </form>
                    </main>
                </div>    
            </Fragment>
        )
    }
}

export default Login;
