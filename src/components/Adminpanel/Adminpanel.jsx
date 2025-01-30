import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Adminpanel.css";
import { IoMdCloudUpload } from "react-icons/io";
import { MdAssuredWorkload } from "react-icons/md";
import { MdOutlineBookmarkBorder } from "react-icons/md";
import { FaBookTanakh } from "react-icons/fa6";
import { MdCastForEducation } from "react-icons/md";
import { MdOutlineLockReset } from "react-icons/md";
import { ImHistory } from "react-icons/im";
import { FaUserEdit } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

function Adminpanel() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        city: '',
        country: 'India',
        gender: '',
        address: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
    };



    return (
        <div className="container a-bg py-5">
            <div className="row gx-xl-5 py-5">
                <div className="col-lg-3">
                    <aside className="widget-area mb-40">
                        <div className="widget p-25 radius-md">
                            <ul className="links text-white">
                                <li><Link to="/dashboard" className='text-white'><span className='das-icon'><MdAssuredWorkload /></span>Dashboard</Link></li>
                                <li><Link to="/orders" className='text-white'> <span className='das-icon'><MdOutlineBookmarkBorder /></span>My Orders</Link></li>
                                <li><Link to="/wishlist" className='text-white'> <span className='das-icon'> <FaBookTanakh /></span>My Appointments</Link></li>
                                {/* <li><Link to="/myorders" className='text-white' > <span className='das-icon'></span>My Orders </Link></li> */}
                                <li><Link to="/mycourse" className='text-white'> <span className='das-icon'> <MdCastForEducation /></span>My Course </Link></li>
                                <li><Link to="/reset-password" className='text-white'> <span className='das-icon'><MdOutlineLockReset /></span>Reset Password</Link></li>
                                <li><Link to="/transactionhistory" className='text-white'> <span className='das-icon'><ImHistory /></span>Transaction History</Link></li>
                                <li><Link to="/profile" className="active text-white"> <span className='das-icon'><FaUserEdit /></span>Edit Profile</Link></li>
                                <li><Link to="/logout" className='text-white'> <span className='das-icon'><FiLogOut /></span>Logout</Link></li>
                            </ul>
                        </div>
                    </aside>
                </div>

                <div className="col-lg-9">
                    <div className="user-profile-details mb-40">
                        <div className="account-info radius-md">
                            <div className="title">
                                <h4>Edit Profile</h4>
                            </div>
                            <div className="edit-info-area">
                                <form onSubmit={handleSubmit}>
                                    <div className="upload-img">
                                        <div className="file-upload-area">
                                            <div className="file-edit text-white">
                                                <input type="file" id="imageUpload" style={{ display: 'none' }} />
                                                <label htmlFor="imageUpload ">
                                                    <IoMdCloudUpload size={40} />
                                                </label>
                                            </div>
                                            <div className="file-preview">
                                                <div id="imagePreview" className="bg-img" data-bg-image="assets/images/1.png" style={{ backgroundImage: 'url("assets/images/avatar-1.jpg")', display: 'block', backgroundRepeat: 'no-repeat' }}></div>
                                            </div>
                                        </div>
                                        <div id="errorMsg"></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6 p-3">
                                            <div className="form-group mb-30">
                                                <label></label>
                                                <input type="text" className="form-control text-bg-light" placeholder="First Name" name="firstName" value={formData.firstName} onChange={handleChange} required />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 p-3 deffernt">
                                            <div className="form-group mb-20">
                                                <input type="text" className="form-control text-bg-light " placeholder="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} required />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 p-3">
                                            <div className="form-group mb-30">
                                                <input type="email" className="form-control text-bg-light" placeholder="Email" name="email" value={formData.email} onChange={handleChange} required />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 p-3">
                                            <input type="text" className="form-control text-bg-light" placeholder="Phone" name="phone" value={formData.phone} onChange={handleChange} required />
                                        </div>
                                        <div className="col-lg-6 p-3">
                                            <div className="form-group mb-30">
                                                <input type="text" className="form-control text-bg-light" placeholder="City" name="city" value={formData.city} onChange={handleChange} required />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 p-3">
                                            <div className="form-group mb-30">
                                                <select className="nice-select form-control text-bg-light" name="country" value={formData.country} onChange={handleChange}>
                                                    <option value="America">America</option>
                                                    <option value="England">England</option>
                                                    <option value="Italy">Italy</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 p-3">
                                            <div className="custom-checkbox mb-30">
                                                <input className="input-checkbox" type="checkbox" name="gender" id="checkboxMale" value="Male" checked={formData.gender === 'Male'} onChange={handleChange} />
                                                <label className="form-check-label text-white" htmlFor="checkboxMale"><span>Male</span></label>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 p-3">
                                            <div className="custom-radio mb-30">
                                                <input className="input-radio" type="radio" name="gender" id="radioFemale" value="Female" checked={formData.gender === 'Female'} onChange={handleChange} />
                                                <label className="form-radio-label text-white" htmlFor="radioFemale"><span>Female</span></label>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 p-3">
                                            <div className="form-group mb-30">
                                                <textarea name="address" className="form-control text-bg-light" placeholder="Address" value={formData.address} onChange={handleChange}></textarea>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 mb-15 p-3">
                                            <div className="form-button">
                                                <div className=''>
                                                    <button type="submit" className="c-button c-button--gooey" title="Update Profile"> Update Profile
                                                        <div className="c-button__blobs">
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
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Adminpanel;