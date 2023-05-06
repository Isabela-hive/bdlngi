import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import "./styles/carousel.css";
import gsap from "gsap";

function Carousel({ setBg }) {
  const [currentItem, setCurrentItem] = useState(0);
  useEffect(() => {
    showCarousel(currentItem);
    gsap.fromTo(
      `#carousel-item-${currentItem} .carousel-title`,
      2,
      { x: "-100%", opacity: 0 },
      { x: 0, opacity: 1 }
    );
    gsap.fromTo(
      `#carousel-item-${currentItem} .carousel-details`,
      1,
      { opacity: 0, y: "100%" },
      { opacity: 1, y: "0" },
      "+=0.3"
    );
    gsap.fromTo(
      `#carousel-item-${currentItem} .carousel-more`,
      0.5,
      { opacity: 0 },
      { opacity: 1 },
      "+=0.2"
    );
    const interval = setInterval(
      () => moveNext(),
      carouselItems[currentItem].duration * 1000
    );
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [currentItem]);

  const carouselItems = [
    {
      title: "Our Education",
      description:
        "This is a short description of our education item. It should appear on carousel.",
      media: "/images/africastudents.jpg",
      type: "image",
      duration: "14",
    },
    {
      title: "Wonderful Island",
      description:
        "This is a short description of wonderful island item. It should appear on carousel.",
      media: "/videos/island.mp4",
      type: "video",
      duration: "14",
    },
    {
      title: "Gallery",
      description:
        "This is a short description of this carousel item. It should appear on carousel.",
      media: "/images/nicepic.jpg",
      type: "image",
      duration: "14",
    },
    {
      title: "Environment",
      description:
        "This is a short description of environment item. It should appear on carousel.",
      media: "/videos/sunsetocean.mp4",
      type: "video",
      duration: "30",
    },
  ];

  function showCarousel(id) {
    if (carouselItems[id].type === "video") {
      let vid = document.querySelectorAll(`video.carousel-video`);
      for (let v of vid) {
        v.pause();
        v.currentTime = 0;
      }
      document.querySelector(`video#c-video${currentItem}`).play();
    }
    let b = carouselItems[id].media;
    setBg(b);
    setTimeout(() => {
      let cs = document.querySelectorAll(".carousel-selector");
      cs.forEach((c) => c.classList.remove("current"));
      let csi = document.querySelector(`#carousel-selector-${id}`);
      csi.classList.add("current");
    }, 100);
    setTimeout(() => {
      gsap.fromTo(
        `#carousel-item-${currentItem} .carousel-title`,
        2,
        { x: 0, opacity: 1 },
        { x: "100%", opacity: 0 }
      );
      gsap.fromTo(
        `#carousel-item-${currentItem} .carousel-details`,
        1,
        { opacity: 1, y: 0 },
        { opacity: 0, y: "100%" }
      );
      gsap.fromTo(
        `#carousel-item-${currentItem} .carousel-more`,
        1,
        { opacity: 1 },
        { opacity: 0 },
        "-=5"
      );
    }, carouselItems[id].duration * 1000);
    let x = document.querySelectorAll(".carousel-item");
    x.forEach((c) => (c.style.opacity = 0));
    let co = document.querySelector(`#carousel-item-${id}`);
    co.style.opacity = 1;
  }

  function moveNext() {
    setCurrentItem(
      currentItem === carouselItems.length - 1 ? 0 : currentItem + 1
    );
  }

  // eslint-disable-next-line
  function movePrev() {
    setCurrentItem(
      currentItem === 0 ? carouselItems.length - 1 : currentItem - 1
    );
  }

  return (
    <div className="carousel">
      {carouselItems.map(({ title, media, description, type }, i) => (
        <>
          <div
            id={`carousel-item-${i}`}
            className="carousel-item"
            style={{
              backgroundImage: `url(${media})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }}
          >
            {type === "video" ? (
              <video
                className="carousel-video"
                id={`c-video${i}`}
                style={{
                  width: "100vw",
                  height: "100vh",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                loop
                muted
                src={media}
              />
            ) : (
              <></>
            )}
            <div className="carousel-tint">
              <div className="carousel-mn">
                <div className="carousel-title">{title}</div>
                <div className="carousel-details">{description}</div>
                <div className="carousel-more">
                  <span>Read More</span>
                  <FontAwesomeIcon icon={faAngleRight} />
                </div>
              </div>
              <div className="carousel-manual-nav">
                <FontAwesomeIcon
                  className="mnn"
                  style={{ zIndex: 9 }}
                  onClick={() => movePrev()}
                  icon={faAngleLeft}
                  size="3x"
                />
                <FontAwesomeIcon
                  className="mnn"
                  style={{ zIndex: 9 }}
                  onClick={() => moveNext()}
                  icon={faAngleRight}
                  size="3x"
                />
              </div>
            </div>
          </div>
        </>
      ))}
      <div className="carousel-selectors">
        {carouselItems.map(({ title }, i) => (
          <div
            onClick={() => {
              setCurrentItem(i);
            }}
            className="carousel-selector"
            id={`carousel-selector-${i}`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
