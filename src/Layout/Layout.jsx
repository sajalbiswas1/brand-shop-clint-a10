import { createBrowserRouter } from "react-router-dom";
import ErrorElement from "../component/ErrorElement";
import Root from "../component/Root/Root";
import Home from "../component/Home/Home";
import AddProduct from "../component/Page/AddProduct";
import BrandDetails from "../component/Home/BrandDetails";
import ProductsDetails from "../component/Page/ProductsDetails";
import SignUp from "../component/Page/SignUp";
import LogIn from "../component/Page/LogIn";



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
            path:'/logIn',
            element: <LogIn></LogIn>
        },
        {
            path:'/signUp',
            element:<SignUp></SignUp>
        },
        {
            path:'/brand/:brandDetails',
            element:<BrandDetails></BrandDetails>,
            loader: ({params})=> fetch(`http://localhost:5000/products/brand/${params.brandDetails}`)
        },
        {
            path:'/brand/branDetails/productDetails/:id',
            element:<ProductsDetails></ProductsDetails>,
            loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`)
        }
      ]
    },
  ]);

  export default router;