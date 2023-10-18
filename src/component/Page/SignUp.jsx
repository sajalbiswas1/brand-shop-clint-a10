import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const SignUp = () => {
    const { userSignIn } = useContext(AuthContext);
    const [registerError,setRegisterError] = useState('')
    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const link = form.link.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, link, email, password)

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
        

        userSignIn(email, password)
            .then(user => {
                console.log(user)
            })
            .catch(error => {
                console.log(error)
                setRegisterError(error.message)
            })

    }
    return (
        <div>
            <h2>Sign UP</h2>
            <form onSubmit={handleSignIn} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="link" name="link" placeholder="Enter Image Link" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />
                    <label className="label">
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
            <p>{registerError}</p>
            <Link to={'/logIn'}><button className="btn btn-primary">LogIn</button></Link>

        </div>
    );
};

export default SignUp;