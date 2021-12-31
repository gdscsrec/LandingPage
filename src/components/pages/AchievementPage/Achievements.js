import React, { useState, useEffect } from "react";
import "./achievement.css";

import YoutubeEmbed from "./YoutubeEmbed";
import Footers from "../../Footer/Footer";
import useMobile from "./useMobile.js";
import AchievementItem from "./AchievementItem";
const Achievements = () => {
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(3);
  const isMobile = useMobile();

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);

    // buttonRef.current.disable=true;
  };
  useEffect(() => {
    // fetch('../AchievementPage/AbtData.json')
    fetch("sorted_achievements.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div className="Achievements">
      <YoutubeEmbed embedId="2PnmLF9YQRI" />

      <div className="container1">
        {items.slice(0, visible).map((item) => (
          <AchievementItem item={item} key={item.userid} />
        ))}
        {/* <button disabled={disable} onClick={()=>setDisable(true)} ></button> */}
        <button onClick={showMoreItems}className="btn_achieve">Load More</button>
        <div>
          <Footers />
        </div>
      </div>
    </div>
  );
};

export default Achievements;

