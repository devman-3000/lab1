import React, { useState, useEffect } from 'react';
import { Product } from '../../app/models/product';
import ProductList from './ProductList';

export default function Catalog() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/products')
        .then(data => data.json())
        .then(res => setProducts(res));
    }, [])


    return (
        <>
            <ProductList products={products} />
        </>
    )
}