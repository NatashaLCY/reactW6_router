import { createHashRouter } from "react-router-dom";
import FrontLayout from "../layout/FrontLayout";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/productsPage";

const router = createHashRouter([
    {
        path: '/', 
        element: <FrontLayout/>,
        children:[
            {
                path: '',
                element: <HomePage/>
            },
            {
                path: 'products',
                element: <ProductsPage/>
            },
        ]
    }
]);
export default router;