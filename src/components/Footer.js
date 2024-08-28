import React from "react";
import Logo from "./Logo";
export default function Footer(){
    return(
        <footer className="footer bg-light pt-4">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6 mb-4">
                <div className="d-flex ">
                    <Logo/>
                    <h4 className="text-center pt-2">About Us</h4>
                </div>
                <p>We are dedicated to helping you find your dream home, sell your property, or rent the perfect space. Our team of experts is here to guide you every step of the way.</p>
            </div>

            <div className="col-lg-2 col-md-6 mb-4">
                <h5>Quick Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#" className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Home</a></li>
                    <li><a href="#" className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Buy</a></li>
                    <li><a href="#" className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Sell</a></li>
                    <li><a href="#" className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Rent</a></li>
                    <li><a href="#" className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Contact Us</a></li>
                </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
                <h5>Contact Us</h5>
                <ul className="list-unstyled">
                    <li><i className="fa fa-map-marker" aria-hidden="true"></i> 123 Real Estate St, City, State</li>
                    <li><i className="fa fa-phone" aria-hidden="true"></i> +1 234 567 890</li>
                    <li><i className="fa fa-envelope" aria-hidden="true"></i> info@realestate.com</li>
                </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
            <h5>Follow Us</h5>
            <ul className="list-inline">
                <li className="list-inline-item"><i className="fa fa-facebook"></i></li>
                <li className="list-inline-item"><i className="fa fa-twitter"></i></li>
                <li className="list-inline-item"><i className="fa fa-instagram"></i></li>
                <li className="list-inline-item"><i className="fa fa-linkedin"></i></li>
            </ul>
            </div>
        </div>

       
        </div>
    </footer>

    );
}