import React, { useState, useEffect } from "react";
import "./styles/history.css";
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/fontawesome-free-solid";
import { motion } from "framer-motion/dist/framer-motion";
import Clans from "../components/Clans";
import Collection from "../components/Collection";
import { NavLink } from "react-router-dom";
import c from "../constants";

function History() {
  const [items, setItems] = useState([
    {
      label: "Budalang'i Floods and its Consequenses",
      by: "Job Obiri",
      image: "images/luhyalady.jpg",
    },
    {
      label: "Ecological Origin of Political System & Leadership",
      by: "Davis Okello",
      image: "images/luhyachildren.jpg",
    },
    {
      label: "Heros and Heroines",
      by: "Rev. Fr. Mandela",
      image: "images/luhyamum.jpg",
    },
  ]);
  const [sports, setSports] = useState([]);
  const [popular, setPopular] = useState([]);
  const [current, setCurrent] = useState(0);
  function moveNext() {
    if (current >= items.length - 1) {
      setCarousel(0);
    } else {
      setCarousel(current + 1);
    }
  }
  function getPopular(count) {
    c.jsonGet(`/stories/limited/${count}`, "")
      .then(async (s) => {
        if (s.ok) {
          let ss = await s.json();
          setPopular(ss);
        }
      })
      .catch();
  }
  function getSports(count) {
    c.jsonGet(`/sports`, "")
      .then(async (s) => {
        if (s.ok) {
          let ss = await s.json();
          setSports(ss);
        }
      })
      .catch();
  }
  useEffect(() => {
    const interval = setInterval(() => moveNext(), 10000);
    return () => clearInterval(interval);
  }, [current]);

  useEffect(() => {
    getPopular(10);
    getSports();
  }, []);

  function selectSection(s, e) {
    let n = document.querySelectorAll(".h-nav-item");
    for (let x of n) {
      x.classList.remove("sel");
    }
    e.target.classList.add("sel");
    let c = document.querySelectorAll(".history > .h-content");
    for (let x of c) {
      x.style.display = "none";
    }
    // console.log(`#${s}`);
    document.querySelector(`#${s}`).style.display = "flex";
  }

  function setCarousel(s) {
    // console.log(s);
    if (current === s) {
    } else {
      // setCurrent(s);
      const lgs = document.querySelectorAll(".h-legend");
      lgs.forEach((l) => l.classList.remove("sel"));
      lgs[s].classList.add("sel");
      gsap.to(".h-label", 1, { opacity: 0, x: "100%" });
      gsap
        .to(".h-carousel", 0.3, { opacity: 0, scale: 0.99 })
        .then(() => setCurrent(s))
        .then((s) => {
          gsap.fromTo(
            ".h-label",
            1,
            { x: "-100%", opacity: 0 },
            { x: 0, opacity: 1 }
          );
          gsap.to(".h-carousel", 0.3, { opacity: 1, scale: 1 });
        });
    }
  }

  return (
    <>
      <div
        className="ti"
        style={{
          backgroundImage: 'url("/images/africastudents.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          boxShadow: "inset var(--black) 0 0 200px",
          backgroundAttachment: "fixed",
        }}
      >
        Our History
      </div>
      <div className="h-nav">
        <div
          className="h-nav-item sel"
          onClick={(e) => selectSection("introduction", e)}
        >
          <FontAwesomeIcon icon={faHome} />
        </div>
        <div className="h-nav-item" onClick={(e) => selectSection("origin", e)}>
          Origin
        </div>
        <div className="h-nav-item" onClick={(e) => selectSection("clans", e)}>
          Clans
        </div>
        <div
          className="h-nav-item"
          onClick={(e) => selectSection("collections", e)}
        >
          Collections
        </div>
      </div>
      <div className="history">
        <div
          className="h-content"
          style={{ display: "flex" }}
          id="introduction"
        >
          <div
            className="h-carousel"
            style={{
              backgroundImage: `url(${items[current].image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <NavLink
              exact
              to={"/stories/headline/" + items[current].label}
              className="h-label"
            >
              <div className="h-title">{items[current].label}</div>
              <div className="h-more">By {items[current].by}</div>
            </NavLink>
            <div className="h-legends">
              {items.map((i, a) => (
                <div
                  onClick={() => setCarousel(a)}
                  className={a === 0 ? "h-legend sel" : "h-legend"}
                  style={{ backgroundImage: `url(${i.image})` }}
                ></div>
              ))}
            </div>
          </div>
          <div className="h-intro">
            <div className="h-main">
              {sports.map(({ _id, label, image, link }, a) => (
                <NavLink
                  style={{ color: "inherit" }}
                  exact
                  to={`/stories/sport/${_id}`}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    className="h-item"
                    transition={{ type: "spring", stiffness: 300 }}
                    style={{
                      backgroundImage: `url(${image})`,
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="h-item-label">{label}</div>
                  </motion.div>
                </NavLink>
              ))}
            </div>
            <div className="h-side">
              <div className="h-side-title">Popular Stories</div>
              <div className="h-side-content">
                {popular.map((p, a) => (
                  <div className="h-side-item">
                    <div className="h-side-i">{a + 1}</div>
                    <NavLink
                      style={{ textDecoration: "none" }}
                      exact
                      to={`stories/story/${p._id}`}
                    >
                      <div className="h-side-l">{p.title}</div>
                    </NavLink>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="h-content" style={{ display: "none" }} id="origin">
          Origin
        </div>
        <div className="h-content" style={{ display: "none" }} id="clans">
          <Clans />
        </div>
        <div className="h-content" style={{ display: "none" }} id="collections">
          <Collection />
        </div>
      </div>
    </>
  );
}

export default History;
