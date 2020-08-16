import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";
import GreetingAnimate from "./GreetingAnimate";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div className="center">

              {/* SVG animation */}
            <div className="brand">
                <GreetingAnimate className="sun"/>
                <h1 className="greeting-text" style={{ color: theme.text  }}>
                  {/* Full Name */}
                  <div className="greeting-flex">
                    {greeting.title}
                  </div>
                </h1>
              </div>

              { <h2 className="greeting-nickname" style={{ color: theme.text }}>
                {/* Job Title */}
                {/* {greeting.nickname} */}
              </h2>}

              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {/* Removed About me */}

                {/* {greeting.subTitle} */}
              </p>

              {/* <SocialMedia theme={theme} /> */}

              <div className="portfolio-repo-btn-div">
                {/* Removed Checkout my code */}

                {/* <Button
                  text="Find Me On Github"
                  newTab={true}
                  href={greeting.portfolio_repository}
                  theme={theme}
                  className="portfolio-repo-btn"
                /> */}
              </div>
              {/*<div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              <Button text="See my resume" newTab={true} href={greeting.resumeLink} />
            </div> */}
            </div>
          </div>

          {/* Removed Image */}

          {/* <div className="greeting-image-div"> */}
            {/* <img
							alt="saad sitting on table"
							src={require("../../assests/images/feelingProud.svg")}
						></img> */}
            {/* <FeelingProud theme={theme} /> */}
          {/* </div> */}


        </div>
      </div>
    </Fade>
  );
}
