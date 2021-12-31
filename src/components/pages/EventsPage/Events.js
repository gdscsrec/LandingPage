import React, { useState, useEffect } from "react";
import Slider from "./../../../slider/slider.js";
import "./styles.css";
import Footer from "../../../components/Footer/Footer";


const Events = () => {
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(2);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 4);
  };
  useEffect(() => {
    fetch("sorted_events.json", {
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
          <Slider items={items} />

          {
            		// console.log(items)
				items.slice(0, visible).map((item) => {
				  // console.log(sitems)
				  // console.log(item)
				  
				 return(  <div className="card1">
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
					{/* <center>
					  <button id="rsvp">LINK</button>
					</center> */}
				  </div>)
				
            })}
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
