import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import StarRatings from "react-star-ratings";
import { useEffect } from "react";


const ProductsDetails = () => {
    const { user } = useContext(AuthContext)
    const card = useLoaderData()
    const { name, brand, type, price, description, rating, image } = card;
    const email = user.email;
    const handleUserCard = () => {
        const userCard = { name, brand, type, price, description, rating, image, email }
        console.log(userCard)
        fetch('https://brand-shop-server-ma10.vercel.app/userCard', {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(userCard)
        })
            .then(res => res.json())
            .then(data => {
                notify()
                console.log(data)
            })
    }
    //toast
    const notify = () => toast.success("Add to Card!", {
        position: toast.POSITION.TOP_CENTER
    });
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    console.log(card)
    return (
        <div className="bg-[#fff2f2]">
            <div className="md:w-10/12 w-11/12 m-auto pt-12">
                <div className="lg:w-8/12 md:w-10/12 m-auto">
                    <img className="w-full" src={card.image} alt="" />
                    <p className="border px-2 border-t-green-500 border-x-green-500"><span className="font-bold">Name : </span>{card.name}</p>
                    <p className="border px-2 border-t-green-500 border-x-green-500"><span className="font-bold">Brand : </span>{card.brand}</p>
                    <p className="border px-2 border-t-green-500 border-x-green-500"><span className="font-bold">Type : </span>{card.type}</p>
                    <p className="border px-2 border-t-green-500 border-x-green-500"><span className="font-bold">Price : </span>${card.price}</p>
                    <p className="border px-2 border-t-green-500 border-x-green-500"><span className="font-bold">Description : </span>{card.description}</p>
                    <div className="border px-2 py-2 border-t-green-500 border-x-green-500 border-b-green-500"><span className="font-bold">Rating : </span><StarRatings rating={parseInt(card.rating)} starRatedColor="orange" starDimension="20px" starSpacing="1px"></StarRatings></div>
                    <div className="flex justify-center">
                        <button onClick={handleUserCard} className="py-2 mt-3 px-5 text-lg text-white hover:bg-green-400 bg-green-600   mb-3  border font-bold">Add to Card</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsDetails;