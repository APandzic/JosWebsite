import React, { Suspense } from "react";
import { Router } from '@reach/router';

// import Home from './pages/Home/Home';
import NotFound from "./pages/NotFound";
// import About from "./pages/About";
// import Work from "./pages/Work";
// import Contact from "./pages/Contact";
// import Gallery from "./pages/Gallery/gallery";

import "./assets/fonts/IT156___.otf"
import "./assets/fonts/IT164___.otf"
import "./assets/fonts/IT166___.otf"
import "./assets/fonts/Rasmus-Bold.otf"
import "./App.css"

const Home = React.lazy(() => import('./pages/Home/Home'));
const About = React.lazy(() => import('./pages/About'));
const Work = React.lazy(() => import('./pages/Work'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Gallery = React.lazy(() => import('./pages/Gallery/gallery'));

//Detta måste ändras. 
const LoadingPage = () => <div>Loading...</div>

function App() {
  return (
    <div className="App">
      <Suspense fallback={<LoadingPage />}>
        <Router>
          <Home path="/" />
          <Gallery path="/gallery" />
          <About path="/about" />
          <Work path="/work" />
          <Contact path="/contact" />
          <NotFound default />
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
 