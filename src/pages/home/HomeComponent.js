import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Carousel from "./Carousel"
import SkillSection from "../../containers/skills/SkillSection";
import Skills from "../../containers/skills/Skills";
import Woods from "../../containers/skills/Woods";
import GreetingAmimate from "../../containers/greeting/GreetingAnimate3";

class Home extends Component {
  render() {
    console.log(this.props.theme);
    return (
      <div className="flex">
        <div className="projects-main">
          <Header theme={this.props.theme} />
          <Greeting theme={this.props.theme} />
          <Skills theme={this.props.theme} />
          <SkillSection theme={this.props.theme} />
          <Carousel />

          <Footer theme={this.props.theme} />
          <TopButton theme={this.props.theme} />
        </div>
      </div>
    );
  }
}

export default Home;
