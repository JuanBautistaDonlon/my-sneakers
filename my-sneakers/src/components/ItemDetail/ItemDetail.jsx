import React from "react";
import styles from "./ItemDetail.module.css";
import ItemCount from "../ItemCount/ItemCount";

function ItemDetail({ product }) {
    const handleAddToCart = (quantity) => {
        console.log(`Se agregaron ${quantity} ${product.name} al carrito`);
    };

    return (
        <div className={styles.container}>
            <img src={product.img} alt={product.name} className={styles.image} />
            <h2>{product.name}</h2>
            <p>Marca: {product.brand}</p>
            <p>Precio: ${product.price}</p>
            <p>Stock disponible: {product.stock}</p>
            <ItemCount stock={product.stock} initial={1} onAdd={handleAddToCart} />
        </div>
    );
}

export default ItemDetail;

