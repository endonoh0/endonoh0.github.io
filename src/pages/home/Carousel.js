import React from 'react';
// import devgrub from "../../assests/images/devgrub.png";
import devgrub from "./devgrub.png";
import Card from "./Card";
import "./Card.scss";
import data_science from "../../assests/images/data_science.svg";
import fullstack from "../../assests/images/fullstack.svg";
import ui_ux_design from "../../assests/images/ui_ux_design.svg";

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
          title: 'My Skills',
          subTitle: 'adasd',
          imgSrc: data_science,
          link: 'https://www.youtube.com/channel/UCxSITxL2JbF229OGCqieVZw',
        },
        {
          id: 0,
          title: 'Full Stack Developer',
          subTitle: 'Currently learning Python',
          imgSrc: fullstack,
          link: 'https://devgrub.com',
          general_title: 'About Me',
          general_description: 'Looking for a Developer?',
          genreal_link: '/contact',
        },
        {
          id: 2,
          title: 'Winged It',
          subTitle: 'My Most Recent Project',
          imgSrc: ui_ux_design,
          link: 'https://github.com/endonoh0/winged-it',
          general_title: 'My Projects',
          general_description: 'Check out my Projects',
          general_link: '/projects',
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
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }

}

export default Carousel;
