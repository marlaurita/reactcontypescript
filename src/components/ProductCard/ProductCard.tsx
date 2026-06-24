import type { MouseEventHandler } from "react";
import type { Product } from "../../types/Product.types";
import "./ProductCard.css";

function ProductCard ({product, onClick} : {product: Product , onClick: MouseEventHandler<HTMLButtonElement>}){
      const discountedPrice = product.price * (1 - product.discountPercentage / 100);
    return (
       <article className="product-card" >
      <img src={product.thumbnail} alt={product.title} className="product-card__image" />
      <div className="product-card__body">
        <span className="product-card__category">{product.category}</span>
        <h3 className="product-card__title">{product.title}</h3>
        <p className="product-card__description">{product.description}</p>
        <div className="product-card__pricing">
          <span className="product-card__price">${discountedPrice.toFixed(2)}</span>
          {product.discountPercentage > 0 && (
            <span className="product-card__original-price">${product.price.toFixed(2)}</span>
          )}
          {product.discountPercentage > 0 && (
            <span className="product-card__discount">-{product.discountPercentage.toFixed(0)}%</span>
          )}
        </div>
        <div className="product-card__meta">
          <span className="product-card__rating">★ {product.rating.toFixed(1)}</span>
          <span className="product-card__stock">{product.stock} en stock</span>
        </div>
      </div>
    </article>
    )
}

export default ProductCard;