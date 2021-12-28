import React from "react";
import "./footerstyles.css";
import { Icon } from "@iconify/react";
export default function footers() {
  return (
    <div className="whol">
    <center>
    
      <div className="footer">
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

        <p className="GDSC" text-color="white">
          Google Developer Student Club :)
        </p>
      </div>
      
    </center>
    </div>
  );
}
