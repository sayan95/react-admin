// dependency imports
import React, { useState, Fragment, ChangeEvent, SyntheticEvent } from 'react';
import { useHistory } from 'react-router-dom';
import axios from '../../../axios.config';
import './Public.css';

interface LoginForm {
    loading? : boolean,
    email: string,
    password: string,
    error? : any
}

// Login auth component
const Login = () => {
    const router = useHistory();
    const loginForm: LoginForm = {
        email: '',
        password: '',
        loading: false,
        error: ''
    }

    const [form, setForm] = useState(loginForm);

    const inpuChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        });
    }

    const loginHandler = async(e:SyntheticEvent) => {
        e.preventDefault();
        setForm({...form, loading: true});
        try{
            const res=await axios.post('admin-auth/login',{
                email: form.email,
                password: form.password
            });
            await res && setForm({...form, loading: false});
            router.push('/');
        }catch(e){
            setForm({
                ...form, 
                loading: false,
                error: e.response.data.errors
            });
        }
    }   

    return (
        <Fragment>
            <div className='page-container'>
                <main className="form-signin">
                    <form onSubmit={loginHandler}>
                        <img className="mb-4" src="/logo192.png" alt="react-admin-logo" width="57" height="57"/>
                            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                            <div className="form-floating">
                                <input type="email" name='email' className={`form-control ${form.error && form.error.email ? 'is-invalid': undefined}`} id="floatingInput" onChange={inpuChangeHandler} placeholder='email@abc.com...'/>
                                <label htmlFor="floatingInput">Email address</label>
                                {form.error && form.error.email && <span className='invalid-feedback'>{form.error.email}</span> }
                            </div>

                            <div className="form-floating">
                                <input type="password" name='password' className={`form-control ${form.error && form.error.password ? 'is-invalid': undefined}`} id="floatingPassword" onChange={inpuChangeHandler} placeholder='Password'/>
                                <label htmlFor="floatingPassword">Password</label>
                                {form.error && form.error.password && <span className='invalid-feedback'>{form.error.password}</span> }
                            </div>

                            <button disabled={form.loading} className="w-100 btn btn-lg btn-primary" type="submit">{form.loading ? 'Signing in...' : 'Sign in' }</button>
                            <p className="mt-5 mb-3 text-muted text-center">© 2017–2021, React admin</p>
                        </form>
                </main>
            </div>    
        </Fragment>
    )
}

export default Login;
