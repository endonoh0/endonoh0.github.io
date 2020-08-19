import React from "react";
import CardInfo from "../CardInfo";
import "../Card.scss"
import "./FlipCard.scss";
import GreetingAnimate from "../../../containers/greeting/GreetingAnimate2";
import { Fade } from "react-reveal";


function FlipCard (props) {
  var sectionStyle = {
    width: '412px',
    height: '400px',
    backgroundImage: `url(${props.items.imgSrc})`,
    margin: '-100px',
    'margin-top': '69px',
    'background-size': 'cover',
    'background-position': 'center'
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
                  <Fade right duration={2000}>
                    {/* <GreetingAnimate /> */}
                  </Fade>

                </div>

              </div>
            </div>

            <div className="back">
              <div className="inner flex-col">
                <div className="inner-text">
                  <img className="profile_portrait" src={props.items.profileImgSrc} alt={props.items.profileImgSrc}></img>
                </div>
                <p className="inner-description">{props.items.general_description}</p>
              </div>
            </div>
            <div>
              <CardInfo title={props.items.title} subTitle={props.items.subTitle} link={props.items.link} action={props.items.call_to_action} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}

export default FlipCard;
