import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

function CartWidget() {
    const { cart } = useContext(CartContext);

    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <Link to="/cart" style={{ textDecoration: "none", color: "white" }}>
            🛒
            {totalQuantity > 0 && (
                <span style={{ marginLeft: "5px", backgroundColor: "red", borderRadius: "50%", padding: "2px 6px" }}>
                    {totalQuantity}
                </span>
            )}
        </Link>
    );
}

export default CartWidget;

