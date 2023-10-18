import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const LogIn = () => {
    const {userLogin,googleLogin}=useContext(AuthContext);
    const [logInError, setLogInError] = useState('');

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log( email, password)

        userLogin(email, password)
            .then(user => {
                console.log(user)
            })
            .catch(error => {
                console.log(error)
                setLogInError(error.message)
            })

    }
    //google logIn
    const handleGoogleLogIn =()=>{
        googleLogin()
        .then(user =>{
            console.log(user)
        })
        .catch(error =>{
            console.log(error)
        })
    }
    return (
        

        <div>
            <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
            <p>{logInError}</p>
            <button onClick={handleGoogleLogIn}>LogIn with Google</button>
            <Link to={'/signUp'}><button className="btn btn-primary">SignUp</button></Link>
            
        </div>
    );
};

export default LogIn;