import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const ProductsDetails = () => {
    const {user}= useContext(AuthContext)
    const card = useLoaderData()
    const {name, brand, type, price, description, rating, image}= card;
    const email = user.email;
    const handleUserCard = ()=>{
        console.log({name, brand, type, price, description, rating, image,email})
    }
    console.log(card)
    return (
        <div>
            <h3>This is a Products Details </h3>
            <p>{card.brand}:{card.name}</p>
            <img src={card.image} alt="" />
            <button onClick={handleUserCard} className="btn btn-primary">Add to Card</button>
        </div>
    );
};

export default ProductsDetails;