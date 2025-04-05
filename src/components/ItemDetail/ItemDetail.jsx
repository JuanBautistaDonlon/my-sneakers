import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../itemcount/ItemCount";
import styles from "./ItemDetail.module.css";

function ItemDetail({ product }) {
    const [quantityAdded, setQuantityAdded] = useState(0);
    const { addItem } = useContext(CartContext);
    const navigate = useNavigate();

    const handleAddToCart = (quantity) => {
        setQuantityAdded(quantity);
        addItem(product, quantity);
        console.log(`Se agregaron ${quantity} unidades de ${product.name} al carrito`);
    };

    return (
        <div className={styles.container}>
            <img src={product.img} alt={product.name} className={styles.image} />
            <h2>{product.name}</h2>
            <p><strong>Marca:</strong> {product.brand}</p>
            <p><strong>Precio:</strong> ${product.price}</p>
            <p><strong>Descripción:</strong> {product.description}</p>
            <p><strong>Stock disponible:</strong> {product.stock}</p>

            {quantityAdded === 0 ? (
                <ItemCount stock={product.stock} initial={1} onAdd={handleAddToCart} />
            ) : (
                <button className={styles.checkoutButton} onClick={() => navigate("/cart")}>
                    Terminar mi compra
                </button>
            )}
        </div>
    );
}

export default ItemDetail;
