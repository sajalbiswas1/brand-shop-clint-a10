import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateForm = () => {
    const data = useLoaderData();
    console.log(data)
    const handleUpdateProduct = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value
        const brand = form.brand.value
        const type = form.type.value
        const price = form.price.value
        const rating = form.rating.value
        const image = form.image.value
        console.log(name, brand, type, price, rating, image)
        const products = {name, brand, type, price, rating, image}
        console.log(products)
        fetch(`https://brand-shop-server-ma10.vercel.app/products/${data._id}`,{
            method: 'PUT',
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(products)
        })
        .then(res => res.json())
        .then(data =>{
            Swal.fire({
                title: 'Success!',
                text: 'Products add',
                icon: 'success',
                confirmButtonText: 'Ok'
              })
            console.log(data)
        })
    }
    return (
        <div className="bg-[#fff2f2] pb-5">
            <h2 className="text-center text-3xl py-5 font-bold">Update Form</h2>
            <div className="lg:w-6/12 md:w-9/12 w-11/12 p-3 md:px-7 m-auto border bg-white">
            
            <form onSubmit={handleUpdateProduct} className="">
                <div className="grid grid-cols-2 gap-5">
                <div className="">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" defaultValue={data.name} placeholder="Name" className="p-1 border-red-600 w-full border" />
                </div>
                <div className="">
                    <label className="label">
                        <span className="label-text">Brand Name</span>
                    </label>
                    <input type="text" name="brand" defaultValue={data.brand} placeholder="Brand Name" className="p-1  border-red-600 w-full border" />
                    <label className="label">
                    </label>
                </div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                <div className="">
                    <label className="label">
                        <span className="label-text">Type </span>
                    </label>
                    <input type="text" name="type" defaultValue={data.type} placeholder="Type " className="p-1  border-red-600 w-full border" />
                </div>
                <div className="">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" name="price" defaultValue={data.price} placeholder="Price" className="p-1  border-red-600 w-full border" />
                    <label className="label">
                    </label>
                </div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                <div className="">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input type="text" name="rating" defaultValue={data.rating} placeholder="Rating" className="p-1  border-red-600 w-full border" />
                    <label className="label">
                    </label>
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input type="text" name="image" defaultValue={data.image} placeholder="Image link" className="p-1 px-2  border-red-600 w-full border" />
                </div>
                </div>
                <div className="mt-6 flex justify-center">
                    <button className="py-2 px-5 text-lg text-white hover:bg-green-400 bg-green-600   mb-3  border font-bold">UpDate</button>
                </div>
            </form>

        </div>
        </div>
    );
};

export default UpdateForm;