import React from "react";
import "./home.css";
import Mainslider from "../../components/Mainslider/Mainslider";
import Dasbord from "../../components/Dasbord/Dasbord";
import Ourservices from "../Ourservices/Ourservices";
import Products from "../Products/Products";
// import Elemantorbox from "../Elementorbox/Elemantorbox";

import Imagegallery from "../Imagegallery/Imagegallery";
// import Videogallery from "../Videogallery/Videogallery";
// import Inerbanner from "../Inerbanner/Inerbanner";
import AdvantagesSection from "../AdvantagesSection/AdvantagesSection";

import AOS from 'aos';
import 'aos/dist/aos.css';
// import Herosection from "../../components/Herosection/Herosection";

AOS.init({
    duration: 1000, // Animation duration
    offset: 200, // Offset (in pixels) from the original trigger point
    once: true, // Whether animation should happen only once
    
});

const Home = () => {

  return (
    <><div className="home">
      <Mainslider />
      {/* <Herosection /> */}
      <Dasbord />
      <Ourservices />
      <Products />
      {/* <Inerbanner/> */}
      <AdvantagesSection />
      {/* <Elemantorbox/> */}
      <Imagegallery />
      {/* <Videogallery /> */}
      
      
     
      
      </div>
    </>
  );
};

export default Home;


// import React from "react";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./home.css";
// import Mainslider from "../../components/Mainslider/Mainslider";
// import Dasbord from "../../components/Dasbord/Dasbord";
// import Ourservices from "../Ourservices/Ourservices"
// import Products from "../Products/Products";
// import Elemantorbox from "../Elementorbox/Elemantorbox";
// import Form from "../../components/Form/Form"
// import Testimonials from "../../components/Testimonials/testimonials";
// import Footer from "../../components/Footer/Footer";
// import Imagegallery from "../Imagegallery/Imagegallery";
// import Videogallery from "../Videogallery/Videogallery";
// import Inerbanner from "../Inerbanner/Inerbanner";
// import Adminpanel from "../../components/Adminpanel/Adminpanel"

// const Home = () => {
//   return (


//     <Router>
//       <div className="home">
//         <Routes>
//           <Route path="/" element={<><Mainslider /> <Dasbord /> <Ourservices /> <Products /> <Inerbanner /> <Elemantorbox /> <Imagegallery /> <Videogallery /> <Testimonials /> <Form /> </>} />
          
//           <Route path="/adminpanel" element={<Adminpanel />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>


//   );
// };

// export default Home;
