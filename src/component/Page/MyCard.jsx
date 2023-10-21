import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import StarRatings from "react-star-ratings";

const MyCard = () => {
    const { user } = useContext(AuthContext);
    const [data, setData] = useState([])

    fetch(`https://brand-shop-server-ma10.vercel.app/userCard/${user.email}`)
        .then(res => res.json())
        .then(datas => {
            setData(datas)
        })

    const handleUserCardDelete = (_id) => {
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
                fetch(`https://brand-shop-server-ma10.vercel.app/userCard/remove/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(result => {

                        if (result.deletedCount > 0) {

                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = data.filter(remove => remove.id !== _id)
                            setData(remaining)
                        }
                        console.log(result)
                    })
            }
        })
        console.log(_id)
    }
    return (
        <div>
            {
                data.map((myCard) => <div key={myCard._id} className="bg-[#fff2f2]">
                    <div className="w-10/12 m-auto pt-12">
                        <div className="md:w-8/12 m-auto lg:grid grid-cols-2 ">
                            <div className="">
                                <img className="lg:h-full" src={myCard.image} alt="" />
                            </div>
                            <div className="h-full border flex flex-col">
                                <p className="border flex-grow px-2 border-t-green-500 border-x-green-500"><span className="font-bold">Name : </span>{myCard.name}</p>
                                <p className="border flex-grow px-2 border-t-green-500 border-x-green-500"><span className="font-bold">Brand : </span>{myCard.brand}</p>
                                <p className="border flex-grow px-2 border-t-green-500 border-x-green-500"><span className="font-bold">Type : </span>{myCard.type}</p>
                                <p className="border flex-grow px-2 border-t-green-500 border-x-green-500"><span className="font-bold">Price : </span>${myCard.price}</p>
                                <p className="border flex-grow px-2 border-t-green-500 border-x-green-500"><span className="font-bold">Description : </span>{myCard.description.slice(0, 80)}...</p>
                                <div className="border flex-grow px-2 border-t-green-500 border-x-green-500 border-b-green-500 flex items-center gap-1"><span className="font-bold">Rating : </span><StarRatings rating={parseInt(myCard.rating)} starRatedColor="orange" starDimension="20px" starSpacing="1px"></StarRatings></div>

                            </div>

                        </div>
                        <div className="flex justify-center">
                            <button onClick={() => handleUserCardDelete(myCard._id)} className="py-2 mt-3 px-5 text-lg text-white hover:bg-red-600 bg-red-400  mb-3  border font-bold">Remove</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default MyCard;
