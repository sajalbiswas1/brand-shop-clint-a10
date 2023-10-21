import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";


const ProductsDetails = () => {
    const {user}= useContext(AuthContext)
    const card = useLoaderData()
    const {name, brand, type, price, description, rating, image}= card;
    const email = user.email;
    const handleUserCard = ()=>{
    const userCard = {name, brand, type, price, description, rating, image,email}
    console.log(userCard)
        fetch('https://brand-shop-server-ma10.vercel.app/userCard',{
            method:'POST',
            headers:{
                "content-type":"application/json",
            },
            body: JSON.stringify(userCard)
        })
        .then(res =>res.json())
        .then(data =>{
            notify()
            console.log(data)
        })
    }
    //toast
    const notify = () => toast.success("Add to Card!", {
        position: toast.POSITION.TOP_CENTER
    });
    console.log(card)
    return (
        <div className="bg-[#fff2f2]">
            <div className="w-10/12 pt-12">
            <div className="w-1/3 m-auto">
            <img src={card.image} alt="" />
            <p className="border px-2 border-t-green-500 border-x-green-500"><span className="font-bold">Name : </span>{card.name}</p>
            <p className="border px-2 border-t-green-500 border-x-green-500"><span className="font-bold">Brand : </span>{card.brand}</p>
            <p className="border px-2 border-t-green-500 border-x-green-500"><span className="font-bold">Type : </span>{card.type}</p>
            <p className="border px-2 border-t-green-500 border-x-green-500"><span className="font-bold">Price : </span>${card.price}</p>
            <p className="border px-2 border-t-green-500 border-x-green-500"><span className="font-bold">Description : </span>{card.description}</p>
            <p className="border px-2 border-t-green-500 border-x-green-500 border-b-green-500"><span className="font-bold">Rating : </span>{card.rating}</p>
            <div className="flex justify-center">
            <button onClick={handleUserCard} className="p-1 my-3 text-green-600 hover:bg-red-200  mb-3 border-green-600 border font-semibold">Add to Card</button>
            </div>
        </div>
        </div>
        </div>
    );
};

export default ProductsDetails;