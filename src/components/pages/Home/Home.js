import React, { useState } from "react";
import "./Home.css";
import { CarouselProvider, Slider, Slide, Image } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import useWindowSize from "./useWindowSize";
import { Icon } from "@iconify/react";
import SliderImages from "./SliderImages.json";
import Footers from "../../Footer/Footer"
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
                <div className="Dis">
                  <b>Google Developer Student Clubs </b>
                  <div className="clg">
                    <b>Sri Ramakrishna Engineering College</b>
                  </div>
                </div>
              ) : (
                <div className="Dis">
                  <b>GDSC</b>
                  <div className="clg">
                    <b>SREC</b>
                  </div>
                </div>
              )}
            </center>
          </div>
        </center>
        <br />
        <br />
        <div className="Start">
          <div className="slider">
            {width > 900 ? (
              <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={40}
                totalSlides={3}
                isPlaying={true}
                interval={2000}
                infinite={true}
                className="carousel"
              >
                <div className="slidebody">
                  <Slider>
                    {SliderImages.map((val, key) => {
                      return (
                        <Slide index={key}>
                          <Image
                            isBgImage="true"
                            className="firstslide"
                            src={val.image}
                            alt="fs"
                          />
                        </Slide>
                      );
                    })}
                  </Slider>
                </div>
              </CarouselProvider>
            ) : (
              <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={75}
                totalSlides={3}
                isPlaying={true}
                interval={2000}
                infinite={true}
                className="carousel"
              >
                <div className="slidebody">
                  <Slider>
                    {SliderImages.map((val, key) => {
                      return (
                        <Slide index={key}>
                          <Image
                            isBgImage="true"
                            className="firstslide"
                            src={val.image}
                            alt="fs"
                          />
                        </Slide>
                      );
                    })}
                  </Slider>
                </div>
              </CarouselProvider>
            )}
          </div>
        </div>

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
                    <Icon
                      icon="el:group"
                  
                      width="100"
                      height="100"
                    />
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
                  project-building activities - both online and in-person.
                </div>
              </div>
              <div
                style={{ display: "table-cell" }}
                className="emptyspace"
              ></div>
              <div style={{ display: "table-cell" }} className="Icon3">
                <div className="logo-anime-grow">
                <center>
                  <Icon
                    icon="uil:arrow-growth"
                
                    width="100"
                    height="100"
                  />
                </center>
                </div>
                <center>
                  <b>Grow</b>
                </center>
                <br />
                <div className="label3">
                  Learn about a range of technical topics and gain new skills
                  through hands-on workshops, events, talks, and
                  project-building activities - both online and in-person.
                </div>
              </div>
              <div
                style={{ display: "table-cell" }}
                className="emptyspace"
              ></div>
            </div>
          ) : (
            < div>
              <div></div>

              <div className="Icon1" >
                <div className="logo-anime-connect">
                
                  <Icon
                    icon="el:group"
                   
                    width="70"
                    height="70"
                  />
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
              <div className="Icon2" >
                <div className="logo-anime-learn">
                
                  {" "}
                  <Icon
                    icon="dashicons:welcome-learn-more"
                   
                    width="70"
                    height="70"
                  />
                </div>
              
                  <b >Learn</b>
                
                <br />
                <div className="label2">
                  Learn about a range of technical topics and gain new skills
                  through hands-on workshops, events, talks, and
                  project-building activities - both online and in-person.
                </div>
              </div>
              <div></div>
              <div className="Icon3" >
               <div className="logo-anime-grow">
                  <Icon
                    icon="uil:arrow-growth"
                  
                    width="70"
                    height="70"
                  />
               </div>
           
                  <b>Grow</b>
              
                <br />
                <div className="label3">
                  Apply new learnings to build great solutions for local
                  problems. Advance your skills, career, and network. Give back
                  to your community by helping others learn, too.
                </div>
              </div>
              <div></div>
            </div>
          )}
          <br />
          <br />
          
        </div>
      </div>
    
      ;
      <Footers/>
    </div>
    
  );
}

export default App;