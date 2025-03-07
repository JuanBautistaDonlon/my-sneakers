import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const mockProducts = [
    { id: 1, name: "Nike Air Force 1", brand: "Nike", price: 120, stock: 5, category: "nike", img: "/images/nike-air-force-1.png.webp" },
    { id: 4, name: "Nike Air Max 90", brand: "Nike", price: 120, stock: 9, category: "nike", img: "/images/nike-air-max-90.png.webp" },
    { id: 5, name: "Nike Dunk Low", brand: "Nike", price: 120, stock: 6, category: "nike", img: "/images/nike-dunk-low.png.webp" },
    { id: 2, name: "Adidas Ultraboost", brand: "Adidas", price: 140, stock: 8, category: "adidas", img: "/images/adidas-ultraboost.png.webp" },
    { id: 6, name: "Adidas Superstar", brand: "Adidas", price: 140, stock: 10, category: "adidas", img: "/images/adidas-superstar.png.webp" },
    { id: 7, name: "Adidas NMD R1", brand: "Adidas", price: 140, stock: 5, category: "adidas", img: "/images/adidas-nmd-r1.png.webp" },
    { id: 3, name: "Vans Old Skool", brand: "Vans", price: 80, stock: 7, category: "vans", img: "/images/vans-old-skool.png.webp" },
    { id: 8, name: "Vans Sk8-Hi", brand: "Vans", price: 80, stock: 6, category: "vans", img: "/images/vans-sk8-hi.png.webp" },
    { id: 9, name: "Vans Authentic", brand: "Vans", price: 80, stock: 10, category: "vans", img: "/images/vans-authentic.png.webp" },
];


function ItemDetailContainer() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        const fetchProduct = new Promise((resolve) => {
            setTimeout(() => {
                const foundProduct = mockProducts.find((p) => p.id === parseInt(id));
                resolve(foundProduct);
            }, 1000);
        });

        fetchProduct
            .then((data) => setProduct(data))
            .finally(() => setLoading(false));

    }, [id]);

    return (
        <div>
            {loading ? <p>Cargando producto...</p> : product ? <ItemDetail product={product} /> : <p>Producto no encontrado</p>}
        </div>
    );
}

export default ItemDetailContainer;

