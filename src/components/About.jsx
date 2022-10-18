import React from 'react'
import { Link } from 'react-router-dom'

function About() {
    return (
        <div style={{ marginTop: "8rem" }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="https://img.freepik.com/free-vector/isometric-laptop-with-shopping-cart-keypad_1262-16544.jpg?w=740&t=st=1665812482~exp=1665813082~hmac=21851bb485beb6000a8c08603fe94c5214e0be27d8f0801220c3873af09f0229" alt="" height="400px" width="400px" />
                    </div>
                    <div className="col-md-6">
                        <h1>About Us</h1>
                        <p className="lead">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores similique dolor totam doloremque aliquam necessitatibus ducimus commodi, iusto alias voluptas adipisci minus culpa delectus aspernatur vero, quibusdam laudantium facilis ipsam. Autem illum repellendus cumque qui consectetur laudantium fuga, consequuntur distinctio ab laboriosam, odio accusantium nemo ipsa ratione. Optio, enim! Quia?

                        </p>
                        <Link to="/contact-us" className='btn btn-outline-primary px-3'>Contact Us</Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About