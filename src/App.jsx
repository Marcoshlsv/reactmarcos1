import './App.css'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./routes/Home.jsx";
import Contact from "./routes/Contact.jsx";
import About from "./routes/About.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";


function App() {

  return (
    <Router>
      <header>

        <nav>
          <img src="./public/atom.svg" width="30px"/>
          <Link to="/"> Home</Link>
          <Link to="/about"> About</Link>
          <Link to="/contact"> Contact</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="about" element={<About/>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App
