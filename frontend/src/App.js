// import logo from './logo.svg';
import './App.css';
import "./components/SiteWrapper.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Page Components
import Header from './components/Header';
import Navbar from './components/Navbar';

// Standalone Pages
import Home from './pages/Home';
import Projects from './pages/Projects';
import Music from './pages/Music';
import About from './pages/About';

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <section className='site-wrapper'>
            <Navbar />
            <Header />
            <div className='content'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/music' element={<Music />} />
                <Route path='/about' element={<About />} />
              </Routes>
            </div>
          </section>
        </div>
      </Router>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous">
      </link>
    </>



    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
