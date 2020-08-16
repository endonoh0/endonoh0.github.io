import React from "react";
import CardInfo from "./CardInfo";
import "./Card.scss";


const Card = (props) => {

  return (
    <div className="d-inline-block g-card" onClick={(e) => props.click(props.item)}>
      <img className="g-card-image" src={props.items.imgSrc} alt={props.items.imgSrc} />
      <CardInfo title={props.items.title} subTitle={props.items.subTitle} link={props.items.link} />
    </div>
  );
}

export default Card;
