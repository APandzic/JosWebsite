import React from "react";
import client from "../../contentful";

import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import PreLoader from "../../components/PreLoader";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import BgImage from "../../components/ImgAsBackground";

import mapImg from "../../assets/images/MapPin.png"
import MailImg from "../../assets/images/Mail.png"
import PhoneImg from "../../assets/images/Phone.png"
import "./contact.css";

const Contact = () => {

  const [bgImgHero, setBgImgHero] = React.useState(null);
  const [bgImgFilter, setBgImgFilter] = React.useState(null);
  const [heroText, setHeroText] = React.useState(null);

  React.useEffect(() => {
    client.getEntry('8dsivGZMKxFuv3LjDWClo')
    .then((entry) => {
      if (entry.fields.filter === undefined) {
        setBgImgFilter(0);
      } else {
        setBgImgFilter(entry.fields.filter);
      }
      setBgImgHero(`${entry.fields.image.fields.file.url}?fit=scale&w=1024&h=768`);
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
          <div>
            <Nav/>
            <div className="pre-loader">
            <PreLoader/>
            </div>
          </div>
        )
      };
      

  return (
    <div className="contact-view">
      <Nav/>
        <div className="contact__first-view">
          <BgImage src={bgImgHero} filter={bgImgFilter}/>
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
