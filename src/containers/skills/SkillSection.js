import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";


import DataScienceImg from "./DataScienceImg";
import FullStackImg from "./FullStackImg";
import CloudInfraImg from "./CloudInfraImg";
import DesignImg from "./DesignImg";

import Card from "react-bootstrap/Card"
import GreetingAmimate from "../greeting/GreetingAnimate";

// function GetSkillSvg(props) {
//   if (props.fileName === "DataScienceImg")
//     return <DataScienceImg theme={props.theme} />;
  // else if (props.fileName === "FullStackImg")
  //   return <FullStackImg theme={props.theme} />;
  // else if (props.fileName === "CloudInfraImg")
  //   return <CloudInfraImg theme={props.theme} />;
  // else {
  //   return <DesignImg theme={props.theme} />;
  // }
// }

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {skills.data.map((skill) => {
          return (
            <div className="skills-main-div">
              <Fade left duration={2000}>
                <div className="skills-image-div">
                  <Card className="section_card">
                    <Card.Title>
                      {skill.cardTitle}
                    </Card.Title>

                    <Card.Body className="left-side">
                      <div>
                        <ul className="skills-list">
                        {skill.skills.map((skillSentence) => {
                          return (
                            <li
                              className="subTitle skills-text"
                              style={{ color: theme.secondaryText }}
                            >
                              {skillSentence}
                            </li>
                            );
                          })}
                        </ul>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </Fade>


              <div className="skills-text-div">
                <Fade right duration={1000}>
                  <Card className="section_card">
                    <Card.Title>
                      <h1 className="skills-heading" style={{ color: theme.text }}>
                        <GreetingAmimate />
                      </h1>
                    </Card.Title>

                    <Card.Body className="right-side">
                      <Fade right duration={1500}>
                        <Card.Subtitle>
                          {skill.subtitle}
                        </Card.Subtitle>


                        {/* Logo and tooltip */}
                        <SoftwareSkill logos={skill.softwareSkills} />

                      </Fade>
                    </Card.Body>

                  </Card>

                </Fade>

                <Fade right duration={2000}>

                  {/* <div>
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
                  </div> */}
                </Fade>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SkillSection;
