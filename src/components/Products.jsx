import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function Products({ items }) {
    const [products, setProducts] = useState([]);
    setProducts(items)
    return (
        <div>
            <h1 className="text-center h3 mt-4 ">Our Products</h1>
            <hr />
            <div className="row my-5">
                {
                    products.map((product) => (
                        <div className="col-md-4" key={product.id}>
                            <div className="card" style={{ width: "18rem;" }}>
                                <img src={product.image} className="card-img-top img" alt="" />
                                <div className="card-body d-flex flex-column justify-content-center align-items-center text-center">
                                    <h6 class="card-title">{product.title}</h6>
                                    <p className="card-text ">price: ${product.price}</p>
                                    <Link to={`/products/${product.id}`} className="btn btn-primary w-100">Buy Now</Link>                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Products