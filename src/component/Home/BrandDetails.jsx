import { Link, useLoaderData } from "react-router-dom";


const BrandDetails = () => {
    const data = useLoaderData()
    console.log(data)


    return (
        <div className="w-10/12 m-auto">
            <h2>Brand details {data.length}</h2>
            <div className="grid grid-cols-3 gap-5">
            {
                data.map(card => <div key={card._id}>
                <div className="border">
                    <img src={card.image} alt="" />
                    <p>{card.brand}</p>
                    <p>{card.name}</p>
                    <p>{card.type}</p>
                    <p>{card.price}</p>
                    <p>{card.rating}</p>
                    <div className="flex justify-between">
                        <Link to={`/brand/branDetails/productDetails/${card._id}`}><button className="btn">Details</button></Link>
                        <button className="btn">Update</button>
                    </div>
                    
                </div>
                </div>)
            }
            </div>

        </div>
    );
};

export default BrandDetails;