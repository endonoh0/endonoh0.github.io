import React, { Component } from "react";
import "./Skills.css";
import { skills, career, greeting } from "../../portfolio";
import ProjectsData from "../../shared/opensource/projects.json";
import { Fade } from "react-reveal";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="bordered-grid-item">
        <h1 className="skills-heading" style={{ color: theme.text }}>
          Skills Overview
        </h1>
        {skills.data.map((skill, i) => {
          return (
            <Fade bottom duration={2000} distance="20px">
              <div className="skills-main-div" key={i}>
                <div className="skills-text-div">
                  <div className="skills-sentence-div">
                    {skill.skills.map((skillSentence, i) => {
                      return (
                        <p
                          key={i}
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
            </Fade>
          );
        })}
        <h1 className="skills-heading" style={{ color: theme.text }}>
          Experience
        </h1>
        {career.data.map((car, i) => {
          return (
            <Fade bottom duration={2000} distance="20px">
              <div className="skills-main-div" key={i}>
                <div className="skills-text-div">
                  <div className="skills-sentence-div">
                    <p
                      className="skills-company-position"
                      style={{ color: theme.text }}
                    >
                      FullStack Developer
                    </p>
                    <h2
                      className="skills-company-title"
                      style={{ color: theme.text }}
                    >
                      <a
                        href="https://floka.co/"
                        style={{
                          color: "#303030",
                          marginTop: "5px",
                          fontFamily: "Google Sans Regular",
                        }}
                      >
                        Floka
                      </a>
                    </h2>
                    {car.experience.map((expSentence, i) => {
                      return (
                        <p
                          key={i}
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {expSentence}
                        </p>
                      );
                    })}
                    <div className="iconify-parent">
                      <div className="iconify-container">
                        <span
                          className="iconify"
                          data-icon="akar-icons:location"
                          data-inline="false"
                        ></span>
                        <p className="iconify-location">Vancouver, BC</p>
                      </div>
                      <div className="iconify-container">
                        <span
                          className="iconify"
                          data-icon="ant-design:home-outlined"
                          data-inline="false"
                        ></span>
                        <p className="iconify-location">Remote</p>
                      </div>
                      <div className="iconify-container">
                        <span
                          className="iconify"
                          data-icon="cil:calendar"
                          data-inline="false"
                        ></span>
                        <p className="iconify-location">Oct 2020 to Present</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          );
        })}
        <h1 className="skills-heading" style={{ color: theme.text }}>
          Projects
        </h1>
        <div className="repo-cards-div-main" style={{ marginTop: "20px" }}>
          {ProjectsData.data.map((repo, i) => {
            return <GithubRepoCard key={i} repo={repo} theme={theme} />;
          })}
        </div>
        <div className="button-group">
          <Button
            text={"More Projects"}
            className="project-button"
            newTab={true}
            href="https://github.com/endonoh0"
            theme={theme}
          />
          <Button
            text="See My Resume"
            newTab={true}
            href={greeting.resumeLink}
            theme={theme}
          />
        </div>
      </div>
    );
  }
}

export default SkillSection;
