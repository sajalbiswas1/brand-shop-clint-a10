import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { AiFillStar } from "react-icons/ai";

const MyCard = () => {
    const { user } = useContext(AuthContext);
    const [data, setData] = useState([])
    console.log(user.email)
    useEffect(() => {
        fetch(`https://brand-shop-server-ma10.vercel.app/userCard/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, [user.email])


    const handleUserCardDelete = (id)=>{

        Swal.fire({
            title: 'Are you sure?',
            // text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://brand-shop-server-ma10.vercel.app/userCard/remove/${id}`,{
                    method:'DELETE'
                })
                .then(res=>res.json())
                .then(data =>{
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                    console.log(data)
                })
                
                  
            }
          })


        console.log(id)
        
    }


   
    return (
        <div>
            {
                data.map((myCard) => <div key={myCard._id} className="bg-[#fff2f2]">
            <div className="w-10/12 pt-12">
            <div className="w-4/6 m-auto grid grid-cols-2 ">
            <div className="">
            <img className="h-52" src={myCard.image} alt="" />
            </div>
           <div>
           <p className="border px-2 border-t-green-500 border-x-green-500"><span className="font-bold">Name : </span>{myCard.name}</p>
            <p className="border px-2 border-t-green-500 border-x-green-500"><span className="font-bold">Brand : </span>{myCard.brand}</p>
            <p className="border px-2 border-t-green-500 border-x-green-500"><span className="font-bold">Type : </span>{myCard.type}</p>
            <p className="border px-2 border-t-green-500 border-x-green-500"><span className="font-bold">Price : </span>${myCard.price}</p>
            <p className="border px-2 border-t-green-500 border-x-green-500"><span className="font-bold">Description : </span>{myCard.description.slice(0,80)}...</p>
            <p className="border px-2 border-t-green-500 border-x-green-500 border-b-green-500 flex items-center gap-1"><span className="font-bold">Rating : </span>{myCard.rating} <AiFillStar className="text-orange-400"></AiFillStar></p>
            <div className="flex justify-center">
            <button onClick={()=>handleUserCardDelete(myCard._id)} className="p-1 my-3 text-green-600 hover:bg-red-200  mb-3 border-green-600 border font-semibold">Remove</button>
           </div>
            </div>
        </div>
        </div>
        </div> )
              }
        </div>
    );
};

export default MyCard;

//  <div>
//             <div className="overflow-x-auto">
//                 <table className="table">
                    
//                     <thead>
//                         <tr>
                            
//                             <th>Brand</th>
//                             <th>Name</th>
//                             <th>price</th>
//                             <th>Delete</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             data.map((myCard, idx) => 
                            
                            
//                                 <tr key={myCard._id}>
//                                     <th>{idx +1}</th>
//                                     <td>{myCard.brand}</td>
//                                     <td>{myCard.price}</td>
//                                     <td onClick={()=>handleUserCardDelete(myCard._id)}> <button>X</button> </td>
//                                 </tr>
//                             )
//                         }
//                     </tbody>
//                 </table>
//             </div>
//         </div> 