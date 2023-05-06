import React from "react";
import c from "../constants";
import "./styles/footer.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer({ routes }) {
  return (
    <div className="footer">
      <div className="footer-title">
        <div className="tit">{c.appName}</div>
        <div className="phr">&copy; 2021 | {c.phrase}</div>
      </div>
      <div className="footer-links">
        <ul>
          {routes.map((r) => (
            <NavLink class="footer-link" exact to={`${r.to}`}>
              <li style={{ listStyle: "none" }}>
                <FontAwesomeIcon icon={r.icon} /> {r.name}
              </li>
            </NavLink>
          ))}
        </ul>
      </div>
      <div className="footer-social">{c.appName}</div>
    </div>
  );
}

export default Footer;
