import React from "react";

export default function Form(){
    return(
    <div className="container bg-light my-3" id='form-containetr'>
        <form className="p-5">
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">User Name:</label>
                <input type="text" className="form-control" placeholder="First Last Name" />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address:</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Message</label>
                <input type="text" className="form-control" id="message-input" placeholder="Message" />
            </div>
            <button type="button" class="btn btn-dark text-center"><i className="fa fa-paper-plane" aria-hidden="true"></i></button>
        </form>
    </div>
    );
}