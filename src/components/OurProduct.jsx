import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



function OurProduct({ items }) {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState(items);
    console.log(products)
    const Loading = () => {
        return (
            <>
                Loading...
            </>
        )
    }

    const ShowProduct = () => {
        function filterProduct(category) {
            const updateList = items.filter((item) => item.category == category);
            setProducts(updateList)
        }
        return (
            <>
                <div className='d-flex flex-row m-3 justify-content-center'>

                    <button className="btn btn-outline-primary me-2 mx-2 "
                        onClick={() => setProducts(items)}
                    >All</button>
                    <button className="btn btn-outline-primary me-2 mx-2 "
                        onClick={() => filterProduct("men's clothing")}
                    >Mens clothes</button>
                    <button className="btn btn-outline-primary me-2 mx-2"
                        onClick={() => filterProduct("women's clothing")}
                    >Womens Clothes</button>
                    <button className="btn btn-outline-primary me-2 mx-2"
                        onClick={() => filterProduct("jewelery")}
                    >Jewellery</button>
                    <button className="btn btn-outline-primary me-2 mx-2"
                        onClick={() => filterProduct("electronics")}
                    >Electronics</button>

                </div>
                <div className="row my-3">
                    {
                        products.map((product) => (
                            <div className="col-md-4" key={product.id}>
                                <div className="card" style={{ width: "18rem;" }}>
                                    <img src={product.image} className="card-img-top img" alt="" />
                                    <div className="card-body d-flex flex-column justify-content-center align-items-center text-center">
                                        <h6 class="card-title">{product.title}</h6>
                                        <p className="card-text ">price: ${product.price}</p>
                                        <Link to={`/products/${product.id}`} className="btn btn-primary w-100">Buy Now</Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </>
        )
    }

    return (
        <div className='container' style={{ marginTop: "5rem" }}>
            <h1 className="text-center h3 mt-4 ">Our Products</h1>
            <hr />
            <div className=''>
                {
                    loading ? <Loading /> : <ShowProduct />
                }
            </div>
        </div>
    )
}




export default OurProduct