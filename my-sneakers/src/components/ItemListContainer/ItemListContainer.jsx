import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "../Item/Item";
import styles from "./ItemListContainer.module.css";
import CatalogBanner from "../CatalogBanner/CatalogBanner"; 
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebaseConfig";

function ItemListContainer() {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const itemsCollection = collection(db, "items");
        const q = categoryId
            ? query(itemsCollection, where("category", "==", categoryId))
            : itemsCollection;

        getDocs(q)
            .then((res) => {
                const productosFirestore = res.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setProducts(productosFirestore);
            })
            .catch((error) => console.error("Error cargando productos:", error))
            .finally(() => setLoading(false));
    }, [categoryId]);

    return (
        <div className={styles.container}>
            <CatalogBanner />
            <h2 className={styles.title}>
                {categoryId ? `Categoría: ${categoryId}` : "Catálogo completo"}
            </h2>
            {loading ? (
                <p className={styles.loading}>Cargando productos...</p>
            ) : (
                <div className={styles.catalog}>
                    {products.map((product) => (
                        <div key={product.id} className={styles["product-card"]}>
                            <Item product={product} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ItemListContainer;
