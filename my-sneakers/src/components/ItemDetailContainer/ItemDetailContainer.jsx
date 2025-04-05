import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

function ItemDetailContainer() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const docRef = doc(db, "items", id);

        getDoc(docRef)
            .then((res) => {
                if (res.exists()) {
                    setProduct({ id: res.id, ...res.data() });
                } else {
                    console.error("Producto no encontrado");
                }
            })
            .catch((error) => console.error("Error cargando producto:", error))
            .finally(() => setLoading(false));
    }, [id]);

    return (
        <div>
            {loading ? <p>Cargando producto...</p> : product ? <ItemDetail product={product} /> : <p>Producto no encontrado</p>}
        </div>
    );
}

export default ItemDetailContainer;

