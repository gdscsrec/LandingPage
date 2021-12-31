import React, { useMemo } from "react";
import { ObjOne, ObjTwo } from "./data";
import InfoSection from "../../InfoSection/InfoSection.js";
import Profile from "./Profile/Profile.json";
import Domain from "./Domain/domain.json";
import Footer from "../AboutPage/Footers/footer";
import "./domain.css";
function About() {
  const list = useMemo(() => {
    const x = [];
    let i = -1;
    Profile.forEach((v, index) => {
      if (index % 4 === 0) ++i;
      x[i] = (x[i] ?? []).concat(v);
    });
    return x;
  }, [Profile]);
  const list1 = useMemo(() => {
    const x = [];
    let i = -1;
    Domain.forEach((v, index) => {
      if (index % 8 === 0) ++i;
      x[i] = (x[i] ?? []).concat(v);
    });
    return x;
  }, [Domain]);
  return (
    <>
      <InfoSection {...ObjOne} />
      <InfoSection {...ObjTwo} />
      <center>
        <div className="box">
          <center>
            <h3 className="head1">Our Domains</h3>
          </center>
          <center>
           {list1.map((Domaing, index) => {
              return (
                <div className="Domain_Container">
                  {Domaing.map((domain) => {
                    return (
                      <div id="container">
                        <img src={domain.img} className="domainimg" alt=" " />
                        <h4 className="domainname"> {domain.domain}</h4>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </center>

          <center>
            <h3 className="head2">Meet Our Team</h3>
          </center>
          <div className="MeetTeam">
            {list.map((ProfileName, index) => {
              return (
                <div className="Meet_Container">
                  {ProfileName.map((profile) => {
                    return (
                      <div id="container2">
                        <a href={profile.link}>
                          <img
                            src={profile.img}
                            className="profileimg"
                            alt=" "
                          />
                        </a>
                        <h4 className="profilename">{profile.name}</h4>
                        <h4 className="profiledesc">{profile.desc}</h4>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </center>
      <Footer />
    </>
  );
}
export default About;
