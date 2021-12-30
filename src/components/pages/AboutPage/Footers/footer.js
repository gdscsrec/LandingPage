import React from "react";
import "./footersstyles.css";
import { Icon } from "@iconify/react";
export default function footers() {
  return (
    <div className="whol">
    <center>
      <div div className="footer1">
        <div className="sociallinks">
          <a href="https://www.linkedin.com/company/gdscsrec/">
            <Icon icon="brandico:linkedin" color="white" width="20" />
          </a>
          <a href="http://discord.io/gdscsrec">
            <Icon icon="akar-icons:discord-fill" color="white" width="20" />
          </a>
          <a href="https://www.instagram.com/gdscsrec/">
            <Icon icon="cib:instagram" color="white" width="20" />
          </a>
          <a href="https://gdsc.community.dev/sri-ramakrishna-engineering-college-coimbatore/">
            <img src={"/images/GDSC.png"} alt="GDSC" width="34" height="18" />
          </a>
        </div>
        <h2 className="dw-heart"> Developed with ❤️ by </h2>
       <div className="scrolling">       
       <div className="quicklinks">
      <h2>
          <a href="https://www.linkedin.com/in/sanjaydevtech">Sanjay</a>
          <a href="https://www.linkedin.com/in/jayasakthi-balaji-g-337128204">Jayasakthibalaji</a>
          <a href="https://www.linkedin.com/in/adithya-krishnan-08051221b">Adithyakrishnan</a>
          <a href="https://www.linkedin.com/in/sneha-g-14736220a">Sneha</a>
          <a href="https://www.linkedin.com/in/swethasri-r-12559021a">Swethasri</a>
          <a href="https://www.linkedin.com/in/swetha-vijayakumar-9372001b5" >Swetha</a>        
          <a href="https://www.linkedin.com/in/nandhini-lingaraj-65b645191">Nandhini</a> 
          <a href="http://www.linkedin.com/in/mohamedfazil17">Mohamedfazil</a>
          </h2>
        </div>
        </div>
 
        <p className="GDSC" text-color="white">
          Google Developer Student Club :)
        </p>
      </div>
    </center>
    </div>
  );
}