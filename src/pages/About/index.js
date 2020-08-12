import React from "react";
import client from "../../contentful";

import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import PreLoader from "../../components/PreLoader";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import "./about.css";



const About = () => {

  const [bgImgHero, setBgImgHero] = React.useState(null);
  // const [bgImgFilter, setBgImgFilter] = React.useState(null);
  const [heroText, setHeroText] = React.useState(null);
  const [subImages, setSubImages] = React.useState(null);

  React.useEffect(() => {
    client.getEntry('rqIjPz0n3wwEFHhrvubxo')
    .then((entry) => {
      // if (entry.fields.filter === undefined) {
      //   setBgImgFilter(0);
      // } else {
      //   setBgImgFilter(entry.fields.filter);
      // }
      setBgImgHero(`${entry.fields.image.fields.file.url}?fit=scale&w=1024&h=768`);
    })
    .catch(console.error)
    }, []);

    React.useEffect(() => {
      client.getEntry('6KrklFpQQRJ6v5aqNANYqq')
      .then((entry) => {        
        setHeroText(entry.fields);
      })
      .catch(console.error)
      }, []);

    React.useEffect(() => {
      client.getEntry('2F1eoZtdKePxqPHMcQe8dL')
      .then((entry) => {        
        setSubImages(entry.fields.imagesForSubPage);
      })
      .catch(console.error)
      }, []);

      if (!bgImgHero || !heroText || !subImages) {
        return (
          <div>
            <Nav showNav="yes"/>
            <div className="pre-loader">
            <PreLoader/>
            </div>
          </div>
        )
      };
 
  return (
    <div className="about-view">
      <Nav showNav="yes"/>
      <div className="about__first-view">
          {/* <BgImage src={bgImgHero} filter={bgImgFilter}/> */}
          {/* <div className="about__hero-img-container">
            <img alt="hero" src={bgImgHero}/>
          </div> */}
          <div className="about__hero-text">
            <h1>{heroText.title}</h1>
            {documentToReactComponents(heroText.heroTextFrontpage)}
          </div>
      </div>
      <div className="about__second-view">
          <div className="about__post-img-container">
          {subImages.map((post,i) =>{
            return (
                <img key={i} src={post.fields.file.url} alt="workers"></img>
            );
          })};
          </div>
        </div> 
      <Footer/>
    </div>
  );
};

export default About;
