import type { MouseEventHandler } from "react";
import type { Product } from "../../types/Product.types";
import Button from "../Button/Button";

function ProductCard ({product, onClick} : {product: Product , onClick: MouseEventHandler<HTMLButtonElement>}){
    return (
        <>
            <img src={product.thumbnail}></img>
            <h3>{product.title}</h3>
            <span>{product.category}</span>
            <span>{product.description}</span>
            <Button titulo="Ir a detalles" onClick={onClick} secundario={false}></Button>
        </>
    )
}

export default ProductCard;