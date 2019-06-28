import React from "react";
import "./BottomBarCSS.css";
import LinkedInSVG from "../visuals/linkedin.svg";
import GitHubSvg from "../visuals/github.svg";

const BottomBar = () => {
  return (
    <div id="bottomBar">
      <label id="tlfNmr">+47 47 61 19 94</label>
      <a href="mailto:dalaaker.nicolai@gmail.com">dalaaker.nicolai@gmail.com</a>
      {/* LinkedIn svg made by SimpleIcon, downloaded on flaticon */}
      <img
        id="linkedInSvg"
        title="LinkedIn"
        src={LinkedInSVG}
        alt="LinkedIn"
        href="https://www.linkedin.com/in/nicolai-andr%C3%A9-dalaaker-a91004170/"
      />
      {/* Github svg made by Dave Gandy, downloaded on flaticon */}
      <img
        id="githubSvg"
        title="GitHub"
        src={GitHubSvg}
        alt="GitHub"
        href="https://github.com/Nicolaad"
      />
    </div>
  );
};

export default BottomBar;
