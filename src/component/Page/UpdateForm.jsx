import { useLoaderData } from "react-router-dom";


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
        fetch(`https://brand-shop-server-ma10-bxcgvlvse-sajal-biswas-projects.vercel.app/products/${data._id}`,{
            method: 'PUT',
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(products)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
        })
    }
    return (
        <div>
            <div className="w-10/12 m-auto">
            <h2>Update Form</h2>
            <form onSubmit={handleUpdateProduct} className="card-body">
                <div className="flex gap-5">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" defaultValue={data.name} placeholder="Name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Brand Name</span>
                    </label>
                    <input type="text" name="brand" defaultValue={data.brand} placeholder="Brand Name" className="input input-bordered" />
                    <label className="label">
                    </label>
                </div>
                </div>
                <div className="flex gap-5">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Type </span>
                    </label>
                    <input type="text" name="type" defaultValue={data.type} placeholder="Type " className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" name="price" defaultValue={data.price} placeholder="Price" className="input input-bordered" />
                    <label className="label">
                    </label>
                </div>
                </div>
                <div className="flex gap-5">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input type="text" name="rating" defaultValue={data.rating} placeholder="Rating" className="input input-bordered" />
                    <label className="label">
                    </label>
                </div>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input type="text" name="image" defaultValue={data.image} placeholder="Image link" className="input input-bordered" />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">UpDate</button>
                </div>
            </form>

        </div>
        </div>
    );
};

export default UpdateForm;