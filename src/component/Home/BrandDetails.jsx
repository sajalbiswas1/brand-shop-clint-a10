// import { AiFillStar } from "react-icons/ai";

import { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import StarRatings from "react-star-ratings";


const BrandDetails = () => {
    const data = useLoaderData()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    if (data.length === 0) {
        return <>
            <div className="bg-emerald-100 py-24 text-center">
                <p className="text-5xl font-bold "> Brand Products is Not Available</p>
                <Link to={'/'}><p className="mt-10 font-semibold underline">Go Back Home</p></Link>
            </div>
        </>
    }

    return (
        <div className="bg-[#fff2f2]">
            <div className="w-10/12 m-auto">
                <div className="carousel  ">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/HGsvnC2/Untitled-design-28.png" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/tbLKzHs/Untitled-design-26.png" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/tb80mzp/Untitled-design-34.png" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                </div>
            </div>
            <div className="w-10/12 m-auto ">
                <h2 className="text-3xl font-bold py-7 ">{data[0].brand} Collection {data.length}</h2>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
                    {
                        data.map(card => <div key={card._id}>
                            <div className="border rounded-lg bg-lime-100 text-center">
                                <img className="rounded-t-lg" src={card.image} alt="" />
                                <p className="text-2xl font-bold text-blue-600">{card.name}</p>
                                <p className="text-xs text-[#757575]">Brand:{card.brand} <span> Type:{card.type}</span></p>
                                <p className=" min-w-min text-2xl font-bold text-green-500">Price: ${card.price}</p>
                                <div className="mt-1 mb-2"> <StarRatings rating={parseInt(card.rating)} starRatedColor="orange" starDimension="20px" starSpacing="1px"></StarRatings></div>
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