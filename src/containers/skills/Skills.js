import React from "react";
import { Fade } from "react-reveal";
import "./Skills.css";
import SkillSection from "./SkillSection";
import { skillsList, education } from "../../portfolio";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";

export default function Skills(props) {
  const theme = props.theme;
  return (
    <div className="main" id="skills" className="grid-parent">
      <SkillSection theme={theme} />

      <div className="skills-container">
        <h1
          className="skills-heading"
          style={{ color: theme.text, marginTop: "-9px" }}
        >
          Technologies
        </h1>
        <div className="skills-list">
          {skillsList.data.map((skill, i) => {
            return (
              <Fade bottom duration={2000} distance="40px">
                <SoftwareSkill
                  logos={skill.softwareSkills}
                  title={skill.title}
                  key={i}
                />
              </Fade>
            );
          })}
        </div>
        <h3 className="skills-heading" style={{ color: theme.text }}>
          Education
        </h3>
        <div className="education-container">
          {education.data.map((edu, i) => {
            return (
              <Fade bottom duration={2000} distance="40px">
                <div style={{ margin: "1.25rem" }} key={i}>
                  <div className="education-main-div">
                    <div className="education-degree mb">{edu.degree}</div>
                    <div className="education-school mb">{edu.school}</div>
                    <div className="iconify-container">
                      <span
                        className="iconify"
                        data-icon="cil:calendar"
                        data-inline="false"
                      ></span>
                      <p className="iconify-location">{edu.year}</p>
                    </div>
                  </div>
                </div>
              </Fade>
            );
          })}
        </div>
      </div>
    </div>
  );
}
