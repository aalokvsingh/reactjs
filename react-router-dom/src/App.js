import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from "./pages/NotFound";
import Post from './pages/Post';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" class="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" class="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" class="nav-link">Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/post/1" class="nav-link">Post</Link>
            </li>
            </ul>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='post/:id' element={<Post/>} />
        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
