import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";

import Card from "react-bootstrap/Card"
import GreetingAmimate3 from "../greeting/GreetingAnimate3";
import GreetingAmimate2 from "../greeting/GreetingAnimate2";
import GreetingAmimate from "../greeting/GreetingAnimate";

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <>
      {/* <div className="mt-30">
        <GreetingAmimate3 />
        <GreetingAmimate />
        <GreetingAmimate2 />
        <GreetingAmimate3 />
      </div> */}
      <div className="skills-main-div">
        {skills.data.map((skill) => {
          return (
            <div >
              <Fade left duration={2000}>
                <div className="skills-image-div">
                  <Card className="section_card">
                    <Card.Title>
                      {skill.cardTitle}
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
                        {/* <GreetingAmimate /> */}
                        {/* <Woods /> */}
                      </h1>
                    </Card.Title>



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
      </>
    );
  }
}

export default SkillSection;
