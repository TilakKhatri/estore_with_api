import React from 'react';
import { Link } from "react-router-dom";
import Login from './Buttons/Login';
import Register from './Buttons/Register';
function Header() {
    return (
        <div class="relative">
            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                <div className="container">
                    <Link className="navbar-brand mr-4 pr-4 text-primary font-weight-bold" to="/">STOREAPI</Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>


                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link text-dark font-weight-bolder" to="/products">Products</Link>

                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-dark font-weight-bolder" to="/contact-us">ContactUs</Link></li>
                            <li className="nav-item">
                                <Link className="nav-link text-dark font-weight-bolder" to="/about">About</Link></li>

                        </ul>


                        <div className=" align-items-center position-relative">
                            <button type="button" className="btn btn-link "
                            >
                                <Login />
                            </button>

                            <button type="button" className="btn ">
                                <Register />
                            </button>

                            <button type="button" className="btn btn-link px-3" >
                                <i className="fa-solid fa-cart-shopping "><span className='m-1 small  '>0</span></i>
                            </button>
                        </div>
                    </div>
                </div >
            </nav >


        </div >
    )
}

export default Header;