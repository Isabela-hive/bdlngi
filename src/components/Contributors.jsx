import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import "./styles/contributors.css";

function Contributors() {
  const [contributors, setContributors] = useState([
    {
      name: "Mzungu Fulani",
      title: "Researcher - University of Columbia",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Consequuntur ducimus quam tempora commodi illum soluta pariatur at expedita minima dignissimos? 
            Quidem nostrum harum dolores quis quasi itaque id quos enim.`,
      image: "images/contributors/mzungu.jpg",
    },
    {
      name: "Job Obiri",
      title: "Software Developer - Obisoft",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Consequuntur ducimus quam tempora commodi illum soluta pariatur at expedita minima dignissimos? 
        Quidem nostrum harum dolores quis quasi itaque id quos enim.`,
      image: "images/contributors/job.jpg",
    },
    {
      name: "Sharon Isabella",
      title: "Student - Kisii University",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Consequuntur ducimus quam tempora commodi illum soluta pariatur at expedita minima dignissimos? 
        Quidem nostrum harum dolores quis quasi itaque id quos enim.`,
      image: "images/contributors/mama.jpg",
    },
  ]);
  const [current, setCurrent] = useState(null);
  // eslint-disable-next-line
  useEffect(() => {
    setSl(0);
    // eslint-disable-next-line
  }, []);

  function setSl(n) {
    let sls = document.querySelectorAll(".cont-sel");
    sls.forEach((s) => s.classList.remove("cont-s"));
    let cl = contributors[n];
    setCurrent(cl);
    // sls[n].classList.add("cont-s");
  }

  return (
    <div className="contributors">
      {current ? (
        <div className="contributor">
          {/* <img
            className="cont-bg-img"
            src={current.image}
            alt="curimg"
            srcset=""
          /> */}
          <img className="cont-img" alt="curimg" src={current.image} />
          <FontAwesomeIcon icon={faQuoteLeft} className="cont-quote" />
          <div className="cont-content">{current.content}</div>
          <FontAwesomeIcon icon={faQuoteRight} className="cont-quote" />
          <div className="cont-name">{current.name}</div>
          <div className="cont-title">{current.title}</div>

          <div className="cont-sels">
            {contributors.map((c, i) => (
              <div className="cont-sel" onClick={() => setSl(i)}></div>
            ))}
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className="heading">Elders' View</div>
    </div>
  );
}

export default Contributors;
