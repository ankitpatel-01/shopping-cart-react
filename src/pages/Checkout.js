import React, { useCallback, useState } from 'react'
import { useCart, useCartDispatch } from '../mics/Cart';
import myProducts from '../database/products.json';


function getComputedCheckoutItems(products, cartItems) {

    const productsInCart = products.filter(p =>
        cartItems.some(item => item.id === p.id)
    );

    return productsInCart.map(product => {
        return {
            ...product,
            quantity: cartItems.find(item => item.id === product.id).quantity,
        };
    });
}

const Checkout = () => {


    const cart = useCart();
    const dispatchCart = useCartDispatch();
    const [products] = useState(myProducts);

    const checkoutItems = getComputedCheckoutItems(products, cart);

    const cartPriceTotal = checkoutItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const handleAdd = useCallback(
        id => {
            dispatchCart({ type: 'ADD_ONE', id });
        },
        [dispatchCart]
    );

    const handleRemoveOne = useCallback(
        id => {
            dispatchCart({ type: 'REMOVE_ONE', id });
        },
        [dispatchCart]
    );

    const handleRemove = useCallback(
        id => {
            dispatchCart({ type: 'REMOVE', id });
        },
        [dispatchCart]
    );

    const cartItemsTotal = cart.reduce((total, item) => total + item.quantity, 0);

    if (cartItemsTotal === 0) {
        return (
            <div className="emptyCart">
                Your Cart Is Empty!
            </div>
        )
    }

    return (
        <div>
            <h1>Checkout</h1>
            <div className="checkout">
                <table>
                    <thead className="thead">
                        <tr>
                            <th> </th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {checkoutItems.map(myitems => (
                            <tr key={myitems.id} className="tdata">
                                <td>
                                    <img
                                        src={myitems.thumbnail}
                                        alt={myitems.name}
                                        style={{ width: 80, height: 80, objectFit: "scale-down" }}
                                    />
                                </td>
                                <td>
                                    {myitems.name}
                                </td>
                                <td>${myitems.price}</td>
                                <td>
                                    <div>
                                        <button className="cartbtn" onClick={() => handleRemoveOne(myitems.id)}>-</button>
                                        <input className="quantity" disabled value={myitems.quantity} />
                                        <button className="cartbtn" onClick={() => handleAdd(myitems.id)}>+</button>
                                    </div>
                                </td>
                                <td>
                                    <button className="dot" onClick={() => handleRemove(myitems.id)}>
                                        X
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
            <hr />
            <div>
                <div className="totalPrice">Total ${cartPriceTotal}</div>
            </div>
        </div>
    )
}

export default Checkout
