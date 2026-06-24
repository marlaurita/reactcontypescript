import { useEffect, useState } from "react";
import type { Product } from "../../types/Product.types";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";
import { useNavigate } from "react-router-dom";

function ProductList() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate()

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.products)
            })
            .catch((err) => {
                setError(err.message)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    if (loading) return <p>Cargando productos</p>
    if (error) return <p>Hubo un error {error}</p>

    return (
        <section className="product-list">
            <h2 className="product-list__title">Productos</h2>
            <div className="product-list__grid">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} onClick={() => navigate(`${product.id}`)} />
                ))}
            </div>
        </section>

    )
}

export default ProductList;