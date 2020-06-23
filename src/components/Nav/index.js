import React from "react";
import { Link } from "@reach/router";
import "./nav.css"
import Button from "../Button1";
import ButtonSmall from "../Button2";
import InstagramLogo from "../../assets/images/instagram.png";
import FacebookLogo from "../../assets/images/facebook.png";
import JosLogo from "../Logo/Logo";


const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return {
        style: {
          opacity: isCurrent ? "0.5" : "1"
        }
      };
    }}
  />
);

const Nav = () => {

  const [sidebar, setSidebar] = React.useState('hidden');
  const [navBackground, setNavBackground] = React.useState(false);

  const navRef = React.useRef();
  navRef.current = navBackground;
  let style = {
    backgroundColor: navBackground ? "#3B623B" : "transparent",
    transition: "1s ease",
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 20
      if (navRef.current !== show) {
        setNavBackground(show)
      }
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleSidebar= () => {
    const toggle = sidebar === "hidden" ? "show" : "hidden";
    setSidebar(toggle);

    // if (!navBackground) {
    //   setNavBackground(true);
    // }
    // if (navBackground) {
    //   setNavBackground(false);
    // }

  };

  return (
    <div className="nav">
      <div className="nav-wrapper" style={style}>
        <div></div>
        <div><JosLogo/></div>
        <div>
          <a href="https://jos.order.leeroy.se/jos/"><Button buttonText="BESTÄLL ONLINE"></Button></a>
          <ButtonSmall handleClick={toggleSidebar} buttonText="Meny"></ButtonSmall>
        </div>
      </div>
      <aside className={`nav-sidebar ${sidebar}`}>
          <NavLink to="/">HOME</NavLink>
          <a href="https://jos.order.leeroy.se/jos/">VÅR MAT</a>
          <NavLink to="/about">OM JOS</NavLink>
          <NavLink to="/gallery">GALLERY</NavLink>
          <a href="https://jos.order.leeroy.se/jos/business/login">FÖRETAGSKUND</a>
          <NavLink to="/contact">KONTAKTA OSS</NavLink>
          <NavLink to="/work">JOBBA HOS OSS</NavLink>
          <div>
            <a href="https://www.instagram.com/jos_halsocafe/"><img src={InstagramLogo} alt="instagam-logo"></img></a>
            <a href="https://www.facebook.com/josavenyn/"><img src={FacebookLogo} alt="facebook-logo"></img></a>
          </div>
      </aside>
    </div>    
  );
};

export default Nav;