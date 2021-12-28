import React from "react";
import { ObjOne, ObjTwo } from "./data";
import InfoSection from "../../InfoSection/InfoSection.js";
import Profile from "./Profile/Profile.json";
import Domain from "./Domain/domain.json";
import Footer from "../AboutPage/Footers/footer";
import "./domain.css";
function About() {
  return (
    <>
      <InfoSection {...ObjOne} />
      <InfoSection {...ObjTwo} />
      <center>
      <div className="box">
      <center>
        <h3 className="head1" >Our Domains</h3>
      </center>
<center>
          {Domain.map((DomainName, index) => {
            return (
              <div id="container">
                <img src={DomainName.img} className="domainimg" alt=" " />
                <h4 className="domainname"> {DomainName.domain}</h4>
              </div>
            );
          })}
        </center>
          
        </div>
      </center>
      <center>
      <div className="box1">
      <center>
            <h3 className="head2">Meet Our Team</h3>
          </center>
          {Profile.map((ProfileName, index) => {
            return (
              
                <div id="container2">
                   <a href={ProfileName.link}>
                  <img src={ProfileName.img} className="profileimg" alt=" " /></a>
                  <h4 className="profilename">{ProfileName.name}</h4>
                  <h4 className="profiledesc">{ProfileName.desc}</h4>
                </div>
              
            );
          })}

          
          
        </div>
      </center>
      <Footer />
    </>
  );
}
export default About;
