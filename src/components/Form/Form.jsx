// import React from 'react';
// import './form.css';
// import Button from 'react-bootstrap/Button';
// import { IoIosStar } from "react-icons/io";
// import 'aos/dist/aos.css';


// function Form() {
//     return (
//         <div className="container text-white " data-aos="flip-up">
//             <div className="row py-5 form-list">
//                 <div className="col-md-4 lefttext my-auto">
//                     <span>Appointment</span>
//                     <h2>GET IN TOUCH!</h2>
//                     <p>Lorem ipsum dolor sit amet, consectetur Ui adipiscing elit, sed do eiusmod tempor.</p>

//                 </div>
//                 <div className="col-md-8">


//                     <form className='formbg'>
//                         <div className="row mb-3">
//                             <div className="col-md-6 col-6 borderr">
//                                 <label htmlFor="firstName" className="form-label">First Name</label>
//                                 <input type="text" className="form-control text-white-50" id="firstName" placeholder="Enter your first name" />
//                             </div>
//                             <div className="col-md-6 col-6">
//                                 <label htmlFor="yourNumber" className="form-label">Your Number</label>
//                                 <input type="text" className="form-control text-white-50" id="yourNumber" placeholder="Enter your number" />
//                             </div>
//                         </div>
//                         <div className="row mb-3">
//                             <div className="col-md-6 col-6">
//                                 <label htmlFor="yourEmail" className="form-label">Your Email</label>
//                                 <input type="email" className="form-control text-white-50" id="yourEmail" placeholder="Enter your email" />
//                             </div>
//                             <div className="col-md-6 col-6">
//                                 <label htmlFor="service" className="form-label">Service</label>
//                                 <input type="text" className="form-control text-white-50" id="service" placeholder="Enter the service you need" />
//                             </div>
//                         </div>
//                         <div className="mb-3">
//                             <label htmlFor="message" className="form-label">Message</label>
//                             <textarea className="form-control text-white-50" id="message" rows="3" placeholder="Enter your message"></textarea>
//                         </div>
//                         {/* <Button className='Button'><IoIosStar /> Book Now</Button> */}
//                         <div className=''>
//                             <button className="c-button c-button--gooey formbt"> <IoIosStar />Book now
//                                 <div className="c-button__blobs">
//                                     <div />
//                                     <div />
//                                     <div />
//                                 </div>
//                             </button>
//                             <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ display: 'block', height: 0, width: 0 }}>
//                                 <defs>
//                                     <filter id="goo">
//                                         <feGaussianBlur in="SourceGraphic" stdDeviation={10} result="blur" />
//                                         <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
//                                         <feBlend in="SourceGraphic" in2="goo" />
//                                     </filter>
//                                 </defs>
//                             </svg>
//                         </div>
//                     </form>
//                 </div>
//             </div >
//         </div >
//     );
// }

// export default Form;

import React from "react";
import "./form.css";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const App = () => {
    return (
        <section style={{
            backgroundImage: "linear-gradient(rgb(15 11 62 / 85%), rgb(16 6 38)),  url('https://kitnew.moxcreative.com/astrologia/wp-content/uploads/sites/12/2022/11/astronomical-clock-in-prague-czech-republic-close-up-photo-e1668035871830.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            
            width: '100%',
        }}  >
        <div className="container d-flex justify-content-center align-items-center  text-light py-5">
            <div className="row ">
                
                <div className="col-md-6 p-4 form-border  text-light">
                    <h4 className="form-top-text">Book Appoiment</h4>
                    <p className="text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                    <form className="fo">
                        <div className="mb-3 d-flex gap-2">
                            <div className="sizeee"><label className="form-label">Name</label>
                                <input type="text" className="form-control" placeholder="Name" />
                            </div>
                            <div className="sizeee">
                                <label className="form-label ">Gender</label>
                                <select className="form-select form-control">
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </select>
                            </div>
                        </div>

                        <div className="mb-3 d-flex gap-2">
                            <div className="sizeee">
                                <label className="form-label">Date of Birth</label>
                                <input type="date" className="form-control" />
                            </div>
                            <div className="sizeee">
                                <label className="form-label">Time of Birth</label>
                                <input type="time" className="form-control" />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" placeholder="Email" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Message</label>
                            <textarea className="form-control" placeholder="Message" rows="3"></textarea>
                        </div>
                        <div className=''>
                            <button className="c-button c-button--gooey formbt3"> Book now                               <div className="c-button__blobs">
                                <div />
                                <div />
                                <div />
                            </div>
                            </button>
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ display: 'block', height: 0, width: 0 }}>
                                <defs>
                                    <filter id="goo">
                                        <feGaussianBlur in="SourceGraphic" stdDeviation={10} result="blur" />
                                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                                        <feBlend in="SourceGraphic" in2="goo" />
                                    </filter>
                                </defs>
                            </svg>
                        </div>
                    </form>
                </div>

                
                <div className="col-md-6 p-4 text-light">
                    <h4 className="form-top-text">Astrology+ Subscription Includes:</h4>
                    <p className="text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                    <ul className="list-unstyled">
                        <li className="mb-4">
                            <span className="form-icon me-2"><IoCheckmarkCircleOutline /></span>
                            <b className="form-icon-text">Detailed Birth Chart</b> <br />
                            <span className="text-muted">Dictumst massa mauris vel primis et aenean euismod congue nisi elementum rutrum</span>
                        </li>
                        <li className="mb-4">
                            <span className="form-icon me-2"><IoCheckmarkCircleOutline /></span>
                            <b className="form-icon-text">Personalized Daily Horoscopes</b> <br />
                            <span className="text-muted me-2">Dictumst massa mauris vel primis et aenean euismod congue nisi elementum rutrum</span>
                        </li>
                        <li className="mb-4">
                            <span className="form-icon me-2"><IoCheckmarkCircleOutline /></span>
                            <b className="form-icon-text">Full-Moon Reading</b> <br />
                            <span className="text-muted">Dictumst massa mauris vel primis et aenean euismod congue nisi elementum rutrum</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </section>
    );
};

export default App;
