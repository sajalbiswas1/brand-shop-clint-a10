import { useLoaderData } from "react-router-dom";


const ProductsDetails = () => {
    const card = useLoaderData()
    console.log(card)
    return (
        <div>
            <h3>This is a Products Details </h3>
            <p>{card.brand}:{card.name}</p>
            <img src={card.image} alt="" />
            <button className="btn btn-primary">Add to Card</button>
        </div>
    );
};

export default ProductsDetails;