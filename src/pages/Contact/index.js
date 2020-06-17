import React from "react";
import client from "../../contentful";

import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import BgImage from "../../components/ImgAsBackground";

import mapImg from "../../assets/images/MapPin.png"
import MailImg from "../../assets/images/Mail.png"
import PhoneImg from "../../assets/images/Phone.png"
import "./contact.css";

const Contact = () => {

  const [bgImgHero, setBgImgHero] = React.useState(null);
  const [heroText, setHeroText] = React.useState(null);

  React.useEffect(() => {
    client.getAsset('2TZGb4Zl5XqDAtIeUFcKuP')
    .then((asset) => {
      setBgImgHero(`${asset.fields.file.url}?fit=scale&w=1024&h=768`);
    })
    .catch(console.error)
    }, []);

    React.useEffect(() => {
      client.getEntry('1UKgWfKya2vioxsTSLPy43')
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
    <div className="contact-view">
      <Nav/>
        <div className="contact__first-view">
          <BgImage src={bgImgHero}/>
          <div className="contact_hero-text">
            <h1>{heroText.title}</h1>
            {documentToReactComponents(heroText.heroTextFrontpage)}
          </div>
          <div className="contact_hero-text contact_hero-text-pos">
            <ul>
            <li><img src={mapImg} alt="icon"/><p>{heroText.address}</p></li>
            <li><img src={MailImg} alt="icon"/><p>{heroText.email}</p></li>
            <li><img src={PhoneImg} alt="icon"/><p>{heroText.phoneNumber}</p></li>
            </ul>
          </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;
