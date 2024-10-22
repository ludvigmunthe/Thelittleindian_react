import React from "react";
import { NavLink } from "react-router-dom";
import '../App.css'; 
import '../main.jsx';
import Sidebar from "../components/Sidebar.jsx";

class Home extends React.Component {

    render() {
        return (
            <div id="index">
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
                        <div className="sidebar_menu">
                            <Sidebar/>
                        </div>
                    </div>
                    <div className="header" id="index-header">
                        <div className="header_text">
                            <h1>The little Indian</h1>
                        </div>
                    </div>
                    <div className="content" id="index-content">
                        <div className="text">
                            <h3>Namaste!</h3>
                            <h4>Flavours of India</h4>
                            <p>At <b>The Little Indian</b>, we endeavor to offer a glimpse into the flavours that constitute authentic Indian cooking, at affordable prices. The Little Indian- Café, Restaurant & Catering is an ideal place not just for an elaborate Indian lunch buffet, but also for a quick fika <br /> (not to mention our take-away option!).</p>
                        </div>
                    </div>
                    <div className="footer">
                        <button id="buttonjs" onClick={() => alert('Show message')}>Show message</button>
                    </div>
                    <div className="section">
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
