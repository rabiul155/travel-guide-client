import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa"
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../UserContext';

const Register = () => {

    const navigate = useNavigate();

    const { createUser, createUserGoogle, verifyEmail } = useContext(AuthContext);


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.username.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        createUser(email, password)
            .then(result => {
                toast.success('Accout created successfully!!!')
                verifyEmail()
                    .then(() => {
                        toast.success('email verification message sent')
                    })
                const user = result.user;
                console.log(user);
                form.reset();
                navigate('/')

            })
            .catch(error => {
                console.error('create user error ', error)
            })
    }

    const handleGoogleSignIn = () => {
        createUserGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/');
            })
            .catch(e => {
                console.error('google sign in error', e)
            })
    }

    return (
        <div className=' d-flex justify-content-center align-items-center login'>
            <div className=' d-flex justify-content-center align-items-center'>
                <form onSubmit={handleSubmit} className='log-in pt-4 ps-5 pe-5'>

                    <h2 className=' text-center'>Register</h2>
                    <hr />

                    <div className="form-outline mb-3">
                        <label className="form-label " htmlFor="form2Example1">Username</label>
                        <input name='username' type="text" id="form2Example1" className="form-control search-field" />
                    </div>

                    <div className="form-outline mb-3">
                        <label className="form-label " htmlFor="form2Example1">Email address</label>
                        <input name='email' type="email" id="form2Example1" className="form-control search-field" />
                    </div>


                    <div className="form-outline mb-4">
                        <label className="form-label " htmlFor="form2Example2">Password</label>
                        <input name='password' type="password" id="form2Example2" className="form-control search-field" />

                    </div>


                    <button type="submit" className="btn btn-primary btn-block mb-3 w-100">Register</button>

                    <div className="text-center">

                        <p className=' m-1 p-0'>or sign up with</p>

                        <button onClick={handleGoogleSignIn} type="button" className="btn btn-link btn-floating mx-1">
                            <FaGoogle className=' fs-5'></FaGoogle>
                        </button>

                        <button type="button" className="btn btn-link btn-floating mx-1">
                            <FaFacebook className=' fs-5'></FaFacebook>
                        </button>

                        <button type="button" className="btn btn-link btn-floating mx-1">
                            <FaGithub className=' fs-5'></FaGithub>
                        </button>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;