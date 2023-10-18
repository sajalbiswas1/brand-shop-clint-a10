import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const MyCard = () => {
    const { user } = useContext(AuthContext);
    const [data, setData] = useState([])
    console.log(user.email)
    useEffect(() => {
        fetch(`http://localhost:5000/userCard/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, [user.email])
    const handleUserCardDelete = (id)=>{
        
        fetch(`http://localhost:5000/userCard/remove/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data)
        })
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            
                            <th>Brand</th>
                            <th>Name</th>
                            <th>price</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((myCard, idx) => 
                            
                            
                                <tr key={myCard._id}>
                                    <th>{idx +1}</th>
                                    <td>{myCard.brand}</td>
                                    <td>{myCard.price}</td>
                                    <td onClick={()=>handleUserCardDelete(myCard._id)}>X</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCard;