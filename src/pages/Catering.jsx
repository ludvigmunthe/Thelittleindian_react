import React from "react";
import { NavLink } from "react-router-dom";
import '../App.css'; 
import Sidebar from "../components/Sidebar.jsx";

class Catering extends React.Component {
    render() {
        return (
            <div id="catering">
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
                    <div className="header" id="catering-header">
                        <div className="header_text">
                            <h2>Catering</h2>
                        </div>
                    </div>
                    <div className="content" id="catering-content">
                        <div className="package">
                            <h3>Package 1</h3>
                            <p>Minimum 35 people - 190kr/person</p>
                            <ul>
                                <li>Rice variety</li>
                                <li>Any chicken dish or Vegetarian dish</li>
                                <li>Dessert</li>
                                <li>Salad (Iceberg, tomato, gurka and raitha)</li>
                            </ul>
                        </div>
                        <div className="package">
                            <h3>Package 2</h3>
                            <p>Minimum 30 people - 230kr/person</p>
                            <ul>
                                <li>Rice variety</li>
                                <li>Any chicken dish or Vegetarian dish</li>
                                <li>Fried fish or beef dish</li>
                                <li>Dessert</li>
                                <li>Salad (Iceberg, tomato, gurka and raitha)</li>
                            </ul>
                        </div>
                        <div className="package">
                            <h3>Package 3</h3>
                            <p>Minimum 30 people - 295kr/person</p>
                            <ul>
                                <li>Starter: Chicken or vegetarian</li>
                                <li>Rice variety + one Indian Bread variety</li>
                                <li>Chicken dish or vegetarian dish</li>
                                <li>Fish fry</li>
                                <li>Beef or Lamb</li>
                                <li>Any lentil curry</li>
                                <li>Stir-fried vegetable</li>
                                <li>Dessert</li>
                                <li>Salad (Iceberg, tomato, gurka and raitha)</li>
                            </ul>
                        </div>
                        
                    </div>
                    <div className="footer">
                    <button><NavLink to="/Order">Beställ här</NavLink></button>
                    </div>
                    <div className="section">
                        <div id="randomitems"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Catering;
