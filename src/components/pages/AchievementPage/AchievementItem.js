
import { useState } from "react";
import useMobile from "./useMobile";

function MobileAchievementItem(props) {
    const {item} = props;
    const [show, setShow] = useState(false)

    return (<div onClick={() => setShow(!show)} className="achievement">
    <div className="achieve">
    <div className="imgload" background-color="white">
        <img
          src={item.img}
          className="img_achieve"
          alt="BigCo Inc. logo"
          padding="50px"
        />
        
        <div className="card_achieve"></div>
        
        <center>  
         <b className="achievements_title">{item.headline}</b>
        </center>
        <br/>
         <button id="learn"> Learn more</button>
        <center>
       {show &&  <p id={item.userid} className="achievements_desc p1">{item.description}</p>}
       </center>
      </div>
    </div>  
  </div>)
}

function DesktopAchievementItem(props) {
    const {item} = props;
    return (<div className="achievement">
    <div className="achieve">
      <div className="imgload" background-color="white">
        <img
          src={item.img}
          className="img_achieve"
          alt="BigCo Inc. logo"
          padding="50px"
        />
      </div>
      <div className="card_achieve">
        <b>{item.headline}</b>
        <p id="p1">{item.description}</p>
      </div>
    </div>
  </div>)
}

export default function AchievementItem(props) {
    const isMobile = useMobile();
    return isMobile ? <MobileAchievementItem item={props.item} /> : <DesktopAchievementItem item={props.item}/>
}