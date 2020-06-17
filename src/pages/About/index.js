import React from "react";
import client from "../../contentful";

import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import BgImage from "../../components/ImgAsBackground";

import "./about.css";



const About = () => {

  const [bgImgHero, setBgImgHero] = React.useState(null);
  const [heroText, setHeroText] = React.useState(null);

  React.useEffect(() => {
    client.getAsset('3PeCEMDgWt1NtcBoFw5zou')
    .then((asset) => {
      setBgImgHero(`${asset.fields.file.url}?fit=scale&w=1024&h=768`);
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

      if (!bgImgHero || !heroText) {
        return (
          <div className="pre-loader">
            <Nav/>
          </div>
        )
      };
 
  return (
    <div className="about-view">
      <Nav/>
      <div className="about__first-view">
          <BgImage src={bgImgHero}/>
          <div className="about_hero-text">
            <h1>{heroText.title}</h1>
            {documentToReactComponents(heroText.heroTextFrontpage)}
          </div>
      </div>
      <Footer/>
    </div>
  );
};

export default About;
