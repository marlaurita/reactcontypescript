import type { Product } from "../../types/Product.types";

function ProductCard ({product} : {product: Product}){
    return (
        <>
            <img src={product.thumbnail}></img>
            <h3>{product.title}</h3>
            <span>{product.category}</span>
            <span>{product.description}</span>
        </>
    )
}

export default ProductCard;