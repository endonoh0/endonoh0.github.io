import React from "react";
import { useSpring, animated } from "react-spring";

function CardInfo(props) {

  const style = useSpring({opacity: 1, from: {opacity: 0}});

  return (
    <animated.div className="g-card-info" style={style}>
      <p className="g-card-title">{props.title}</p>
      <p className="g-card-sub-title">{props.subTitle}</p>
      <a className="call-to-action" href={props.link} rel="noopener noreferrer">{props.action}</a>
    </animated.div>
  );
}

export default CardInfo;
