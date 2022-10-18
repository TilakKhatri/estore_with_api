import React from 'react'
import { useParams } from 'react-router-dom'
function ProductDetail({ items }) {
    const productId = useParams();
    const proDetail = items.filter(item => item.id == productId.id);
    console.log(proDetail)
    return (
        <>
            <div className="container" style={{ marginTop: "6rem" }}>

                {
                    proDetail.map((item) => (
                        <div className="row">

                            <div className="col-md-6 d-flex">
                                <img src={item.image} alt="" width="400px" height="400px" />

                            </div>
                            <div className="col-md-6 d-flex flex-column justify-content-center">
                                <h1 className='mt-2 fw-bold' style={{ fontSize: "2rem" }}>{item.title}</h1>
                                <h2 className=''>Price: ${item.price}</h2>
                                <p className='lead'>{item.description}</p>
                                <button className='btn btn-outline-primary'>Add to Cart</button>
                            </div>
                        </div>
                    ))
                }

            </div>
        </>
    )
}

export default ProductDetail