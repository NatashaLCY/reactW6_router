import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ReactLoading from "react-loading";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_PATH = import.meta.env.VITE_API_PATH;
// /v2/api/{api_path}/product/{id}
export default function ProductsDetailPage() {
	const [product, setProduct] = useState({});
	const [qtySelect, setQtySelect] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [isScreenLoading, setIsScreenLoading] = useState(false);
    //const params = useParams();//對應index路由的路徑id
    const { id: product_id } = useParams(); 
    // console.log(product_id);
	useEffect(() => {
		const getProduct = async () => {
			setIsScreenLoading(true);
			try {
                // console.log(product_id);
				const res = await axios.get(`${BASE_URL}/v2/api/${API_PATH}/product/${product_id}`);
				setProduct(res.data.product);
			} catch (error) {
				alert("取得產品失敗");
			} finally {
				setIsScreenLoading(false);
			} 
		};
		getProduct();
		// getCart();
	}, []);
    const addCartItem = async (product_id, qty) => {
        setIsLoading(true);
        try {
            await axios.post(`${BASE_URL}/v2/api/${API_PATH}/cart`, {
                data: {
                    product_id,
                    qty: Number(qty),
                },
            });
            // getCart();
        } catch (error) {
            console.log('error:', error);
            alert("加入購物車失敗");
        } finally {
            setIsLoading(false);
        }
    };


	return (
		<>
			<div className="container mt-5">
				<div className="row">
					<div className="col-6">
						<img className="img-fluid" src={product.imageUrl} alt={product.title} />
					</div>
					<div className="col-6">
						<div className="d-flex align-items-center gap-2">
							<h2>{product.title}</h2>
							<span className="badge text-bg-success">{product.category}</span>
						</div>
						<p className="mb-3">{product.description}</p>
						<p className="mb-3">{product.content}</p>
						<h5 className="mb-3">NT$ {product.price}</h5>
						<div className="input-group align-items-center w-75">
							<select value={qtySelect} onChange={(e) => setQtySelect(e.target.value)} id="qtySelect" className="form-select">
								{Array.from({ length: 10 }).map((_, index) => (
									<option key={index} value={index + 1}>
										{index + 1}
									</option>
								))}
							</select>
							<button onClick={() => addCartItem(product_id, qtySelect)} type="button" className="btn btn-primary d-flex align-items-center gap-2" disabled={isLoading}>
								加入購物車
								{isLoading && <ReactLoading type={"spin"} color={"#000"} height={"1.5rem"} width={"1.5rem"} />}
							</button>
						</div>
					</div>
				</div>
			</div>
            {isScreenLoading && (
                <div
                    className="d-flex justify-content-center align-items-center"
                    style={{
                        position: "fixed",
                        inset: 0,
                        backgroundColor: "rgba(255,255,255,0.3)",
                        zIndex: 999,
                    }}
                >
                    <ReactLoading type="spin" color="black" width="4rem" height="4rem" />
                </div>
            )}
		</>
	);
}
