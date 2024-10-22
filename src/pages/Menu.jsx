import React from "react";
import { NavLink } from "react-router-dom";
import '../App.css'; 
import Sidebar from "../components/Sidebar.jsx";
import RandomItem from "../components/RandomItem.jsx";
import LikeButton from "../components/LikeButton.jsx";

class Menu extends React.Component {
    render() {
        return (
            <div id="menu">
                <div className="grid">
                    <div className="topbar">
                        <div className="icons">
                            <NavLink to="https://www.facebook.com/thelittleindianiumea/" className="fa fa-facebook" />
                            <NavLink to="https://www.instagram.com/thelittleindianumea/" className="fa fa-instagram" /> <br />
                            <NavLink to="https://www.google.com/maps/place/Universum,+907+36+Ume%C3%A5/@63.8200885,20.3031556,17z/data=!3m1!4b1!4m6!3m5!1s0x467c5afc56c1f8d7:0x144352010382e682!8m2!3d63.8200862!4d20.3057305!16s%2Fg%2F1tcwdm1m?entry=ttu" className="maps">
                                <i className="fa fa-map"></i><span>Universum, </span>
                            </NavLink>
                            <NavLink to="https://www.google.com/maps/place/Teknikhuset/@63.8204277,20.3068147,17z/data=!3m1!4b1!4m6!3m5!1s0x467c5afc85155555:0xa0909865ea7acc5e!8m2!3d63.8204254!4d20.3093896!16s%2Fg%2F11g9qnyb58?entry=ttu" className="maps">
                                <span>Teknikhuset</span>
                            </NavLink>
                        </div>
                        <div className="logo">
                            <img src="pics/thelittleindian.png" alt="logotyp" width="75" height="75" />
                        </div>
                    </div>
                    <div className="sidebar">
                        <Sidebar/>
                    </div>
                    <div className="header" id="menu-header">
                        <div className="header_text">
                            <h2>Menu</h2>
                        </div>
                    </div>
                    <div className="content" id="menu-content">
                        <div className="meny">
                            <div className="buttons">
                                <button>Förätter</button>
                                <button>Chilirätter</button>
                                <button>Kycklingrätter</button>
                                <button>Lammrätter</button>
                                <button>Beefrätter</button>
                                <button>Vegetariska rätter</button>
                                <button>Veganska rätter</button>
                            </div>
                            <div className="meny-items">
                                <div className="title">
                                    <h2>Förrätter</h2>
                                    <div className="single-menu">
                                        <div id="product1">
                                            <h4>Pappadam</h4>
                                            <p>Indiskt hårtbröd av kikärtsmjöl</p>
                                            <span>25kr</span>
                                        </div>
                                    </div>
                                    <div className="single-menu">
                                        <div id="product2">
                                            <h4>Samosa</h4>
                                            <p>Vegetariska piroger med potatis och gröna ärtor, serverade med koriandersås</p>
                                            <span>49kr</span>
                                        </div>
                                    </div>
                                    <div className="single-menu">
                                        <div id="product3">
                                            <h4>Vegetarisk Pakora</h4>
                                            <p>Friterade blomkål och paprikasom marinerats i gurkmeja, kummin, koriander och chilli, serverade med mangoraja</p>
                                            <span>49kr</span>
                                        </div>
                                    </div>
                                    <div className="single-menu">
                                        <div id="product4">
                                            <h4>Vårrullar</h4>
                                            <p>Smet-friterade paneer ost med vitlöksås</p>
                                            <span>49kr</span>
                                        </div>
                                    </div>
                                    <div className="single-menu">
                                        <div id="product5">
                                            <h4>Kyckling Pakora</h4>
                                            <p>Friterade kyckling filé som marinerats i gurkmeja, kummin, koriander och chilli, serverade med vitlöksås</p>
                                            <span>55kr</span>
                                        </div>
                                    </div>
                                    <div className="single-menu">
                                        <div id="product6">
                                            <h4>Kyckling drumstick</h4>
                                            <p>Friterade kyckling drumstick</p>
                                            <span>59kr</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <LikeButton/>
                        </div>
                    </div>
                    <div className="footer"></div>
                    <div className="section">
                        <div id="randomitems">
                           <RandomItem/> 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;
