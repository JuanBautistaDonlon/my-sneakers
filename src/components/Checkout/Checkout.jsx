import React, { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebaseConfig";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import styles from "./Checkout.module.css";

function Checkout() {
    const { cart, clear } = useContext(CartContext);
    const [orderId, setOrderId] = useState(null);
    const [buyer, setBuyer] = useState({ name: "", phone: "", email: "" });
    const navigate = useNavigate();

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handleInputChange = (e) => {
        setBuyer({ ...buyer, [e.target.name]: e.target.value });
    };

    const handleCheckout = async () => {
        const ordersCollection = collection(db, "orders");
        const order = {
            buyer,
            items: cart,
            total,
            date: serverTimestamp(),
        };

        try {
            const docRef = await addDoc(ordersCollection, order);
            setOrderId(docRef.id);
            clear();
        } catch (error) {
            console.error("Error al generar la orden:", error);
        }
    };

    if (orderId) {
        return (
            <div className={styles.confirmation}>
                <h2>¡Compra realizada con éxito! 🎉</h2>
                <p>ID de tu orden: <strong>{orderId}</strong></p>
                <button onClick={() => navigate("/")}>Volver al inicio</button>
            </div>
        );
    }

    return (
        <div className={styles.checkout}>
            <h2>Finalizar Compra</h2>
            <form className={styles.form}>
                <input
                    type="text"
                    name="name"
                    placeholder="Nombre completo"
                    value={buyer.name}
                    onChange={handleInputChange}
                    required
                    className={styles.input}
                />
                <input
                    type="text"
                    name="phone"
                    placeholder="Teléfono"
                    value={buyer.phone}
                    onChange={handleInputChange}
                    required
                    className={styles.input}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Correo electrónico"
                    value={buyer.email}
                    onChange={handleInputChange}
                    required
                    className={styles.input}
                />
                <button
                    type="button"
                    onClick={handleCheckout}
                    className={styles.button}
                >
                    Finalizar compra
                </button>
            </form>
        </div>
    );
}

export default Checkout;
