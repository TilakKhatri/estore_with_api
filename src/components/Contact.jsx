import React from 'react'

function Contact() {
    return (
        <div className='container' style={{ marginTop: "5rem" }}>
            <h1 className='text-center mt-2'>Drop your Question here.</h1>
            <hr />
            <div className='row'>
                <div className="col-md-6">
                    <img src="https://img.icons8.com/bubbles/1000/000000/email--v1.png" height="400px" width="400px" />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center bg-light rounded">
                    <form className='p-3' >
                        <div className="form-group">
                            <label for="formGroupExampleInput">Full Name</label>
                            <input type="text" className="form-control bg-transparent" id="formGroupExampleInput" placeholder="Tilak Khatri" />
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Email Address</label>
                            <input type="email" className="form-control bg-transparent" id="exampleFormControlInput1" placeholder="tila345@gmail.com" />
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Message</label>
                            <textarea class="form-control bg-transparent" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div >
        </div >
    )
}

export default Contact