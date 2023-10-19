import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const MyCard = () => {
    const { user } = useContext(AuthContext);
    const [data, setData] = useState([])
    console.log(user.email)
    useEffect(() => {
        fetch(`https://brand-shop-server-ma10-bxcgvlvse-sajal-biswas-projects.vercel.app/userCard/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, [user.email])
    const handleUserCardDelete = (id)=>{
        console.log(id)
        
        fetch(`https://brand-shop-server-ma10-bxcgvlvse-sajal-biswas-projects.vercel.app/userCard/remove/${id}`,{
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
                                    <td onClick={()=>handleUserCardDelete(myCard._id)}> <button>X</button> </td>
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