import React from "react";
import { Link } from "react-router-dom";
import styles from "./Item.module.css";

function Item({ product }) {
    console.log(`URL generada: /item/${product.id}`);

    return (
        <div className={styles.card}>
            <img src={product.img} alt={product.name} className={styles.image} />
            <h3>{product.name}</h3>
            <p>Marca: {product.brand}</p>
            <p>Precio: ${product.price}</p>
            <Link to={`/item/${product.id}`} className={styles.detailLink}>
                Ver detalle
            </Link>
        </div>
    );
}

export default Item;


