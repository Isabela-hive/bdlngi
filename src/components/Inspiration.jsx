import { faLocationArrow, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./styles/inspiration.css";

function Inspiration({ bg }) {
  return (
    <div
      className="inspiration"
      style={{
        backgroundImage: `url(${bg})`,
        // backgroundColor: "var(--white)",
        boxShadow: "inset 0 0 100px black",
      }}
    >
      <div className="tint">
        {
          <>
            <div className="mrr" style={{ minWidth: "30vw" }}></div>
            <Tile1 />
            <Tile2 />
            <Tile3 />
            <Tile4 />
          </>
        }
      </div>
    </div>
  );
}

function Tile1() {
  return (
    <div className="in-content">
      <div className="title">
        Budalang'i Constituency
        <FontAwesomeIcon
          icon={faLocationArrow}
          style={{
            fontSize: 10,
            marginLeft: 5,
            transform: "translateY(-150%)",
          }}
        />
      </div>
      <div className="details">
        <p>
          Located in the southern part of Busia County, Western Region of Kenya,
          comes a beautiful land with beautiful and jovial beings,{" "}
          <span>Budalang'i Constituency (Budalang'i)</span> the current BUnyala
          Sub-County.
        </p>
        <p>
          It was established for the 1997 elections and it currently comprises
          of six locations with an approximate population of above 85,600.
          <ul>
            <li>Bunyala West</li>
            <li>Bunyala East</li>
            <li>Bunyala West</li>
            <li>Bunyala North</li>
            <li>Bunyala Central</li>
            <li>Khajula</li>
          </ul>
        </p>
        <p>
          The Constituency borders Siaya County to the west and Samia sub-county
          to the North.
        </p>
      </div>
    </div>
  );
}

function Tile2() {
  return (
    <div className="in-content">
      <div className="title">
        The Beauty of Budalang'i
        <FontAwesomeIcon
          icon={faSun}
          style={{
            fontSize: 10,
            marginLeft: 5,
            transform: "translateY(-150%)",
          }}
        />
      </div>
      <div className="details">
        <p>
          Despite its small area in coverage, its population is rapidly growing
          and not forgetting the vast development that has been experience in
          the past few years. This is with inclination to the growth in tourism
          sector.
        </p>
        <p>
          The land is all blessed with water everywhere. Talk of
          <ul>
            <li>Lake Victoria</li>
            <li>Rivers</li>
          </ul>
          The beauty of Budalang'i
        </p>
      </div>
    </div>
  );
}

function Tile3() {
  return (
    <div className="in-content">
      <div className="title">
        Talk of Budalang'i to anyone...
        <FontAwesomeIcon
          style={{
            fontSize: 10,
            marginLeft: 5,
            transform: "translateY(-150%)",
          }}
        />
      </div>
      <div className="details">
        <p>What pops in everyones' mind is</p>
        <p>
          Yeah definitely, I agree, we can't talk of Budalang'i without
          mentioning floods.
        </p>
        <p>
          It has been a menace for a while now, which is said to be due to the
          backflow of waters from Lake Victoria.
        </p>
      </div>
    </div>
  );
}

function Tile4() {
  return (
    <div className="in-content">
      <p>
        Despite all this, the beauty of Budalang'i is so stunning. The history
        of this beautiful land is captivating. The politics in this area is so
        interesting to the inhabitants.
      </p>
      <p>
        Not forgetting of the myths behind the intelligence and good brains of
        people hailing from this area...
      </p>
      <button className="explore-button">Read More</button>
    </div>
  );
}

export default Inspiration;
