import React from "react";
import client from "../../contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import PreLoader from "../../components/PreLoader";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

import "./work.css";

const Work = () => {


  const [bgImgHero, setBgImgHero] = React.useState(null);
  const [heroText, setHeroText] = React.useState(null);
  const [subImages, setSubImages] = React.useState(null);

  React.useEffect(() => {
    client.getAsset('3Acy0KWFymh3tHr6F73hOi')
    .then((asset) => {
      setBgImgHero(`${asset.fields.file.url}?fit=scale&w=1024&h=768`);
    })
    .catch(console.error)
    }, []);

    React.useEffect(() => {
      client.getEntry('1tHHDwDyQoXLlY8mTWHjh3')
      .then((entry) => {        
        setHeroText(entry.fields);
      })
      .catch(console.error)
      }, []);

      React.useEffect(() => {
        client.getEntry('14VNczULZkWKFjDFG745z4')
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
    <div className="work-view">
      <Nav showNav="yes"/>
      <div className="work__first-view">
        <div className="work__img-container">
          <img alt="hero" src={bgImgHero}/>
        </div>
          <div className="work_hero-text">
            <h1>{heroText.title}</h1>
            {documentToReactComponents(heroText.heroTextFrontpage)}
          </div>
      </div>
      <div className="work__second-view">
          <div className="work__post-img-container">
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

export default Work;
