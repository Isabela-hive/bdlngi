import "./styles/navbar.css";
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAt,
  faClock,
  faGraduationCap,
  faHome,
  faSearchLocation,
  faTimes,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

import cn from "../constants";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {};
  }

  Links = [
    {
      name: "Home",
      icon: faHome,
      desc: "",
      to: "/",
    },
    {
      name: "History",
      icon: faClock,
      desc: "",
      to: "/history",
    },
    {
      name: "Leadership & Politics",
      icon: faUsers,
      desc: "",
      to: "/leadership",
    },
    {
      name: "Education",
      icon: faGraduationCap,
      desc: "",
      to: "/education",
    },
    {
      name: "Travel",
      icon: faSearchLocation,
      desc: "",
      to: "/travel",
    },
    {
      name: "Social",
      icon: faAt,
      desc: "",
      to: "/social",
    },
  ];

  componentDidMount() {
    this.props.setRoutes(this.Links);
  }

  render() {
    const links = this.Links;
    return (
      <div className="navbar">
        <div className="menu">
          <div className="close" onClick={this.props.closeMe}>
            <FontAwesomeIcon icon={faTimes} />
          </div>
          <div className="content">
            <div className="title">{cn.appName}</div>
            <div className="menuitems">
              {links.map((l) => (
                <NavLink
                  exact
                  to={l.to}
                  activeClassName="activenav"
                  className="navitem"
                  onClick={this.props.closeMe}
                >
                  <div className="navtitle">{l.name}</div>
                  <FontAwesomeIcon size="10x" icon={l.icon} />
                </NavLink>
              ))}
            </div>
          </div>
        </div>
        <div className="slider"></div>
        <div className="footer">
          <span style={{ textTransform: "capitalize" }}>
            &copy; {new Date().getFullYear()}
            &nbsp;{cn.appName}
          </span>
        </div>
      </div>
    );
  }
}
