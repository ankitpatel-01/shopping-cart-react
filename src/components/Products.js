import React, { useCallback } from 'react'
import { useCartDispatch } from '../mics/Cart';


const Products = ({ products }) => {

    const dispatchCart = useCartDispatch();

    const addToCart = useCallback(
        (id, price, inStock) => {
            if (!inStock) {
                return;
            }
            dispatchCart({ type: 'ADD_ONE', id, price });
        },
        [dispatchCart],
    )

    if (products.length === 0) {
        return (
            <div>
                No Product is available ☹
            </div>
        )
    }
    return (
        <div className="Product-grid">
            {products.map(p => (
                <div className="Product-card" key={p.id}>
                    <img src={p.thumbnail} alt="img" />
                    <h1>{p.name}</h1>
                    <p className="Product-price">${p.price}</p>
                    {p.delivery && <p>Delivery available</p>}
                    <p className={p.inStock ? 'text-success' : 'text-danger'}>
                        {p.inStock ? 'In stock' : 'Out of stock'}
                    </p>
                    <p><button disabled={!p.inStock} onClick={() => addToCart(p.id, p.price, p.inStock)}>Add to Cart</button></p>
                </div>
            ))}
        </div>
    )
}

export default Products
