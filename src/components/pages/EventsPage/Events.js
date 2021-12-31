import React, { useState, useEffect } from "react";
import Slider from "./../../../slider/slider.js";
import "./styles.css";
import "./data.json";
import Footer from "../../../components/Footer/Footer";

const Events = () => {
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(2);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 4);
  };
  useEffect(() => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <>
      <div className="Events">
        <div className="container">
          <Slider />
          {items.slice(0, visible).map((item) => (
            <div className="card1">
              <img
                src={item.img}
                className="event_img"
                alt="BigCo Inc.logo"
                height="250px"
                width="390px"
              />
              <center>
                <p>{item.title}</p>
              </center>
              <p>{item.desc}</p>
              <center>
                <button id="rsvp">LINK</button>
              </center>
            </div>
          ))}

          <button className="load_btn" onClick={showMoreItems}>
            Load More
          </button>
        </div>
      </div>
      <div>
        {" "}
        <Footer />
      </div>
    </>
  );
};
export default Events;
