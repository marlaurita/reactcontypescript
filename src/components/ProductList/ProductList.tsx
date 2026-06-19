import { useEffect, useState } from "react";
import type { Product } from "../../types/Product.types";
import ProductCard from "../ProductCard/ProductCard";
import { useNavigate } from "react-router-dom";

function ProductList (){
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate()

    useEffect (()=> {
        fetch('https://dummyjson.com/products')
        .then((res)=> res.json())
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
        <>
        {console.log(products)}
           {products.map((product) => (
            <ProductCard 
            key={product.id} product={product} 
            onClick={() => navigate(`${product.id}` )}/>))}
        </>
    )
}

export default ProductList;