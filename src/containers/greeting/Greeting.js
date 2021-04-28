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
                <GreetingAnimate className="sun" />
                <h1 className="greeting-text" style={{ color: theme.text }}>
                  {/* Full Name */}
                  <div className="greeting-flex">{greeting.title}</div>
                  {
                    <div
                      className="greeting-nickname"
                      style={{ color: theme.text }}
                    >
                      {greeting.nickname}
                    </div>
                  }
                  <SocialMedia theme={theme} />
                </h1>
              </div>

              {/* { <h2 className="greeting-nickname" style={{ color: theme.text }}>
                {greeting.nickname}
              </h2>} */}

              {/* <SocialMedia theme={theme} /> */}
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
