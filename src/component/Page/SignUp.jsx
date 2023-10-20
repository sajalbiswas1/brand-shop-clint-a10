import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignUp = () => {
    const { userSignIn, userProfileUpdate } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('')
    const navigate = useNavigate()
    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const link = form.link.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, link, email, password)
        const obj = { displayName: name, photoURL: link }

        //user update
        const userUpdate = () => {
            userProfileUpdate(obj)
                .then(result => {
                    console.log(result)
                })
                .catch(error => {
                    console.log(error)
                })
        }

        if (password.length < 6) {
            setRegisterError('is less than 6 characters');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError("don't have a capital letter");
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setRegisterError("don't have a small letter");
            return;
        }

        else if (!/[@$!%*?&]/.test(password)) {
            setRegisterError("don't have a special character");
            return;
        }

         //toast
         const notify = () => toast.success("SignUp Successfully!", {
            position: toast.POSITION.TOP_CENTER
        });
        const notify2 = () => toast.error("Already Use email", {
            position: toast.POSITION.TOP_CENTER
        });



        userSignIn(email, password)
            .then(user => {
                notify()
                console.log(user)
                userUpdate()
                navigate('/')
            })
            .catch(error => {
                notify2()
                console.log(error)
                setRegisterError(error.message)
            })

    }
    return (
        <div className="bg-[#fff2f2]">
            <h2 className="text-3xl font-bold text-center py-5">Sign Up</h2>
            <div className="w-1/3 m-auto bg-white p-5">
                <form onSubmit={handleSignIn} className="">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter your name" className="p-2 border border-red-600" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image Url</span>
                        </label>
                        <input type="link" name="link" placeholder="Enter Image url" className="p-2 border border-red-600" required />
                    </div>
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
                        <label className="label">
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="p-1 text-white  bg-green-500 hover:bg-red-200 hover:text-black   mb-3  font-semibold">Sign Up</button>
                    </div>
                </form>
                <p className="text-center text-red-500">{registerError}</p>
                <div className="flex justify-center">
                    <Link to={'/logIn'}><button className="px-1 mt-3  text-blue-500 underline hover:text-blue-600  mb-3  font-semibold">LogIn</button></Link>

                </div>
            </div>
        </div>
    );
};

export default SignUp;