import React from "react";
import "./Skills.css";
// import SkillsSummary from "./SkillsSummary";
import { Fade } from "react-reveal";
import Moon from "./Moon";

export default function Skills(props) {
  const theme = props.theme;
  return (
    <div className="main" id="skills">
      <div className="skills-header-div">
        <Fade bottom duration={2000} distance="20px">
          <Moon />
          <h1 className="skills-header" style={{ color: theme.text }}>
            {/* What I Do? */}
          </h1>
        </Fade>
      </div>
    </div>
  );
}
