import React, { useState } from "react";
import "./imagegallerypage.css";
import photos from "../Imagegallerypage/Photo"; // Ensure path is correct

const ImageGalleryPage = () => {
	const [selectedImage, setSelectedImage] = useState(null);
	const [currentIndex, setCurrentIndex] = useState(0);

	const openModal = (index) => {
		setCurrentIndex(index);
		setSelectedImage(photos[index].src);
	};

	const closeModal = () => {
		setSelectedImage(null);
	};

	const nextImage = () => {
		const newIndex = (currentIndex + 1) % photos.length;
		setCurrentIndex(newIndex);
		setSelectedImage(photos[newIndex].src);
	};

	const prevImage = () => {
		const newIndex = (currentIndex - 1 + photos.length) % photos.length;
		setCurrentIndex(newIndex);
		setSelectedImage(photos[newIndex].src);
	};

	const handleClickOutside = (e) => {
		if (e.target.classList.contains('modal')) {
			closeModal();
		}
	};

	const handleArrowClick = (e) => {
		e.stopPropagation();  // Prevents closing the modal when clicking on arrows
	};

	return (
		<div>
			<div className='bggg'>
				</div>
				<div >
					<h1 className='Aboutus1text'>Imgaegallerypage</h1>
				</div>
			<div className="container mt-4">
				
				<h2 className="text-center Photo-Gallery py-5">Photo Gallery</h2>
				<div className="row">
					{photos.map((photo, index) => (
						<div key={index} className="col-md-4 mb-3">
							<img
								src={photo.src}
								alt={photo.alt}
								className="img-fluid rounded shadow-sm img-thumbnail"
								style={{ cursor: "pointer", objectFit: "cover", height: "200px", width: "100%" }}
								onClick={() => openModal(index)}
							/>
						</div>
					))}
				</div>

				{/* Modal for Full Image View */}
				{selectedImage && (
					<div
						className="modal show d-block"
						tabIndex="-1"
						style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
						onClick={handleClickOutside}  // Close modal when clicking outside
					>
						<div className="modal-dialog modal-dialog-centered">
							<div className="modal-content bg-transparent border-0">
								<div className="modal-body text-center position-relative">
									<button className="btn3 btn-light position-absolute " onClick={closeModal}>
										✖
									</button>
									<img src={selectedImage} alt="Full View" className="img-fluid rounded" />

									{/* Left Arrow Button on Top of Image */}
									<button
										className="btn1 btn-light translate-middle-y "
										onClick={(e) => { prevImage(); handleArrowClick(e); }}
										style={{ fontSize: "2rem", zIndex: 1 }}
									>
										←
									</button>

									{/* Right Arrow Button on Top of Image */}
									<button
										className="btn2 btn-light  translate-middle-y "
										onClick={(e) => { nextImage(); handleArrowClick(e); }}
										style={{ fontSize: "2rem", zIndex: 1 }}
									>
										→
									</button>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default ImageGalleryPage;
