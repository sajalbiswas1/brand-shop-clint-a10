import { createBrowserRouter } from "react-router-dom";
import ErrorElement from "../component/ErrorElement";
import Root from "../component/Root/Root";
import Home from "../component/Home/Home";
import AddProduct from "../component/Page/AddProduct";
import BrandDetails from "../component/Home/BrandDetails";
import ProductsDetails from "../component/Page/ProductsDetails";
import SignUp from "../component/Page/SignUp";
import LogIn from "../component/Page/LogIn";
import PrivetRoute from "../PrivetRout/PrivetRoute";
import MyCard from "../component/Page/MyCard";



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
            element:<PrivetRoute><AddProduct></AddProduct></PrivetRoute>
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
            element: <PrivetRoute><BrandDetails></BrandDetails></PrivetRoute>,
            loader: ({params})=> fetch(`http://localhost:5000/products/brand/${params.brandDetails}`)
        },
        {
            path:'/brand/branDetails/productDetails/:id',
            element:<PrivetRoute><ProductsDetails></ProductsDetails></PrivetRoute>,
            loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`)
        },
        {
            path:'/myCard',
            element:<PrivetRoute><MyCard></MyCard></PrivetRoute>
        }
      ]
    },
  ]);

  export default router;