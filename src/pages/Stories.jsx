import React, { useState, useEffect } from "react";
import "./styles/stories.css";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBatteryEmpty,
  faCircleNotch,
  faSpinner,
} from "@fortawesome/fontawesome-free-solid";
import { motion } from "framer-motion/dist/framer-motion";
import c from "../constants";

function Stories() {
  const [story, setStory] = useState(null);
  const [waiting, setWaiting] = useState(true);
  let { story: strP, type: typeP } = useParams();
  useEffect(() => {
    loadStory(typeP);
  }, []);
  function loadStory(type) {
    setWaiting(true);
    if (type === "story") {
      c.jsonGet(`/stories/one/${strP}`, "")
        .then(async (s) => {
          setWaiting(false);
          if (s.ok) {
            let ss = await s.json();
            setStory({ type: "story", data: ss });
          }
        })
        .catch();
    } else if (type === "sport") {
      c.jsonGet(`/sports/${strP}`, "")
        .then(async (s) => {
          setWaiting(false);
          if (s.ok) {
            let ss = await s.json();
            setStory({ type: "sport", data: ss });
          }
        })
        .catch();
    } else {
      setWaiting(false);
      setStory(null);
    }
  }
  return waiting ? (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="story-not-found"
      style={{ backgroundColor: "var(--default)" }}
    >
      <motion.div
        style={{ margin: 10 }}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, type: "spring", stiffness: 300 }}
        className="rotating"
      >
        <FontAwesomeIcon icon={faCircleNotch} size="2x" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, type: "spring", stiffness: 300 }}
        className="error"
      >
        Please Wait...
      </motion.div>
    </motion.div>
  ) : story ? (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="story"
    >
      <div
        className="story-head"
        style={{
          backgroundImage: `url(/${story.data.image})` || "",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {story.data.title || story.data.label}
      </div>
      <div
        className="story-content"
        onClick={() => console.log(story.data.image)}
      >
        Content
      </div>
    </motion.div>
  ) : (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="story-not-found"
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, type: "spring", stiffness: 300 }}
      >
        <FontAwesomeIcon icon={faBatteryEmpty} size="4x" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, type: "spring", stiffness: 300 }}
        className="error"
        style={{ textTransform: "capitalize" }}
      >
        {typeP} Not Found
      </motion.div>
    </motion.div>
  );
}

export default Stories;
