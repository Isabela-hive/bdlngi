import "./App.css";
import React, { Component } from "react";
import Splash from "./components/Splash";
import Navbar from "./components/Navbar";
import { gsap } from "gsap";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import Home from "./pages/Home";
import c from "./constants";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence } from "framer-motion/dist/framer-motion";
import Footer from "./components/Footer";
import Travel from "./pages/Travel";
import History from "./pages/History";
import Stories from "./pages/Stories";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      routes: [],
    };
  }
  componentDidMount() {
    // window.addEventListener('contextmenu', e => e.preventDefault())
    setTimeout(() => {
      this.setState((p) => (p.loading = false));
    }, 2000);
  }

  async closeMenu(e) {
    if (e.keyCode === 27) {
      let p = document.querySelectorAll(".navbar .navitem");
      for (var i of p) {
        await gsap.fromTo(i, 0.1, { opacity: 1, x: 0 }, { opacity: 0, x: 50 });
      }
      gsap.to(".navbar", { backdropFilter: "blur(0px)" });
      gsap.to(".navbar > *", 0.6, { opacity: 0 }).then(() => {
        gsap.to(".nv", 0.6, { bottom: "100vh" });
      });
    }
  }

  render() {
    return (
      <Router>
        <div>
          {this.state.loading ? (
            <Splash />
          ) : (
            <div
              onClick={() => {
                window.addEventListener("keyup", this.closeMenu);
                //if (!this.state.navOpen) {

                // } else {
                //   gsap.to('.nv', 1, { bottom: '100vh' })
                // }
              }}
            >
              <div
                style={{
                  position: "fixed",
                  padding: "2vw 5vw",
                  zIndex: 1,
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  top: 0,
                  left: 0,
                  right: 0,
                }}
              >
                <FontAwesomeIcon
                  style={{ cursor: "pointer" }}
                  icon={faBars}
                  size="2x"
                  onClick={() => {
                    gsap
                      .to(".nv", 0.6, {
                        bottom: "0vh",
                      })
                      .then(async () => {
                        gsap.to(".navbar", 1, { backdropFilter: "blur(10px)" });
                        gsap.to(".navbar > *", 0.6, {
                          opacity: 1,
                        });
                        let p = document.querySelectorAll(".navbar .navitem");
                        for (var i of p) {
                          // let cc = i.classList.contains('activenav')
                          await gsap.fromTo(
                            i,
                            0.1,
                            { opacity: 0, x: 50 },
                            { opacity: 1, x: 0 }
                          );
                        }
                      });
                  }}
                />
                <div
                  onClick={() => console.log(this.state.routes)}
                  className="info"
                  style={{ flex: 1 }}
                >
                  <NavLink className="title" to="/">
                    {c.appName}
                  </NavLink>
                  <div className="phrase">{c.phrase}</div>
                </div>
              </div>
              <AnimatePresence exitBeforeEnter>
                <Switch>
                  <Route path="/" exact component={Home}></Route>
                  <Route path="/history" exact component={History}></Route>
                  <Route exact path="/travel" component={Travel}></Route>
                  <Route
                    exact
                    path="/stories/:type/:story"
                    component={Stories}
                  ></Route>
                </Switch>
              </AnimatePresence>
              <Footer routes={this.state.routes} />
            </div>
          )}
        </div>
        <div className="nv">
          <Navbar
            setRoutes={(r) => {
              this.setState((p) => (p.routes = r));
            }}
            closeMe={async () => {
              window.removeEventListener("keyup", this.closeMenu);
              // if (!this.state.navOpen) {
              //   gsap.to('.nv', 1, { bottom: '0vh' })
              // } else {
              let p = document.querySelectorAll(".navbar .navitem");
              for (var i of p) {
                await gsap.fromTo(
                  i,
                  0.1,
                  { opacity: 1, x: 0 },
                  { opacity: 0, x: 50 }
                );
              }
              gsap.to(".navbar", { backdropFilter: "blur(0px)" });
              gsap.to(".navbar > *", 0.6, { opacity: 0 }).then(() => {
                gsap.to(".nv", 0.6, { bottom: "100vh" });
              });
              // }
            }}
          />
        </div>
      </Router>
    );
  }
}

export default App;
