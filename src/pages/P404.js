import React from 'react'
import { Link } from 'react-router-dom'

const P404 = () => {
    return (
        <div>
            <div className="container">
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <p>The Page you are looking for doesn't exist or an other error occured. Go to <Link to={"/"}>Home Page.</Link></p>
            </div>
        </div>
    )
}

export default P404
