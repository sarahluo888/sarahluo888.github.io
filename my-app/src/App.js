import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/home';
// import Timeline from './pages/Timeline/timeline';
import Footer from './components/Footer/footer';
import Projects from './pages/Projects/projects';
import Background from './pages/Background/background';
// import Photography from './pages/Photography/photography';

function App() {
  return (
    <div className="App">
        <Router>
          {/* <NavBar /> */}
          <div className="body">
            <Routes>
              <Route exact path="/" component={Home}/>
              {/* <Route path="/about" component={About}/> */}
              <Route path="/background" component={Background}/>
              {/* <Route path="/timeline" component={Timeline}/> */}
              <Route path="/projects" component={Projects}/>
              {/* <Route path="/gallery" component={Photography}/> */}
            </Routes>
            <Footer />
          </div>

        </Router>
    </div>
  );
}

export default App;