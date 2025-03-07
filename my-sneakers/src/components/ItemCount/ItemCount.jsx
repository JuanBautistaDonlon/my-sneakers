import React, { useState } from "react";
import styles from "./ItemCount.module.css";

function ItemCount({ stock, initial, onAdd }) {
    const [count, setCount] = useState(initial);

    const handleIncrease = () => {
        if (count < stock) setCount(count + 1);
    };

    const handleDecrease = () => {
        if (count > 1) setCount(count - 1);
    };

    return (
        <div className={styles.container}>
            <p className={styles.label}>Cantidad: {count}</p>

            <div className={styles.controls}>
                <button className={styles.button} onClick={handleDecrease} disabled={count <= 1}>
                    -
                </button>
                <span className={styles.count}>{count}</span>
                <button className={styles.button} onClick={handleIncrease} disabled={count >= stock}>
                    +
                </button>
            </div>

            <button
                className={styles.addButton}
                onClick={() => onAdd(count)}
                disabled={stock === 0}
            >
                Agregar al carrito
            </button>
        </div>
    );
}

export default ItemCount;

