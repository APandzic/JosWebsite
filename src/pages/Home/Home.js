import React from "react";
import client from "../../contentful";
import { Element, animateScroll as scroller } from 'react-scroll';

import PreLoader from "../../components/PreLoader/PreLoader";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import BgImage from "../../components/ImgAsBackground";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import arrowDown from "../../assets/images/arrowdown.svg"
import "./Home.css";

const Home = () => {
  const [posts, setPosts] = React.useState(null);
  const [bgImgHero, setBgImgHero] = React.useState(null);
  const [bgImgFilter, setBgImgFilter] = React.useState(null);
  const [heroText, setHeroText] = React.useState(null);
  const [bgImgDesign, setBgImgDesign] = React.useState(null);

  React.useEffect(() => {
  client.getEntry('41MeN1NV4cy7IOqujasrrV')
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
    client.getEntry('2ckzy2x6Dc9YgIPQk1kvJN')
    .then((entry) => {
      setHeroText(entry.fields);
    })
    .catch(console.error)
    }, []);

  React.useEffect(() => {
    client.getEntries({
      content_type: "post",
    }).then((entries) => {
      setPosts(entries.items);
    });
  }, []);

  React.useEffect(() => {
    client.getEntries({
      content_type: "backgroundImages",
    }).then((entries) => {      
      setBgImgDesign(entries.items);
    });
  }, []);

  if (!bgImgHero || !posts || !heroText || !bgImgDesign) {
    return (
      <div>
        <Nav/>
        <div className="pre-loader">
        <PreLoader/>
        </div>
      </div>
    )
  };

  const scrollToFunction = () => {
    scroller.scrollTo('scroll-to-element', {
      duration: 100,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -65
    })
  }


  return (
    <div className="home-view">
      <Nav/>
        <div className="home__first-view">
          <BgImage src={bgImgHero} filter={bgImgFilter}/>
          <div className="home_hero-text">
            <h1>{heroText.title}</h1>
            {documentToReactComponents(heroText.heroTextFrontpage)}
          </div>
          <img className="scrollToButton" src={arrowDown} onClick={scrollToFunction} alt="arrow button"></img>
        </div>
        <div className="home__second-view">
        <Element name="scroll-to-element" className="element"></Element>
        {posts.map((post, i) => {
            return (
              <div key={i}>
              <article className="home__posts">
                <section className="article__content">
                  <div>
                    {post.fields.images.length === 1 &&
                    <div className="article__container-img">
                      {post.fields.images.map((img, index ) => {
                        return (
                          <img key={index} src={img.fields.file.url} alt="food"></img>
                        );
                      })}
                    </div>
                    }
                    {post.fields.images.length > 1 &&
                    <div className="article__container-img-grid">
                      {post.fields.images.map((img, index ) => {
                        return (
                          <img key={index} src={img.fields.file.url} alt="food"></img>
                        );
                      })}
                    </div>
                    }
                  </div>
                  <div>
                    <div className="article__container-text">
                    <h1>{post.fields.title}</h1>
                      {documentToReactComponents(post.fields.text)}
                      {documentToReactComponents(post.fields.link)}
                    </div>
                  </div>
                </section>
              </article>

              {posts.length - 1 !== i &&
                <div className="parallax" style={{backgroundImage: `url(${bgImgDesign[i].fields.backgroundImage.fields.file.url})`}}></div>
              }
              </div>
            );
          })}
        </div>
      <Footer/>
    </div>
  );
};

export default Home;
