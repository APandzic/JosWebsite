import React from "react"; 
import { Link } from "@reach/router";


import InstagramLogo from "../../assets/images/instagram.png";
import FacebookLogo from "../../assets/images/facebook.png";
import AppStoreBlack from "../../assets/images/AppStore_blk.svg";
import GooglePlayLogo from "../../assets/images/googleLogo.png";
import AppStoreWhite from "../../assets/images/AppStore_wht.svg";
import "./footer.css";

const Footer = () => {

    return (
            <div className="footer-view">
                <div className="footer-container">
                        <ul className="footer-Links">
                            <li>
                                <ul>
                                    <li className="section-heading-bar"></li>
                                    <Link className="footer-header" to="/about">OM JOS</Link>
                                </ul>
                            </li>
                            <li>
                                <ul>
                                    <li className="section-heading-bar"></li>
                                    <a className="footer-header" href="https://jos.order.leeroy.se/jos/">VÅR MAT</a>
                                </ul>
                            </li>
                            <li>
                                <ul>
                                    <li className="section-heading-bar"></li>
                                    <Link className="footer-header" to="/gallery">GALLERI</Link>
                                </ul>
                            </li>
                            <li>
                                <ul>
                                    <li className="section-heading-bar"></li>
                                    <a className="footer-header" href="https://jos.order.leeroy.se/jos/business/login">FÖRETAGSKUND</a>
                                </ul>
                            </li>
                            <li>
                                <ul>
                                    <li className="section-heading-bar"></li>
                                    <Link className="footer-header" to="/contact">KONTAKTA OSS</Link>
                                </ul>
                            </li>
                            <li>
                                <ul>
                                    <li className="section-heading-bar"></li>
                                    <Link className="footer-header" to="/work">JOBBA HOS OSS</Link>
                                </ul>
                            </li>
                        </ul>
                        <div className="footer-media-container">
                            <div className="social-media">
                                <a href="https://www.instagram.com/jos_halsocafe/"><img className="social-logo" src={InstagramLogo} alt=""/></a>
                                <a href="https://www.facebook.com/josavenyn/"><img className="social-logo" src={FacebookLogo} alt=""/></a>
                                <a href="/"><img className="store-logo" src={GooglePlayLogo} alt="app store"/></a>
                                <a href="/"><img src={AppStoreBlack} alt="app store"/></a>  
                            </div>
                        </div>
                </div>
            </div>
    );
}

export default Footer;