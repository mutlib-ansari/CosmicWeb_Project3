// import React, { useState } from "react";
// import "./videogallerypage.css";
// import videos from "../Videogallerypage/Video"; // Ensure path is correct

// const VideoGalleryPage = () => {
// 	const [selectedVideo, setSelectedVideo] = useState(null);
// 	const [currentIndex, setCurrentIndex] = useState(0);

// 	const openModal = (index) => {
// 		setCurrentIndex(index);
// 		setSelectedVideo(videos[index].src);
// 	};

// 	const closeModal = () => {
// 		setSelectedVideo(null);
// 	};

// 	const nextVideo = () => {
// 		const newIndex = (currentIndex + 1) % videos.length;
// 		setCurrentIndex(newIndex);
// 		setSelectedVideo(videos[newIndex].src);
// 	};

// 	const prevVideo = () => {
// 		const newIndex = (currentIndex - 1 + videos.length) % videos.length;
// 		setCurrentIndex(newIndex);
// 		setSelectedVideo(videos[newIndex].src);
// 	};

// 	const handleClickOutside = (e) => {
// 		if (e.target.classList.contains('modal')) {
// 			closeModal();
// 		}
// 	};

// 	const handleArrowClick = (e) => {
// 		e.stopPropagation();  // Prevents closing the modal when clicking on arrows
// 	};

// 	return (
// 		<div>
// 			<div className='bggg'>
// 			</div>
// 			<div>
// 				<h1 className='Aboutus1text'>Video Gallery Page</h1>
// 			</div>
// 			<div className="container mt-4">
// 				<h2 className="text-center Video-Gallery py-5">Video Gallery</h2>
// 				<div className="row">
// 					{videos.map((video, index) => (
// 						<div key={index} className="col-md-4 mb-3">
// 							<video
// 								src={video.src}
// 								alt={video.alt}
// 								className="img-fluid rounded shadow-sm img-thumbnail"
// 								style={{ cursor: "pointer", objectFit: "cover", height: "200px", width: "100%" }}
// 								onClick={() => openModal(index)}
// 								controls
// 							/>
// 						</div>
// 					))}
// 				</div>

// 				{/* Modal for Full Video View */}
// 				{selectedVideo && (
// 					<div
// 						className="modal show d-block"
// 						tabIndex="-1"
// 						style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
// 						onClick={handleClickOutside}  // Close modal when clicking outside
// 					>
// 						<div className="modal-dialog modal-dialog-centered">
// 							<div className="modal-content bg-transparent border-0">
// 								<div className="modal-body text-center position-relative">
// 									<button className="btn3 btn-light position-absolute" onClick={closeModal}>
// 										✖
// 									</button>
// 									<video
// 										src={selectedVideo}
// 										controls
// 										autoPlay
// 										className="img-fluid rounded"
// 									/>

// 									{/* Left Arrow Button on Top of Video */}
// 									<button
// 										className="btn1 btn-light translate-middle-y"
// 										onClick={(e) => { prevVideo(); handleArrowClick(e); }}
// 										style={{ fontSize: "2rem", zIndex: 1 }}
// 									>
// 										←
// 									</button>

// 									{/* Right Arrow Button on Top of Video */}
// 									<button
// 										className="btn2 btn-light translate-middle-y"
// 										onClick={(e) => { nextVideo(); handleArrowClick(e); }}
// 										style={{ fontSize: "2rem", zIndex: 1 }}
// 									>
// 										→
// 									</button>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				)}
// 			</div>
// 		</div>
// 	);
// };

// export default VideoGalleryPage;


import React, { useState } from "react";
import "./videogallerypage.css";
import videos from "../Videogallerypage/Video"; // Ensure path is correct

const VideoGalleryPage = () => {
	const [selectedVideo, setSelectedVideo] = useState(null);
	const [currentIndex, setCurrentIndex] = useState(0);

	const openModal = (index) => {
		setCurrentIndex(index);
		setSelectedVideo(videos[index].src);
	};

	const closeModal = () => {
		setSelectedVideo(null);
	};

	const nextVideo = () => {
		const newIndex = (currentIndex + 1) % videos.length;
		setCurrentIndex(newIndex);
		setSelectedVideo(videos[newIndex].src);
	};

	const prevVideo = () => {
		const newIndex = (currentIndex - 1 + videos.length) % videos.length;
		setCurrentIndex(newIndex);
		setSelectedVideo(videos[newIndex].src);
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
			{/* <div className='bggg'>
				<div>
					<h1 className='Aboutus2text'>Video Gallery Page</h1>
				</div>
			</div> */}
				<div className="breadcrumb-container">
                {/* Overlay */}
                <div className="breadcrumb-overlay"></div>

                <nav aria-label="breadcrumb" className="breadcrumb-content">
                    <ol className="breadcrumb bg-transparent text-light text-center" style={{ fontSize: "27px" }}>
                        <li className="breadcrumb-item">
                            <a href="/" className="text-light">Home</a>
                        </li>
                        <li className="breadcrumb-item active text-light" aria-current="page">
                            Video gallery
                        </li>
                    </ol>
                </nav>
            </div>

			<div className="container mt-4" style={{ paddingBottom: "80px" }} >
				<h2 className="text-center Video-Gallery py-5">Video Gallery</h2>
				<div className="row">
					{videos.map((video, index) => (
						<div key={index} className="col-md-4 mb-3">
							{/* For local videos */}
							{video.src.includes("youtube.com") ? (
								<iframe
									src={video.src}
									alt={video.alt}
									className="img-fluid rounded shadow-sm img-thumbnail"
									style={{ cursor: "pointer", objectFit: "cover", height: "200px", width: "100%" }}
									onClick={() => openModal(index)}
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								/>
							) : (
								{/* For local video files */ }
								// <video
								// 	src={video.src}
								// 	alt={video.alt}
								// 	className="img-fluid rounded shadow-sm img-thumbnail"
								// 	style={{ cursor: "pointer", objectFit: "cover", height: "200px", width: "100%" }}
								// 	onClick={() => openModal(index)}
								// 	controls
								// />
							)}
						</div>
					))}
				</div>

				{/* Modal for Full Video View */}
				{selectedVideo && (
					<div
						className="modal show d-block"
						tabIndex="-1"
						style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
						onClick={handleClickOutside}  // Close modal when clicking outside
					>
						<div className="modal-dialog modal-dialog-centered">
							<div className="modal-content bg-transparent border-0">
								<div className="modal-body text-center position-relative">
									<button className="btn3 btn-light position-absolute" onClick={closeModal}>
										✖
									</button>
									{/* Check if the selected video is from YouTube */}
									{selectedVideo.includes("youtube.com") ? (
										<iframe
											src={selectedVideo}
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
											allowFullScreen
											className="img-fluid rounded"
											style={{ maxWidth: "100%", maxHeight: "80vh" }}
										/>
									) : (
										<video
											src={selectedVideo}
											controls
											autoPlay
											className="img-fluid rounded"
										/>
									)}

									{/* Left Arrow Button on Top of Video */}
									<button
										className="btn1 btn-light translate-middle-y"
										onClick={(e) => { prevVideo(); handleArrowClick(e); }}
										style={{ fontSize: "2rem", zIndex: 1 }}
									>
										←
									</button>

									{/* Right Arrow Button on Top of Video */}
									<button
										className="btn2 btn-light translate-middle-y"
										onClick={(e) => { nextVideo(); handleArrowClick(e); }}
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

export default VideoGalleryPage;
