import { createBrowserRouter } from "react-router-dom";
import ErrorElement from "../component/ErrorElement";
import Root from "../component/Root/Root";
import Home from "../component/Home/Home";
import AddProduct from "../component/Page/AddProduct";
import BrandDetails from "../component/Home/BrandDetails";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorElement></ErrorElement>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/addProduct',
            element:<AddProduct></AddProduct>
        },
        {
            path:'/brand/:brandDetails',
            element:<BrandDetails></BrandDetails>,
            loader: ({params})=> fetch(`http://localhost:5000/products/${params.brandDetails}`)
        }
      ]
    },
  ]);

  export default router;