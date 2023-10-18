import { createBrowserRouter } from "react-router-dom";
import ErrorElement from "../component/ErrorElement";
import Root from "../component/Root/Root";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorElement></ErrorElement>,
      children:[
        {
            path:'/'
        }
      ]
    },
  ]);

  export default router;