import React from "react";
import { Link } from "@reach/router";
import HamburgerMenu from "react-hamburger-menu";

import Button from "../Button1";
// import ButtonSmall from "../Button2";
import InstagramLogo from "../../assets/images/instagram.png";
import FacebookLogo from "../../assets/images/facebook.png";
import JosLogo from "../Logo/Logo";

import "./nav.css"


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
  const [hamburgerMenuOpen, sethamburgerMenuOpen] = React.useState(false);

  const navRef = React.useRef();
  navRef.current = navBackground;
  let style = {
    backgroundColor: navBackground ? "#3B623B" : "transparent",
    transition: "1s ease",
  };

  React.useEffect(() => {

    const handleScroll = () => {
      let show = window.scrollY > 20
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

  };

  const handleClickHamburger = () => {
    const updatedHamburgerMenuOpen = hamburgerMenuOpen === false ? true : false;
    sethamburgerMenuOpen(updatedHamburgerMenuOpen);
    toggleSidebar();
  };

  return (
    <div className="nav">
      <div className="nav-wrapper" style={style}>
        <div></div>
        <div>
          <div className="josLogoContainer"><JosLogo/></div>
        </div>
        <div>
          <a href="https://jos.order.leeroy.se/jos/"><Button buttonText="BESTÄLL ONLINE"></Button></a>
          {/* <ButtonSmall handleClick={toggleSidebar} buttonText="Meny"></ButtonSmall> */}
          <HamburgerMenu className="hamburgerMenu" isOpen={hamburgerMenuOpen} menuClicked={handleClickHamburger} width={36} height={30} color='#ffffff' animationDuration={0.5} borderRadius={0} strokeWidth={3} />
        </div>
      </div>
      <aside className={`nav-sidebar ${sidebar}`}>
          <NavLink to="/">HOME</NavLink>
          <a href="https://jos.order.leeroy.se/jos/">MENY</a>
          <NavLink to="/about">OM OSS</NavLink>
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