import React, { useState } from "react";
import ClanTile from "./ClanTile";
import "./styles/clans.css";

function Clans() {
  const [clans, setClans] = useState([
    {
      name: "Abanyekera",
      location: "Siginga, Bulemia, Rukala",
      naming: { male: "mnyakera", female: "namnyekera" },
      phrase: "Phrase",
      taboos: ["imbongo", "Likanga", "Intestines", "Ligugu"],
      song: "Identification of the origin of a Child's Mother (Unya)",
      history: [
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, quisquam libero. In omnis eveniet vel sapiente cupiditate delectus. Necessitatibus, cum?",
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, quisquam libero. In omnis eveniet vel sapiente cupiditate delectus. Necessitatibus, cum?",
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, quisquam libero. In omnis eveniet vel sapiente cupiditate delectus. Necessitatibus, cum?",
      ],
    },
    {
      name: "Abamulembo",
      location: "Bomadea, Siginga, Bulemia, Rukala",
      naming: { male: "mumulembo", female: "namurembo" },
      phrase: "Phrase",
      taboos: ["imbongo", "Likanga", "Intestines", "Ligugu"],
      song: "Identification of the origin of a Child's Mother (Unya)",
      history: [
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, quisquam libero. In omnis eveniet vel sapiente cupiditate delectus. Necessitatibus, cum?",
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, quisquam libero. In omnis eveniet vel sapiente cupiditate delectus. Necessitatibus, cum?",
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, quisquam libero. In omnis eveniet vel sapiente cupiditate delectus. Necessitatibus, cum?",
      ],
    },
    {
      name: "Abawanga",
      location: "Siginga, Bulemia, Rukala",
      naming: { male: "muwanga", female: "naanga" },
      phrase: "Phrase",
      taboos: ["imbongo", "Likanga", "Intestines", "Ligugu"],
      song: "Identification of the origin of a Child's Mother (Unya)",
      history: [
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, quisquam libero. In omnis eveniet vel sapiente cupiditate delectus. Necessitatibus, cum?",
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, quisquam libero. In omnis eveniet vel sapiente cupiditate delectus. Necessitatibus, cum?",
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, quisquam libero. In omnis eveniet vel sapiente cupiditate delectus. Necessitatibus, cum?",
      ],
    },
    {
      name: "Abafofoyo",
      location: "Siginga, Bulemia, Rukala",
      naming: { male: "mufofoyo", female: "nafofoyo" },
      phrase: "Phrase",
      taboos: ["imbongo", "Likanga", "Intestines", "Ligugu"],
      song: "Identification of the origin of a Child's Mother (Unya)",
      history: [
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, quisquam libero. In omnis eveniet vel sapiente cupiditate delectus. Necessitatibus, cum?",
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, quisquam libero. In omnis eveniet vel sapiente cupiditate delectus. Necessitatibus, cum?",
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, quisquam libero. In omnis eveniet vel sapiente cupiditate delectus. Necessitatibus, cum?",
      ],
    },
  ]);
  return (
    <div className="clans">
      <div className="cl-title">Clans</div>
      <div className="cl-desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ut
        doloremque quod corporis asperiores, nostrum animi vel quae nihil earum
        corrupti suscipit, eius praesentium assumenda autem unde culpa
        architecto ab nisi temporibus officiis ipsa laborum pariatur! Corporis
        asperiores, amet quia id nam cumque quidem totam architecto perspiciatis
        ipsam necessitatibus earum! Error natus suscipit aliquam. Vero eum
        molestias nostrum atque delectus, vitae velit reiciendis reprehenderit
        facere laudantium! Similique quas reiciendis molestiae recusandae
        nesciunt, nihil accusantium deserunt unde, quibusdam natus voluptatibus
        ab, minima laudantium! Et libero ipsum delectus sunt dignissimos iste
        obcaecati? Perferendis eligendi excepturi quia culpa natus quidem ipsam
        harum quasi.
      </div>
      <div className="cl-list">
        {clans.map((c) => (
          <ClanTile clan={c} />
        ))}
      </div>
    </div>
  );
}

export default Clans;
