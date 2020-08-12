import React from "react"; 
import { Parallax } from 'react-scroll-parallax';

import "./parallax.css";
 
const ParallaxImage = props => (
    <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
        <img src={props.src} alt="parallax"/>
    </Parallax>
);

export default ParallaxImage;