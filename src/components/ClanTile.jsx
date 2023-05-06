import React from "react";
import "./styles/clantile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFemale, faMale } from "@fortawesome/fontawesome-free-solid";
function ClanTile({ clan }) {
  return (
    <div className="clan-tile" style={{ backgroundImage: "images/crack.png" }}>
      <div className="clan-title">{clan.name}</div>
      <div className="naming">
        <div className="male">
          <FontAwesomeIcon icon={faMale} />
          <span>{clan.naming.male}</span>
        </div>
        <div className="male">
          <FontAwesomeIcon icon={faFemale} />
          <span>{clan.naming.female}</span>
        </div>
      </div>
      <div className="clan-detail">Location: {clan.location}</div>
      <div className="clan-detail">Exaltation Phrase: {clan.phrase}</div>
      <div className="clan-detail">
        Taboos:{" "}
        {clan.taboos.map((t) => (
          <span style={{ margin: 10 }}>{t}</span>
        ))}
      </div>
      <div className="clan-detail">Praise Song: {clan.song}</div>
      <div className="lct">History</div>
      <div className="cl-history">
        {clan.history.map((h) => (
          <p>{h}</p>
        ))}
      </div>
    </div>
  );
}

export default ClanTile;
