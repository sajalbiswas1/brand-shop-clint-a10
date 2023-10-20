import { Link, useLoaderData } from "react-router-dom";


const BrandDetails = () => {
    const data = useLoaderData()
    console.log(data)


    return (
        <div className="bg-[#fff2f2]">
            <div className="w-10/12 m-auto ">
            <h2 className="text-3xl font-bold py-7 ">Brand Brand Collection {data.length}</h2>
            <div className="grid grid-cols-3 gap-5">
            {
                data.map(card => <div key={card._id}>
                <div className="border rounded-lg bg-lime-100 text-center">
                    <img className="rounded-t-lg" src={card.image} alt="" />
                    <p className="text-2xl font-bold text-blue-600">{card.name}</p>
                    <p className="text-xs text-[#757575]">{card.brand}-{card.type}</p>
                    <p className="mb-2 min-w-min text-2xl font-bold text-green-500">Price: ${card.price}</p>
                    <p className="mt-1">{card.rating}</p>
                    <div className="flex flex-col">
                        <Link to={`/brand/branDetails/productDetails/${card._id}`}><button className="bg-green-500 text-white py-2 hover:bg-green-400 font-semibold border w-full">Details</button></Link>
                        <Link to={`/updateProduct/${card._id}`}><button className="bg-green-500 text-white rounded-b-lg w-full py-2 hover:bg-green-400 font-semibold border">Update</button></Link>
                    </div>
                    
                </div>
                </div>)
            }
            </div>

        </div>
        </div>
    );
};

export default BrandDetails;