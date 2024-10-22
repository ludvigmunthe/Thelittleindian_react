import React from "react";
import { NavLink } from "react-router-dom";
import '../App.css'; 
import { bigImg, normalImg} from "../utils.js";
import Sidebar from "../components/Sidebar.jsx";

class Onlineorder extends React.Component {
    render() {
        return (
            <div id="onlineorder">
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
                    <div className="header" id="online-header">
                        <div className="header_text">
                            <h2>Online Orders</h2>
                        </div>
                    </div>
                    <div className="content" id="online-content">
                        <p>If you wish to enjoy our food at home, place your order with one of our affiliates!</p>
                        <div id="text-onlineorder"></div>
                    <div className="options">
                    <a href="https://www.foodora.se/restaurant/cptv/the-little-indian">
                        <img
                        src="pics/foodora.png"
                        width={200}
                        height={200}
                        alt="foodora"
                        onMouseOver={(e) => bigImg(e.target)} 
                        onMouseOut={(e) => normalImg(e.target)}
                        />
                    </a>
                    <a href="https://wolt.com/en/swe/umea/restaurant/the-little-indian">
                        <img
                        src="pics/wolt.webp"
                        width={200}
                        height={200}
                        alt="wolt"
                        onMouseOver={(e) => bigImg(e.target)} 
                        onMouseOut={(e) => normalImg(e.target)}
                        />
                    </a>
                    <a href="https://app.fasterorder.se/menu/sv/226">
                        <img
                        src="pics/fasterorder.jpeg"
                        width={200}
                        height={200}
                        alt="faster order"
                        onMouseOver={(e) => bigImg(e.target)} 
                        onMouseOut={(e) => normalImg(e.target)}
                        />
                    </a>
                    </div>
                    </div>
                    <div className="footer"></div>
                    <div className="section">
                        <div id="randomitems"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Onlineorder;
