import { createHashRouter } from "react-router-dom";
import FrontLayout from "../layout/FrontLayout";
import HomePage from "../pages/HomePage";
import ProductsDetailPage from "../pages/ProductDetailPage";
import ProductsPage from "../pages/productsPage";
import CartPage from "../pages/CartPage";
import NotFound from "../pages/NotFound";

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
            {
                path: 'products/:id',
                element: <ProductsDetailPage/>
            },
            {
                path: 'cart',// 參考FrontLayout路由
                element: <CartPage/>
            },
        ]
    },
    {
        path:'*',
        element:<NotFound/>
    }
]);
export default router;