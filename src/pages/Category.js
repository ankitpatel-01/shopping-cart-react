import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import categories from '../database/categories.json'
import myProducts from '../database/products.json';
import Products from '../components/Products'

const Category = () => {

    const { id } = useParams();

    const products = myProducts.filter(p => p.categoryId === id);

    const [currentProduct, setcurrentProduct] = useState(products)

    const category = categories.find(c => c.id === id);

    if (!category) {
        return <div>Category with id {id} does not exist</div>;
    }

    const handleCheck = (e) => {
        if (e.target.checked && e.target.name === 'delivery') {
            const result = myProducts.filter(p => p.categoryId === id && p.delivery);
            setcurrentProduct(result);
        }
        if (!e.target.checked && e.target.name === 'delivery') {
            const result = myProducts.filter(p => p.categoryId === id);
            setcurrentProduct(result);
        }
    }

    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>{category.name}</h2>
            <p style={{ textAlign: 'center' }}>{category.description}</p>
            <div className="category-main">
                <div className="filter-box">
                    <h2>Filter</h2>
                    <div><input onChange={handleCheck} type="checkbox" name="delivery" /> Delivery</div>
                </div>
                <Products products={currentProduct} />
            </div>
        </div>
    )
}
export default Category
