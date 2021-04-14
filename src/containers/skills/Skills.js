import React from "react";
import "./Skills.css";
import SkillSection from "./SkillSection";
import { skillsList, education } from "../../portfolio";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";

export default function Skills(props) {
  const theme = props.theme;
  // console.log('props in skills', skills);
  return (
    <div className="main" id="skills" className="grid-parent">
      <SkillSection theme={theme} />

      <div className="skills-container">
        <div className="skills-list">
          <h1 className="skills-heading" style={{ color: theme.text }}>
            Technologies
          </h1>
          {skillsList.data.map((skill) => {
            return (
              <SoftwareSkill logos={skill.softwareSkills} title={skill.title} />
            );
          })}
        </div>
        <div className="education-container">
          <h3 className="skills-heading" style={{ color: theme.text }}>
            Education
          </h3>
          {education.data.map((edu) => {
            return (
              <div style={{ margin: "1.25rem" }}>
                <div className="education-main-div">
                  <div className="education-degree mb">{edu.degree}</div>
                  <div className="education-school mb">{edu.school}</div>
                  <div className="education-year mb">{edu.year}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
