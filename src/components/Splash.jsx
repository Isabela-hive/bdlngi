import "./styles/splash.css";
import React, { Component } from "react";
import { motion } from "framer-motion/dist/framer-motion";

export default class Splash extends Component {
  render() {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, easing: "ease-in-out" }}
        exit={{ opacity: 0 }}
        className="splash"
      >
        <div className="logo">Logo Area</div>
        <div className="scroll-effect">
          <div className="line"></div>
          <div className="left-tint"></div>
          <div className="right-tint"></div>
          <div className="balls">
            <div className="ball"></div>
            <div className="ball"></div>
            <div className="ball"></div>
            <div className="ball"></div>
          </div>
        </div>
      </motion.div>
    );
  }
}
