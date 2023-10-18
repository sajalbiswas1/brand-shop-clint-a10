import { Link } from "react-router-dom";


const SignUp = () => {
    return (
        <div>
            <h2>Sign UP</h2>
            <form className="card-body">
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
            <Link to={'/logIn'}><button className="btn btn-primary">LogIn</button></Link>

        </div>
    );
};

export default SignUp;