import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

function NavBar() {
    return (
        <nav className={styles.navbar}>
            <Link to="/" className={styles.brand}>
                <span>My Sneakers</span>
            </Link>
            <div className={styles.categories}>
                <Link to="/category/nike">NIKE</Link>
                <Link to="/category/adidas">ADIDAS</Link>
                <Link to="/category/vans">VANS</Link>
            </div>
            <Link to="/cart" className={styles.cart}>🛒</Link>
        </nav>
    );
}

export default NavBar;
