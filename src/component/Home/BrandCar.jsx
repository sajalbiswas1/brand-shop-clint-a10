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
            <h2 className="text-3xl font-bold my-8">Explore Categories</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
            {
                cars.map(car => <div className="border bg-slate-100 rounded-lg" key={car.id}>

                    <Link to={`/brand/${car.title}`}>
                    <img className="rounded-b-lg p-4" src={car.image} alt="" />
                    <h2 className="text-2xl font-bold px-5 pb-5 text-center">{car.title}</h2>
                    </Link>

                </div>)
            }
        </div>
        </div>
    );
};

export default BrandCar;