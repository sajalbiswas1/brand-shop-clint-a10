import Swal from 'sweetalert2'

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
        fetch('https://brand-shop-server-ma10.vercel.app/products',{
            method:'POST',
            headers:{
                "content-type":"application/json",
            },
            body: JSON.stringify(products)
        })
        .then(res =>res.json())
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
        <div className="bg-[#fff2f2] pt-6">
            <div className="lg:w-6/12 md:w-8/12 lg:px-10 md:px-10 w-10/12 p-3 bg-white m-auto ">
            <h2 className="text-center text-3xl font-bold">Add Product</h2>
            <form onSubmit={handleAddProduct} className="">
                <div className="grid gap-5 grid-cols-2">
                <div className="">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name"   placeholder="Name" className="p-1 border-red-600 border w-full" />
                </div>
                <div className="">
                    <label className="label">
                        <span className="label-text">Brand Name</span>
                    </label>
                    <input type="text" name="brand" placeholder="Brand Name" className="p-1 border-red-600 w-full border" />
                    <label className="label">
                    </label>
                </div>
                </div>
                <div className="grid gap-5 grid-cols-2">
                <div className="">
                    <label className="label">
                        <span className="label-text">Type </span>
                    </label>
                    <input type="text" name="type" placeholder="Type " className="p-1 border-red-600 w-full border" />
                </div>
                <div className="">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" name="price" placeholder="Price" className="p-1 border-red-600 w-full border" />
                    <label className="label">
                    </label>
                </div>
                </div>
                <div className="grid gap-5 grid-cols-2">
                <div className="">
                    <label className="label">
                        <span className="label-text">Short description</span>
                    </label>
                    <input type="text" name="description" placeholder="Short description" className="p-1 border-red-600 w-full border" />
                </div>
                <div className="">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input type="text" name="rating" placeholder="Rating" className="p-1 border-red-600 w-full border" />
                    <label className="label">
                    </label>
                </div>
                </div>

                <div className="">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input type="text" name="image" placeholder="Image link" className="p-1 border-red-600 w-full border" />
                </div>
                <div className="flex justify-center mt-6">
                    <button className="p-1 text-green-600 hover:bg-green-200  mb-3 border-green-600  border font-semibold">Add Product</button>
                </div>
            </form>

        </div>
        </div>
    );
};

export default AddProduct;

