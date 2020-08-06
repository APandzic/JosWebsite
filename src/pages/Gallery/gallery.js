import React from "react";
import client from "../../contentful";

import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import PreLoader from "../../components/PreLoader/PreLoader";

import "./gallery.css";


const Gallery = () => {
  const [posts, setPosts] = React.useState(null);

  React.useEffect(() => {
    client.getEntries({
      content_type: "gallery",
    }).then((entries) => {
      setPosts(entries.includes.Asset);
    });
  }, []);

  if (!posts) {
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
    <div className="gallery-view">
    <Nav/>
    <div className="gallery_first-view" >
      {posts.map((post,i) => {
        return <img key={i} alt="food"  src={post.fields.file.url}></img>;
      })}
    </div>
    <Footer/>
    </div>
  );
};

export default Gallery;

