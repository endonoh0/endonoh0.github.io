import React from 'react';
// import devgrub from "../../assests/images/devgrub.png";
import devgrub from "./devgrub.png";
import Card from "./Card";
import "./Card.scss";
import data_science from "../../assests/images/data_science.svg";
import fullstack from "../../assests/images/fullstack.svg";
import ui_ux_design from "../../assests/images/ui_ux_design.svg";
import profileImgSrc from "../../assests/images/profileImgSrc.jpg";

import FlipCard from "./FlipCard/FlipCard";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          title: "Experience",
          subTitle: '',
          imgSrc: data_science,
          link: 'https://www.youtube.com/channel/UCxSITxL2JbF229OGCqieVZw',
        },
        {
          id: 0,
          title: 'Full Stack Developer',
          subTitle: 'Currently learning Python',
          imgSrc: fullstack,
          profileImgSrc: profileImgSrc,
          general_title: 'About Me',
          general_greeting: 'Hello World!',
          general_description: 'Hello World! I am a web developer from Canada.',
          call_to_action: "Let's get in touch!",
          link: '/#/contact',
        },
        {
          id: 2,
          title: 'Winged It',
          subTitle: 'Most Recent Project',
          imgSrc: ui_ux_design,
          link: '/#/projects',
          // link: 'https://github.com/endonoh0/winged-it',
          general_title: 'My Projects',
          general_description: 'An app that searches for recipes using in-season ingredients and tracks down nearby farmer\'s market.',
          call_to_action: "Check out my code"
        },
      ]
    }
  }

  makeItems = (items) => {
    return items.map(item => {
      return <FlipCard items={item} key={item.id} />
    })
  }


  render() {
    return(
      <Container fluid={true} className="mb-15">
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }

}

export default Carousel;
