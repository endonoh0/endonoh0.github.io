import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills, career } from "../../portfolio";
import { Fade } from "react-reveal";

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="bordered-grid-item">
        {skills.data.map((skill) => {
          return (
            <div className="skills-main-div">
              <h1 className="skills-heading" style={{ color: theme.text }}>
                Skills Overview
              </h1>
              <div className="skills-text-div">
                <div className="skills-sentence-div">
                  {skill.skills.map((skillSentence) => {
                    return (
                      <p
                        className="subTitle skills-text"
                        style={{ color: theme.secondaryText }}
                      >
                        {skillSentence}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
        {career.data.map((car) => {
          return (
            <div className="skills-main-div">
              <h1 className="skills-heading" style={{ color: theme.text }}>
                Experience
              </h1>
              <div className="skills-text-div">
                <div className="skills-sentence-div">
                  {car.experience.map((expSentence) => {
                    return (
                      <p
                        className="subTitle skills-text"
                        style={{ color: theme.secondaryText }}
                      >
                        {expSentence}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SkillSection;
