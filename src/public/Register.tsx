// derpendency imports
import React, { Fragment, useState } from 'react';
import { ChangeEvent } from 'react';
import { Redirect } from 'react-router-dom';
import axios from '../axios.config';

interface Form {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    passwordConfirm: string,
    error? : any  
}

// register component
const Register = () => {
    const initForm: Form = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordConfirm: '',
    }   

    const [form, setForm] = useState(initForm);
    const [loading, setLoading] = useState(false);
    const [redirect, setRedirect] = useState(false);

    const inputChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const submitRegisterFormHandler = async (e:any) => {
        e.preventDefault();
        setLoading(true);
        try{
            await axios.post('admin-auth/register', {
                first_name: form.firstName,
                last_name: form.lastName,
                email: form.email,
                password: form.password,
                password_confirm: form.passwordConfirm 
            });
            setLoading(false);
            setRedirect(true);
        }catch(e){
            setLoading(false);
            setForm({...form,error: e.response.data.errors});
            console.log(form.error);
        }
    }

    if(redirect){
        return <Redirect to='/login'/>
    }

    return (
        <Fragment>
            <div className='page-container'>
                <main className="form-signin">
                    <form onSubmit={submitRegisterFormHandler}>
                        <img className="mb-4" src="/logo192.png" alt="react-admin-logo" width="57" height="57"/>
                            <h1 className="h3 mb-3 fw-normal">Please register</h1>
                            <div className="form-floating">
                                <input type="text" name='firstName' onChange={inputChangeHandler} className={`form-control ${form.error && form.error.first_name? 'is-invalid': ''}`} id="firstName" placeholder="first name" />
                                <label htmlFor="firstName">First name</label>
                                {form.error && form.error.first_name && <span className='invalid-feedback'>{form.error.first_name}</span>}
                            </div>
                            <div className="form-floating">
                                <input type="text" name='lastName' className={`form-control ${form.error && form.error.last_name? 'is-invalid': ''}`} onChange={inputChangeHandler} id="lastName" placeholder="last name" />
                                <label htmlFor="lastName">Last name</label>
                                {form.error && form.error.last_name && <span className='invalid-feedback'>{form.error.last_name}</span>}
                            </div>

                            <div className="form-floating">
                                <input type="email" name='email' className={`form-control ${form.error && form.error.email? 'is-invalid': ''}`} onChange={inputChangeHandler} id="email" placeholder="name@example.com" />
                                <label htmlFor="email">Email address</label>
                                {form.error && form.error.email && <span className='invalid-feedback'>{form.error.email}</span>}
                            </div>

                            <div className="form-floating">
                                <input type="password" name='password' className={`form-control ${form.error && form.error.password? 'is-invalid': ''}`} onChange={inputChangeHandler} id="password" placeholder="Password" />
                                <label htmlFor="password">Password</label>
                                {form.error && form.error.password && <span className='invalid-feedback'>{form.error.password}</span>}
                            </div>

                            <div className="form-floating">
                                <input type="password" name='passwordConfirm' className={`form-control ${form.error && form.error.password_confirm? 'is-invalid': ''}`} onChange={inputChangeHandler} id="passwordConfirm" placeholder="Password" />
                                <label htmlFor="passwordConfirm">Confirm password</label>
                                {form.error && form.error.password_confirm && <span className='invalid-feedback'>{form.error.password_confirm}</span>}
                            </div>

                            <button className="w-100 btn btn-lg btn-primary" type="submit" disabled={loading}>{loading ? 'Please wait': 'Register'}</button>
                            <p className="mt-5 mb-3 text-muted text-center">© 2017–2021, React admin</p>
                        </form>
                </main>
            </div>  
        </Fragment>
    )
}

export default Register;
