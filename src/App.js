import React from "react";
import { Router } from '@reach/router';

import Home from './pages/Home/Home';
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery/gallery";

import "./assets/fonts/IT156___.otf"
import "./assets/fonts/IT164___.otf"
import "./assets/fonts/IT166___.otf"
import "./assets/fonts/Rasmus-Bold.otf"
import "./App.css"


function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <Gallery path="/gallery" />
        <About path="/about" />
        <Work path="/work" />
        <Contact path="/contact" />
        <NotFound default />
      </Router>
    </div>
  );
}

export default App;
 