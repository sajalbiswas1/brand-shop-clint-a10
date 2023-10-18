

const AddProduct = () => {
    const handleAddProduct = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value
        const brand = form.brand.value
        const type = form.type.value
        const price = form.price.value
        const description = form.description.value
        const rating = form.rating.value
        const image = form.image.value
        console.log(name, brand, type, price, description, rating, image)
        const products = {name, brand, type, price, description, rating, image}
        console.log(products)
        fetch('http://localhost:5000/products',{
            method:'POST',
            headers:{
                "content-type":"application/json",
            },
            body: JSON.stringify(products)
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
        })
    }
    return (
        <div className="w-10/12 m-auto">
            <h2>Add Product</h2>
            <form onSubmit={handleAddProduct} className="card-body">
                <div className="flex gap-5">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Brand Name</span>
                    </label>
                    <input type="text" name="brand" placeholder="Brand Name" className="input input-bordered" />
                    <label className="label">
                    </label>
                </div>
                </div>
                <div className="flex gap-5">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Type </span>
                    </label>
                    <input type="text" name="type" placeholder="Type " className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" name="price" placeholder="Price" className="input input-bordered" />
                    <label className="label">
                    </label>
                </div>
                </div>
                <div className="flex gap-5">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Short description</span>
                    </label>
                    <input type="text" name="description" placeholder="Short description" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input type="text" name="rating" placeholder="Rating" className="input input-bordered" />
                    <label className="label">
                    </label>
                </div>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input type="text" name="image" placeholder="Image link" className="input input-bordered" />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>

        </div>
    );
};

export default AddProduct;

