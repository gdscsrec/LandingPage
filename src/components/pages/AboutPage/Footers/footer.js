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

        <div className="quicklinks">
          <a href="https://www.linkedin.com/in/sanjaydevtech" target="_blank">
            Sanjay
          </a>
          <a
            href="https://www.linkedin.com/in/jayasakthi-balaji-g-337128204"
            target="_blank"
          >
            Jayasakthi Balaji
          </a>
          <a
            href="https://www.linkedin.com/in/jayasakthi-balaji-g-337128204"
            target="_blank"
          >
            Harshanth
          </a>
          <a href="https://www.linkedin.com/in/harifbx" target="_blank">
            Swetha
          </a>
          <a href="http://www.linkedin.com/in/mohamedfazil17" target="_blank">
            Swethasri
          </a>
          <a
            href="https://www.linkedin.com/in/jaswanth-solai-ba49b3191"
            target="_blank"
          >
            Sneha
          </a>
          <a
            href="https://www.linkedin.com/in/varniha-s-6a7232222"
            target="_blank"
          >
            Nandhini
          </a>
          <a
            href="https://www.linkedin.com/in/geetha-palanisamy-b2323b193"
            target="_blank"
          >
            Aadhitya
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
