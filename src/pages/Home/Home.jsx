import React from "react";
import { Container, Row, Col, Form as BootstrapForm } from "react-bootstrap";
import "./home.css";
import Mainslider from "../../components/Mainslider/Mainslider";
import Dasbord from "../../components/Dasbord/Dasbord";
import Ourservices from "../Ourservices/Ourservices";
import Products from "../Products/Products";
import Elemantorbox from "../Elementorbox/Elemantorbox";
import Form from "../../components/Form/Form"
import Testimonials from "../../components/Testimonials/testimonials";
import Imagegallery from "../Imagegallery/Imagegallery";
import Videogallery from "../Videogallery/Videogallery";
import Inerbanner from "../Inerbanner/Inerbanner";
import AdvantagesSection from "../AdvantagesSection/AdvantagesSection";
// import PostDetails  from "../BlogPage/PostDetails";
// import Singup from "../Sing-up/Sing-up"
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = () => {

  return (
    <><div className="home">
      <Mainslider />
      <Dasbord />
      <Ourservices />
      <Products />
      <Inerbanner/>
      <AdvantagesSection />
      <Elemantorbox/>
      <Imagegallery />
      <Videogallery />
      <Form />
      <Testimonials />
      {/* <PostDetails /> */}
      {/* <Router><Routes><Route path="/sing-up" element={<Singup />}/></Routes></Router> */}
      
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
