import React, { useEffect, useState } from 'react'
import Watch from "./Carousel/watch.jpg"
import Jew from "./Carousel/jewellery.jpg"
import Mens from "./Carousel/mens_clothes.jpg"
import Womens from "./Carousel/women_clothes.jpg"
import { Link } from 'react-router-dom'
function Home({ items }) {

    return (
        <div className=''>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={Mens} style={{ height: "400px" }} alt="First slide" />
                        <div class="carousel-caption d-none d-md-block">
                            <h3>Formal for Mens</h3>
                            <p>Stylish and Trending</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={Watch} style={{ height: "400px" }} alt="Second slide" />
                        <div class="carousel-caption d-none d-md-block">
                            <h3>Watch for Mens</h3>
                            <p>Stylish and Trending</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={Jew} style={{ height: "400px" }} alt="Third slide" />
                        <div class="carousel-caption d-none d-md-block">
                            <h3>Jewellery</h3>
                            <p>Stylish and Trending</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={Womens} style={{ height: "400px" }} alt="Third slide" />
                        <div class="carousel-caption d-none d-md-block">
                            <h3>Womens new on market</h3>
                            <p>Stylish and Trending</p>
                        </div>
                    </div>

                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            <div className="container" >
                <h1 className="text-center h3 mt-4 ">Our Products</h1>
                <hr />
                <div className="row my-5">
                    {
                        items.map((product) => (
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

        </div>
    )
}

export default Home