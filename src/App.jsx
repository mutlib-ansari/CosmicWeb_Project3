import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import Adminpanel from "./components/Adminpanel/Adminpanel"
import Aboutus from "./pages/Aboutus/Aboutus";
import Footer from "./components/Footer/Footer";
import AppointmentForm from "./pages/Appointment/Appointment";
import BlogPage from "./pages/BlogPage/BlogPage";
import PostDetails  from "./pages/BlogPage/PostDetails";
import ImagegalleryPage from "./pages/Imagegallerypage/Imagegallerypage";
import Videogallerypage from "./pages/Videogallerypage/Videogallerypage"
import Singup from "./pages/Sing-up/Sing-up"
import AstrologyConsultation from "./pages/AstrologyConsultation/Astrology-Consultation"
import VastuConsultation from "./pages/VastuConsultation/Vastu-Consultation"
import Form from "./components/Form/Form"
import Testimonials from "./components/Testimonials/testimonials";
// import Footer2 from "./components/Footer2/Footer2"

function App() {
  return (
    <><div className="mybg">
      {/* <Router><Routes><Route path="/sing-up" element={<Singup />}/></Routes></Router> */}
      
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adminpanel" element={<Adminpanel />} />
          <Route path="/aboutus" element={<Aboutus />}/>
          <Route path="/appointmentForm" element={<AppointmentForm />}/>
          <Route path="/blogPage" element={<BlogPage />}/>
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/imagegallerypage" element={<ImagegalleryPage />}/>
          <Route path="/videogallerypage" element={<Videogallerypage />}/>
          <Route path="/sing-up" element={<Singup />}/>
          <Route path="/astrology-consultation" element={<AstrologyConsultation />}/>
          <Route path="/vastu-consultation" element={<VastuConsultation/>}/>

          
          
          
    
        </Routes>
      </Router>
      {/* <Footer2 /> */}
      <Form />
      <Testimonials />
      <Footer />
      </div>
    </>
  );
}

export default App;
