import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import img from '../images/cart.svg'
import { useCart } from '../mics/Cart';


const NavBar = () => {

    const cart = useCart();
    const cartItemsTotal = cart.reduce((total, item) => total + item.quantity, 0);
    const cartPriceTotal = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <div>
            <header>
                <Link to={'/'} className="home">Home</Link>
                <nav>
                    <ul className="navLinks">
                        <li>
                            <Link to={'/checkout'}>
                                <img src={img} alt="cart" height="30" width="30" />
                                <p className="dot">{cartItemsTotal}</p>
                                <p>${cartPriceTotal}</p>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default memo(NavBar)
