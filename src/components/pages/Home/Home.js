import React from "react";
import "./Home.css";
import "pure-react-carousel/dist/react-carousel.es.css";
import useWindowSize from "./useWindowSize";
import { Icon } from "@iconify/react";
import SliderH from "./../../../slider/sliderH";
import Footers from "../../Footer/Footer";
import l2 from "../../images/L1.png";
function App() {
  const { width } = useWindowSize();
  console.log({ width });
  return (
    <div>
      <div className="whole">
        <center>
          <div className="Container3">
            <center>
              {width > 900 ? (
                <div className="d1">
                  <div className="anim1">Welcome To</div>
                  <br />
                  <img src={l2} alt="GDSC Logo" className="l2" />
                  <br />
                  Google Developer Student Clubs
                  <div className="c1">Sri Ramakrishna Engineering College</div>
                  <br />
                  <div className="anim2">Let's Learn Together</div>
                </div>
              ) : (
                <div className="d1">
                  <div className="anim1">Welcome To</div>
                  <br />
                  <img src={l2} alt="GDSC Logo" className="l2" />
                  <br />
                  Google Developer Student Clubs
                  <div className="c1">SREC</div>
                  <br />
                  <div className="anim2">Let's Learn Together</div>
                </div>
              )}
            </center>
          </div>
        </center>

        <br />
        <br />
        <center>
          <div className="Start">
            <div className="slider">
              <SliderH />
            </div>
          </div>
        </center>

        <div style={{ display: "table-row" }} className="design">
          <br />
          <br />
          {width > 900 ? (
            <div style={{ display: "table" }}>
              <div
                style={{ display: "table-cell" }}
                className="emptyspace"
              ></div>

              <div style={{ display: "table-cell" }} className="Icon1">
                <div className=" logo-anime-connect">
                  <center>
                    <Icon icon="el:group" width="100" height="100" />
                  </center>
                </div>
                <center className="connect">
                  <b>Connect</b>
                </center>
                <br />
                <div className="label1">
                  Meet students interested in developer technologies at your
                  university. All are welcome, including those with diverse
                  backgrounds and different majors.
                </div>
              </div>
              <div
                style={{ display: "table-cell" }}
                className="emptyspace"
              ></div>
              <div style={{ display: "table-cell" }} className="Icon2">
                <div className="logo-anime-learn">
                  <center>
                    <Icon
                      icon="dashicons:welcome-learn-more"
                      width="100"
                      height="100"
                    />
                  </center>
                </div>
                <center>
                  <b>Learn</b>
                </center>
                <br />
                <div className="label2">
                  Learn about a range of technical topics and gain new skills
                  through hands-on workshops, events, talks, and
                  project-building activities-both online and in-person.
                </div>
              </div>
              <div
                style={{ display: "table-cell" }}
                className="emptyspace"
              ></div>
              <div style={{ display: "table-cell" }} className="Icon3">
                <div className="logo-anime-grow">
                  <center>
                    <Icon icon="uil:arrow-growth" width="100" height="100" />
                  </center>
                </div>
                <center>
                  <b>Grow</b>
                </center>
                <br />
                <div className="label3">
                    Apply new learnings to build great solutions for local
                    problems. Advance your skills, career, and network. Give
                    back to your community by helping others learn, too.
                </div>
              </div>
              <div
                style={{ display: "table-cell" }}
                className="emptyspace"
              ></div>
            </div>
          ) : (
            <div className="ics">
              <center>
                <div></div>

                <div className="Icon1">
                  <div className="logo-anime-connect">
                    <Icon icon="el:group" width="70" height="70" />
                  </div>

                  <b>Connect</b>

                  <br />
                  <div className="label1" width="10vh">
                    Meet students interested in developer technologies at your
                    university. All are welcome, including those with diverse
                    backgrounds and different majors.
                  </div>
                </div>
                <div></div>
                <div className="Icon2">
                  <div className="logo-anime-learn">
                    {" "}
                    <Icon
                      icon="dashicons:welcome-learn-more"
                      width="70"
                      height="70"
                    />
                  </div>

                  <b>Learn</b>

                  <br />
                  <div className="label2">
                    Learn about a range of technical topics and gain new skills
                    through hands-on workshops, events, talks, and
                    project-building activities - both online and in-person.
                  </div>
                </div>
                <div></div>
                <div className="Icon3">
                  <div className="logo-anime-grow">
                    <Icon icon="uil:arrow-growth" width="70" height="70" />
                  </div>

                  <b>Grow</b>

                  <br />
                  <div className="label3">
                    Apply new learnings to build great solutions for local
                    problems. Advance your skills, career, and network. Give
                    back to your community by helping others learn, too.
                  </div>
                </div>
                <div></div>
              </center>
            </div>
          )}
          <br />
          <br />
        </div>
      </div>

      <Footers />
    </div>
  );
}

export default App;
