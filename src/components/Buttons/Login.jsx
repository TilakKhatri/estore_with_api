import React from 'react'
import './styles.css'
function Login() {
    return (
        <>
            <div class="">
                <button type="button" class="btn btn-success " data-toggle="modal" data-target="#loginModal">
                    <i className="fa-solid fa-right-to-bracket small"><span className='mx-1 px-1'>Login</span></i>
                </button>
            </div>

            <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header border-bottom-0 ">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span class="ml-4" aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="form-title text-center">
                                <h4>Login</h4>
                            </div>
                            <div class="d-flex flex-column text-center">
                                <form>
                                    <div class="form-group">
                                        <input type="email" class="form-control" id="email1" placeholder="Your email address..." />
                                    </div>
                                    <div class="form-group">
                                        <input type="password" class="form-control" id="password1" placeholder="Your password..." />
                                    </div>
                                    <button type="button" class="btn btn-success btn-block ">Login</button>
                                </form>
                                <div class="modal-footer d-flex flex-column  justify-content-center">
                                    <div class="signup-section mb-2">Not a member yet? <a href="#a" class="text-info"> Sign Up</a>.</div>


                                    <div class=" social-buttons">

                                        <div class="d-flex justify-content-center">
                                            <button type="button" class="btn btn-secondary btn-round mx-2" data-toggle="tooltip" data-placement="top" title="Twitter">
                                                <i class="fab fa-twitter"></i>
                                            </button>
                                            <button type="button" class="btn btn-secondary btn-round mx-2" data-toggle="tooltip" data-placement="top" title="Facebook">
                                                <i class="fab fa-facebook"></i>
                                            </button>
                                            <button type="button" class="btn btn-secondary btn-round mx-2" data-toggle="tooltip" data-placement="top" title="Linkedin">
                                                <i class="fab fa-linkedin"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Login;