import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./NavBar.module.css";

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const { cart } = useContext(CartContext);

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles["navbar-container"]}>
                <Link to="/" className={styles["navbar-brand"]}>My Sneakers</Link>
                <div className={styles.hamburger} onClick={toggleMenu}>
                    ☰
                </div>
                <div className={`${styles["navbar-links"]} ${isOpen ? styles.active : ""}`}>
                    <Link to="/" onClick={toggleMenu}>Inicio</Link>
                    <Link to="/category/nike" onClick={toggleMenu}>Nike</Link>
                    <Link to="/category/adidas" onClick={toggleMenu}>Adidas</Link>
                    <Link to="/category/vans" onClick={toggleMenu}>Vans</Link>
                    <Link to="/cart" className={styles.cart} onClick={toggleMenu}>
                        <FaShoppingCart className={styles.cartIcon} />
                        {totalItems > 0 && <span className={styles.badge}>{totalItems}</span>}
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
