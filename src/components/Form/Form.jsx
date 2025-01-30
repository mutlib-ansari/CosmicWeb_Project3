import React from 'react';
import './form.css';
import Button from 'react-bootstrap/Button';
import { IoIosStar } from "react-icons/io";
import 'aos/dist/aos.css'; 


function Form() {
    return (
        <div className="container text-white " data-aos="flip-up">
            <div className="row py-5 form-list">
                <div className="col-md-4 lefttext my-auto">
                    <span>Appointment</span>
                    <h2>GET IN TOUCH!</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur Ui adipiscing elit, sed do eiusmod tempor.</p>

                </div>
                <div className="col-md-8">


                    <form className='formbg'>
                        <div className="row mb-3">
                    <div className="col-md-6 borderr">
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <input type="text" className="form-control text-white-50" id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="yourNumber" className="form-label">Your Number</label>
                        <input type="text" className="form-control text-white-50" id="yourNumber" placeholder="Enter your number" />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="yourEmail" className="form-label">Your Email</label>
                        <input type="email" className="form-control text-white-50" id="yourEmail" placeholder="Enter your email" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="service" className="form-label">Service</label>
                        <input type="text" className="form-control text-white-50" id="service" placeholder="Enter the service you need" />
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control text-white-50" id="message" rows="3" placeholder="Enter your message"></textarea>
                </div>
                <Button className='Button'><IoIosStar /> Book Now</Button>
            </form>
        </div>
            </div >
        </div >
    );
}

export default Form;