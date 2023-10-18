import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const BrandCar = () => {
    const [cars,setCars]= useState([])
    useEffect(()=>{
        fetch('car.json')
        .then(res => res.json())
        .then(data => setCars(data))
    },[])
    return (
        <div className="w-10/12 m-auto">
            <div className="grid grid-cols-3 gap-5">
            {
                cars.map(car => <div key={car.id}>

                    <Link to={`/brand/${car.title}`}>
                    <h2 className="text-2xl font-bold">{car.title}</h2>
                    <img src={car.image} alt="" />
                    </Link>

                </div>)
            }
        </div>
        </div>
    );
};

export default BrandCar;