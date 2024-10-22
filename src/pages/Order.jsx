import React from "react";
import { NavLink } from "react-router-dom";
import '../App.css'; // Adjust the path if needed
import { FocusFunction, FocusFunctionReset } from "../utils.js";
import Sidebar from "../components/Sidebar.jsx";

class Order extends React.Component {
    render() {
        return (
            <div id="order">
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
                    <div className="header" id="order-header">
                        <div className="header_text">
                            <h2>Catering Order</h2>
                        </div>
                    </div>
                    <div className="content" id="order-content">
                        <form>
                            <label>
                                First Name:
                                <input type="text" name="firstName" onFocus={(e) => FocusFunction(e.target)} onBlur={(e) => FocusFunctionReset(e.target)}/>
                            </label>
                            <br />
                            <label>
                                Last Name:
                                <input type="text" name="lastName" onFocus={(e) => FocusFunction(e.target)} onBlur={(e) => FocusFunctionReset(e.target)} />
                            </label>
                            <br />
                            <label>
                                Email:
                                <input type="email" name="email" onFocus={(e) => FocusFunction(e.target)} onBlur={(e) => FocusFunctionReset(e.target)} />
                            </label>
                            <br />
                            <label>
                                Select a Package:
                                <select name="package">
                                    <option value="package1">Package 1</option>
                                    <option value="package2">Package 2</option>
                                    <option value="package3">Package 3</option>
                                    <option value="package4">Package 4</option>
                                    <option value="package5">Package 5</option>
                                </select>
                            </label>
                            <br />
                            <button type="submit">Submit</button>
                        </form>
                        <div className="sales-data">
                            <h3>Sales Data for Packages</h3>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Package</th>
                                        <th>January</th>
                                        <th>February</th>
                                        <th>March</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Package 1</td>
                                        <td>100</td>
                                        <td>120</td>
                                        <td>150</td>
                                    </tr>
                                    <tr>
                                        <td>Package 2</td>
                                        <td>80</td>
                                        <td>90</td>
                                        <td>110</td>
                                    </tr>
                                    <tr>
                                        <td>Package 3</td>
                                        <td>200</td>
                                        <td>180</td>
                                        <td>220</td>
                                    </tr>
                                    <tr>
                                        <td>Package 4</td>
                                        <td>150</td>
                                        <td>140</td>
                                        <td>160</td>
                                    </tr>
                                    <tr>
                                        <td>Package 5</td>
                                        <td>120</td>
                                        <td>130</td>
                                        <td>140</td>
                                    </tr>
                                </tbody>
                            </table>
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

export default Order;
