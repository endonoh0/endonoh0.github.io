import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills, career } from "../../portfolio";
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
        {skills.data.map((skill) => {
          return (
            <div className="skills-main-div">
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
        <h1 className="skills-heading" style={{ color: theme.text }}>
          Experience
        </h1>
        {career.data.map((car) => {
          return (
            <div className="skills-main-div">
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
                    <a href="https://floka.co/">Floka</a>
                  </h2>
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
                  <div className="iconify-parent">
                    <div className="iconify-container">
                      <span
                        class="iconify"
                        data-icon="akar-icons:location"
                        data-inline="false"
                      ></span>
                      <p className="iconify-location">Vancouver, BC</p>
                    </div>
                    <div className="iconify-container">
                      <span
                        class="iconify"
                        data-icon="ant-design:home-outlined"
                        data-inline="false"
                      ></span>
                      <p className="iconify-location">Remote</p>
                    </div>
                    <div className="iconify-container">
                      <span
                        class="iconify"
                        data-icon="cil:calendar"
                        data-inline="false"
                      ></span>
                      <p className="iconify-location">Oct 2020 to Present</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <h1 className="skills-heading" style={{ color: theme.text }}>
          Projects
        </h1>
        <div className="repo-cards-div-main" style={{ marginTop: "20px" }}>
          {ProjectsData.data.map((repo, i) => {
            if (i < 2) return <GithubRepoCard repo={repo} theme={theme} />;
          })}
        </div>
        <nav>
          <Button
            text={"More Projects"}
            className="project-button"
            href="#/projects"
            theme={theme}
          />
        </nav>
      </div>
    );
  }
}

export default SkillSection;
