import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const LogIn = () => {
    const { userLogin, googleLogin } = useContext(AuthContext);
    const [logInError, setLogInError] = useState('');
    const navigate = useNavigate();

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        userLogin(email, password)
            .then(user => {
                notify()
                console.log(user)
                navigate('/')
            })
            .catch(error => {
                notify2()
                console.log(error)
                setLogInError(error.message)
            })
    }

    //toast
    const notify = () => toast.success("LogIn Successfully!", {
        position: toast.POSITION.TOP_CENTER
    });
    const notify2 = () => toast.error("email or password wrong", {
        position: toast.POSITION.TOP_CENTER
    });
    //google logIn
    const handleGoogleLogIn = () => {
        googleLogin()
            .then(user => {
                notify()
                console.log(user)
                navigate('/')
            })
            .catch(error => {
                notify2()
                console.log(error)
            })
    }
    return (


        <div className="bg-[#fff2f2] pb-10">
            <h3 className="text-3xl font-bold text-center py-5">SignIn</h3>
            <div className="lg:w-4/12 md:w-6/12 w-9/12 m-auto border bg-white p-5">
                <form onSubmit={handleLogin} className="">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter your email" className="p-2 border border-red-600" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Enter your password" className="p-2 border border-red-600" required />

                    </div>
                    <div className="form-control mt-6">
                        <button className="p-1 text-white  bg-green-500 hover:bg-red-200 hover:text-black   mb-3  font-semibold">Login</button>
                    </div>
                </form>
                <p className="text-red-500">{logInError}</p>
                <div className="flex flex-col justify-center">
                    <button className="px-1 mt-3  text-green-600 hover:bg-red-200  mb-3 border-green-600 border font-semibold" onClick={handleGoogleLogIn}>LogIn with Google</button>
                    <div className="flex justify-center">
                        <Link to={'/signUp'}><button className="px-1 mt-3  text-blue-500 underline hover:text-blue-600  mb-3  font-semibold">SignUp</button></Link>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default LogIn;