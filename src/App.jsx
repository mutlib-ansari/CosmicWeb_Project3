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

function App() {
  return (
    <><div className="mybg">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adminpanel" element={<Adminpanel />} />
          <Route path="/aboutus" element={<Aboutus />}/>
          <Route path="/appointmentForm" element={<AppointmentForm />}/>
          <Route path="/blogPage" element={<BlogPage />}/>
          <Route path="/posts/:postId" element={<PostDetails />} />
          
          
        </Routes>
      </Router>
      <Footer />
      </div>
    </>
  );
}

export default App;
