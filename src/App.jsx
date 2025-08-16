import './App.css';
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import BookAppointment from './BookAppointment';
import Contact from './Contact';
import Departments from './Departments';
import DepartmentPage from './DepartmentPage';
import ScrollToTop from './ScrollToTop';

const App = () => {
  return (
      <div className="App">
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/book-appointment" element={<BookAppointment />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/departments/:dept" element={<DepartmentPage />} />
            {/* Add more routes as we create more components */}
          </Routes>
        </main>
        <Footer />
      </div>
  )
}

export default App;
