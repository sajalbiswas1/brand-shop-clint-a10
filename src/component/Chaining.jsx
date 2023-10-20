import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import PropTypes from 'prop-types';

const Chaining = ({children}) => {
    const {user,loading}=useContext(AuthContext);


    if(loading){
        return <div className="flex justify-center h-screen"><span className="loading loading-spinner loading-lg"></span></div>
    }
    if(user){
        return children;
    }
};

Chaining.propTypes = {
    children: PropTypes.node
}
export default Chaining;