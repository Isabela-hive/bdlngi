import React, { useEffect, useState } from "react";
import "./styles/travel.css";
import c from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faBookmark,
  faChevronLeft,
  faChevronRight,
  faSearch,
  faSyncAlt,
} from "@fortawesome/fontawesome-free-solid";

function Travel() {
  const [data, setData] = useState(null);
  useEffect(() => {
    getR();
  }, []);
  function getR() {
    c.jsonGet("/destinations/random", "").then(async (r) => {
      if (r.ok) {
        let rr = await r.json();
        console.log(rr);
        setData(rr);
      }
    });
  }
  return (
    <div
      className="travel"
      style={{
        backgroundImage: "url(images/nicepic.jpg)",
      }}
    >
      <div className="tint">
        <div className="tint2">
          {data ? (
            <>
              <div className="destination">
                <div className="d-title">{data ? data.name : ""}</div>
                <div className="d-description">
                  {data ? data.description : ""}
                </div>
                <form className="d-filter">
                  <input type="search" placeholder="Filter Destinations" />
                  <FontAwesomeIcon icon={faSearch} />
                </form>
                <div className="d-actions">
                  <div className="d-action" onClick={() => getR()}>
                    <FontAwesomeIcon icon={faSyncAlt} />
                  </div>
                  <div className="d-action">
                    <span>Read More</span>
                    <FontAwesomeIcon icon={faAngleRight} />
                  </div>
                </div>
              </div>
              <div className="dfac2">
                <div className="d-facility">
                  {data
                    ? data.nearbyFacilities || data.nearbyFacilities.length < 1
                      ? data.nearbyFacilities.map((f) => (
                          <div className="d-fac">
                            <div className="f-title">{f.name}</div>
                            <div className="f-rating">
                              <div className="f-f"></div>
                              <div className="f-f"></div>
                              <div className="f-f"></div>
                              <div className="f-h"></div>
                              <div className="f-h"></div>
                            </div>
                            <img src={`${f.gallery[0]}`} alt="ii" />
                            <div className="f-bookmark">
                              <FontAwesomeIcon icon={faBookmark} />
                            </div>
                          </div>
                        ))
                      : "No Facilities Found"
                    : ""}
                </div>
                <div className="d-fac-actions">
                  <div className="d-fac-action">
                    <FontAwesomeIcon icon={faChevronLeft} size="2x" />
                  </div>
                  <div className="d-fac-action">
                    <FontAwesomeIcon icon={faChevronRight} size="2x" />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default Travel;
