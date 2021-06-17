import React from 'react'
import { Link } from 'react-router-dom'
import categories from '../database/categories.json'
const Home = () => {
    return (
        <div className="cate-container">
            {categories.map(c => (
                <Link key={c.id} to={`/category/${c.id}`} className="cate-items">
                    <div className="cate-card">
                        <h1>{c.name}</h1>
                        <div>{c.description}</div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Home
