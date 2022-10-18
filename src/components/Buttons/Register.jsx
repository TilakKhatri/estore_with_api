import React from 'react'

function Reginster() {
    return (
        <>
            <div class="">
                <button type="button" class="btn btn-primary " data-toggle="modal" data-target="#modalRegisterForm">
                    <i className="fa-solid fa-user-plus small "><span className='mx-1 px-1 '>Register</span></i>
                </button>
            </div>

            <div class="modal fade" id="modalRegisterForm" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header border-bottom-0 ">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span class="ml-4" aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="form-title text-center">
                                <h4>Create new Account</h4>
                            </div>
                            <div class="d-flex flex-column text-center">
                                <form>
                                    <div class="form-group">
                                        <input type="email" class="form-control" id="email1" placeholder="Email" required />
                                    </div>
                                    <div class="form-group">
                                        <input type="password" class="form-control" id="password1" placeholder="Create password" required />
                                    </div>
                                    <div class="form-group">
                                        <input type="password" class="form-control" id="cpassword1" placeholder="Confirm password" required />
                                    </div>
                                    <button type="button" class="btn btn-info btn-block ">Register</button>
                                </form>
                                <div class="modal-footer d-flex flex-column  justify-content-center">
                                    <div class="signup-section mb-2">Already have account? <a href="#a" class="text-info">Login</a>.</div>



                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Reginster