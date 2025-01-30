import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import Adminpanel from "./components/Adminpanel/Adminpanel"
import Aboutus from "./pages/Aboutus/Aboutus";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <><div className="mybg">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adminpanel" element={<Adminpanel />} />
          <Route path="/aboutus" element={<Aboutus />}/>
        </Routes>
      </Router>
      <Footer />
      </div>
    </>
  );
}

export default App;
