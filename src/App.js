import React, { Suspense } from "react";
import { Router } from '@reach/router';

import Nav from "./components/Nav";
import PreLoader from "./components/PreLoader";

import NotFound from "./pages/NotFound";

import "./assets/fonts/IT156___.otf"
import "./assets/fonts/IT164___.otf"
import "./assets/fonts/IT166___.otf"
import "./assets/fonts/Rasmus-Bold.otf"
import "./App.css"

const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Work = React.lazy(() => import('./pages/Work'));
const Contact = React.lazy(() => import('./pages/Contact'));
// in the future
// const Gallery = React.lazy(() => import('./pages/Gallery'));

const LoadingPage = () => {
  return (
    <div>
      <Nav showNav="yes"/>
      <div className="pre-loader">
      <PreLoader/>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Suspense fallback={<LoadingPage />}>
        <Router>
          <Home path="/" />
          {/* <Gallery path="/gallery" /> */}
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
 