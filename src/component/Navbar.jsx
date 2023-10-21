import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
    const { userSignOut, user } = useContext(AuthContext)
    return (
        <div className="navbar bg-base-100 lg:w-10/12 md:w-10/12 m-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink className="md:text-xl " to={'/'} style={({ isActive }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                color: isActive ? "red" : "",
                                backgroundColor: isActive ? 'white' : '',
                                textDecoration: isActive ? "underline" : '',
                            };
                        }}>Home</NavLink></li>
                        <li><NavLink className="md:text-xl " to={'/addProduct'} style={({ isActive }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                color: isActive ? "red" : "",
                                backgroundColor: isActive ? 'white' : '',
                                textDecoration: isActive ? "underline" : '',
                            };
                        }}>Add Product</NavLink></li>
                        <li><NavLink className="md:text-xl " to={'/myCard'} style={({ isActive }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                color: isActive ? "red" : "",
                                backgroundColor: isActive ? 'white' : '',
                                textDecoration: isActive ? "underline" : '',
                            };
                        }}>My Card</NavLink></li>
                    </ul>
                </div>
               <div className="flex items-center">
               <img className="w-16" src="https://i.ibb.co/rFXQPXF/dda64256-71c9-4ffd-923f-581836c86168.png" alt="" />
                <Link to={'/'}><p className="text-3xl font-bold flex flex-col"><span className="text-orange-500">Gear</span><span className="text-base">Automation</span></p></Link>
               </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink className="md:text-xl " to={'/'} style={({ isActive }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                color: isActive ? "red" : "",
                                backgroundColor: isActive ? 'white' : '',
                                textDecoration: isActive ? "underline" : '',
                            };
                        }}>Home</NavLink></li>
                    <li><NavLink className="md:text-xl " to={'/addProduct'} style={({ isActive }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                color: isActive ? "red" : "",
                                backgroundColor: isActive ? 'white' : '',
                                textDecoration: isActive ? "underline" : '',
                            };
                        }}>Add Product</NavLink></li>
                    <li><NavLink className="md:text-xl " to={'/myCard'} style={({ isActive }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                color: isActive ? "red" : "",
                                backgroundColor: isActive ? 'white' : '',
                                textDecoration: isActive ? "underline" : '',
                            };
                        }}>My Card</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?<>
                     <div className='flex items-center gap-3 pr-4'>
                                <p className='text-xs'>{user.displayName}</p>
                                <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className=""><img className='w-10 h-10 m-auto rounded-full' src={user.photoURL === null ? "https://i.ibb.co/VB17ZCv/user.png" : user?.photoURL} alt="" /></label>
                                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><a onClick={userSignOut}>Sign Out</a></li>
                                    </ul>
                                </div>

                            </div>
                    <Link ><button onClick={userSignOut} className="text-white bg-stone-700 rounded-lg px-5 md:block hidden py-2 text-lg font-bold">LogOut</button> </Link>
                    </>
                    :<Link to={'/logIn'} className="text-white bg-stone-700 rounded-lg px-5  py-2 text-lg font-bold">LogIn</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;




