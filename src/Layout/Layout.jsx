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
import UpdateForm from "../component/Page/UpdateForm";

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
            path:'/updateProduct/:id',
            element:<UpdateForm></UpdateForm>,
            loader:({params})=>fetch(`https://brand-shop-server-ma10-bxcgvlvse-sajal-biswas-projects.vercel.app/products/${params.id}`)
        },
        {
            path:'/brand/:brandDetails',
            element: <PrivetRoute><BrandDetails></BrandDetails></PrivetRoute>,
            loader: ({params})=> fetch(`https://brand-shop-server-ma10-bxcgvlvse-sajal-biswas-projects.vercel.app/products/brand/${params.brandDetails}`)
        },
        {
            path:'/brand/branDetails/productDetails/:id',
            element:<PrivetRoute><ProductsDetails></ProductsDetails></PrivetRoute>,
            loader:({params})=>fetch(`https://brand-shop-server-ma10-bxcgvlvse-sajal-biswas-projects.vercel.app/products/${params.id}`)
        },
        {
            path:'/myCard',
            element:<PrivetRoute><MyCard></MyCard></PrivetRoute>
        }
      ]
    },
  ]);

  export default router;