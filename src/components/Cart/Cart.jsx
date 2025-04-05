import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link, useNavigate } from "react-router-dom";

function Cart() {
    const { cart, removeItem, clear } = useContext(CartContext);
    const navigate = useNavigate();

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    if (cart.length === 0) {
        return (
            <div style={{ textAlign: "center", padding: "20px" }}>
                <h2>Tu carrito está vacío 🛒</h2>
                <Link to="/" style={{ marginTop: "10px", display: "inline-block" }}>
                    Ir al catálogo
                </Link>
            </div>
        );
    }

    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h2>Resumen de tu compra</h2>
            {cart.map((item) => (
                <div key={item.id} style={{ marginBottom: "15px", borderBottom: "1px solid #ccc", paddingBottom: "10px" }}>
                    <h4>{item.name}</h4>
                    <p>Cantidad: {item.quantity}</p>
                    <p>Precio unitario: ${item.price}</p>
                    <p>Subtotal: ${item.price * item.quantity}</p>
                    <button onClick={() => removeItem(item.id)} style={{ marginBottom: "10px" }}>
                        Eliminar
                    </button>
                </div>
            ))}
            <h3>Total: ${total}</h3>
            <button onClick={clear} style={{ margin: "10px" }}>Vaciar carrito</button>
            <button
                onClick={() => navigate("/checkout")}
                style={{ margin: "10px", backgroundColor: "#28a745", color: "white", padding: "8px 15px", borderRadius: "5px" }}>
                Finalizar compra
            </button>
        </div>
    );
}

export default Cart;

