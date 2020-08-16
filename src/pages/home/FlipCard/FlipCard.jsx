import React from "react";
import CardInfo from "../CardInfo";
import "../Card.scss"
import "./FlipCard.scss";

function FlipCard (props) {
  var sectionStyle = {
    width: '300px',
    height: '400px',
    backgroundImage: `url(${props.items.imgSrc})`
  };

  return (
    <>
    <div class="wrapper">
      <div className="cols">
        <div className="col" ontouchstart="this.classList.toggle('hover');">
          <div className="container">

            <div className="front">
              <div className="inner">
                <div className="g-card-image" style={sectionStyle} >
                {/* <div className="g-card-image" style={backgroundImage: `url(${props.items.imgSrc})`} alt={props.items.imgSrc}> */}

                </div>

              </div>
            </div>

            <div className="back">
              <div className="inner">
              </div>
            </div>
              <CardInfo title={props.items.title} subTitle={props.items.subTitle} link={props.items.link} />

          </div>
        </div>
      </div>
    </div>
  </>
  );
}

export default FlipCard;
