

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

{/* <form className="w-8/12 m-auto p-10 " onSubmit={handleAddProduct}>
    <div className="flex">
        <div>
            <label htmlFor="text">Name</label><br />
            <input className="border mr-5" type="text" name="name" id="text" />
        </div>
        <div>
            <label htmlFor="brand">Brand Name</label><br />
            <input className="border mr-5" type="text" name="brand" id="brand" />
        </div>
    </div>
    <div className="flex">
        <div>
            <label htmlFor="type">Type</label><br />
            <input className="border mr-5" type="text" name="type" id="type" />
        </div>
        <div>
            <label htmlFor="price">Price</label><br />
            <input className="border mr-5" type="text" name="price" id="price" />
        </div>
    </div>
    <div className="flex">
        <div>
            <label htmlFor="description">Short description</label><br />
            <input className="border mr-5" type="text" name="description" id="description" />
        </div>
        <div>
            <label htmlFor="rating">Rating</label><br />
            <input className="border mr-5" type="text" name="rating" id="rating" />
        </div>
    </div>
    <div>
        <label htmlFor="image">Image</label><br />
        <input className="border" type="text" name="image" id="image" />
    </div>
    <input className="btn border ml-7 mt-5" type="Submit" name="name" value="add product" />
</form> */}