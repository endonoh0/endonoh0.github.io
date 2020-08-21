import React from 'react';
// import devgrub from "../../assests/images/devgrub.png";
import devgrub from "./devgrub.png";
import Card from "./Card";
import "./Card.scss";
import data_science from "../../assests/images/data_science.svg";
import fullstack from "../../assests/images/fullstack.svg";
import ui_ux_design from "../../assests/images/ui_ux_design.svg";
import profileImgSrc from "../../assests/images/profileImgSrc.jpg";
import winged_it from "../../assests/images/winged_it.png";
import appointment_book from "../../assests/images/appointment_book.png";

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
          title: "Experienced",
          subTitle: 'Building Web Apps',
          imgSrc: data_science,
          general_description: "realize projects using React.js, JavaScript, HTML and CSS.",
          profileImgSrc: appointment_book,
          call_to_action: "See my GitHub",
          link: ""
        },
        {
          id: 0,
          title: 'Full Stack Developer',
          subTitle: '',
          imgSrc: fullstack,
          profileImgSrc: profileImgSrc,
          general_title: 'About Me',
          general_greeting: 'Hello World!',
          general_description: 'Hello World! I am a web developer from Canada.',
          call_to_action: "Looking for a dev?",
          link: '/#/contact',
        },
        {
          id: 2,
          title: '',
          subTitle: 'Most Recent Project',
          imgSrc: ui_ux_design,
          link: '/#/projects',
          profileImgSrc: winged_it,
          // link: 'https://github.com/endonoh0/winged-it',
          general_title: 'My Projects',
          general_description: 'A recipe app that searches for in-season ingredients from nearby farmer\'s market.',
          call_to_action: "Check out my code"
        },
      ]
    }
  }

  makeItems = (items) => {
    return items.map(item => {
      return (
          <FlipCard items={item} key={item.id} />
      )
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
