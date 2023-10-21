import { useEffect, useState } from "react";

const Special = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('https://brand-shop-server-ma10.vercel.app/special')
        .then(res =>res.json())
        .then(data=> setData(data))
    },[])
    return (
        <div className="w-10/12 m-auto">
            <h1 className="text-4xl font-bold pt-12 mb-5 text-center">Special{data.length}</h1>
            <hr className="w-52 m-auto border-orange-500 mb-10 border-2" />
            <div className="grid grid-cols-4 gap-5">
            {
                data.map(card => <div className="border bg-stone-600 text-white border-white" key={card._id}>

                    <img src={card.image} alt="" />
                    <div className="px-3">
                    <div className="flex justify-between my-4">
                    <h4 className="text-xl font-bold">{card.name}</h4>
                    <p className="text-xl font-bold p-1 bg-blue-500">Price: ${card.price}</p>
                    </div>
                    <hr />
                    <div className="flex justify-between py-4">
                        <p className="">Brand: {card.rating}</p>
                        <p>{card.brand}</p>
                    </div>
                    </div>
                </div>)
            }
            </div>
        </div>
    );
};

export default Special;