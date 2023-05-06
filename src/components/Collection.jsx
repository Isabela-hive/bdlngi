import React, { useState } from "react";
import "./styles/collection.css";

function Collection() {
  const [artefacts, setArtefacts] = useState([
    {
      name: "one",
      description: "first description",
      image: "images/luhyalady.jpg",
    },
    {
      name: "two",
      description: "second description",
      image: "images/africastudents.jpg",
    },
    {
      name: "three",
      description: "third description",
      image: "images/luhyamum.jpg",
    },
    {
      name: "fourth",
      description: "fourth description",
      image: "images/wrestling.jpg",
    },
  ]);
  function flipNext(e) {
    e.classList.add("flipped");
    setTimeout(() => {
      e.style.zIndex = artefacts.length - parseInt(e.style.zIndex);
      e.childNodes[1].style.pointerEvents = "all";
      e.childNodes[0].style.pointerEvents = "none";
    }, 50);
  }

  function flipOut(e, i) {
    //console.log(e.parentNode);
    e.style.pointerEvents = "none";
    e.parentNode.style.zIndex = artefacts.length - i;
    e.parentNode.childNodes[0].style.pointerEvents = "all";
    setTimeout(() => e.parentNode.classList.remove("flipped"), 100);
  }
  return (
    <>
      <div className="col">
        <div className="col-title">Collections</div>
        <>
          {artefacts.map((a, i) => (
            <>
              <div
                key={`page-${i}`}
                className="col-book"
                style={{ zIndex: artefacts.length - i }}
              >
                <div
                  key={`page-out${i}`}
                  className="outside"
                  onClick={(e) =>
                    flipNext(document.querySelectorAll(".col-book")[i])
                  }
                ></div>
                <div
                  key={`page-in${i}`}
                  className="inside"
                  style={{ pointerEvents: "none" }}
                  onClick={(e) => flipOut(e.target, i)}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundImage: "url(images/textures/17.png)",
                      pointerEvents: "none",
                      opacity: 0.7,
                      zIndex: 4,
                    }}
                  ></div>
                  <img src={a.image} alt="" />
                </div>
              </div>
            </>
          ))}
          <>
            <div className="col-book" style={{ zIndex: 0 }}>
              <div className="outside"></div>
              <div
                className="inside"
                //   onClick={(e) => flipOut(e.target, artefacts.length - 1)}
                style={{ pointerEvents: "none" }}
              ></div>
            </div>
          </>
        </>
      </div>
      <div className="foods">
        <div className="foods-title">Popular Foods</div>
      </div>
    </>
  );
}

export default Collection;
