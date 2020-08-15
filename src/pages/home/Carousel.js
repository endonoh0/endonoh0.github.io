import React from 'react';
import reactReveal from 'react-reveal';
import programmer from "../../assests/images/programmer.svg";

class Carousel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: 'Dev Grub',
          subTitle: 'The cookbook for developers',
          imgSrc: programmer,
          link: 'https://devgrub.com',
          selected: false
        },
        {
          id: 1,
          title: 'Garrett Love',
          subTitle: 'YouTube channel',
          imgSrc: programmer,
          link: 'https://www.youtube.com/channel/UCxSITxL2JbF229OGCqieVZw',
          selected: false
        },
        {
          id: 2,
          title: 'Evverest',
          subTitle: 'A social network for developers',
          imgSrc: programmer,
          link: 'https://github.com/garrettlove8/evverest',
          selected: false
        },
      ]
    }
  }

  handleCardClickMethod = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach(item => {
      if(item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items
    });


  }


  render() {
    return(
      <p>Carousel works</p>
    );
  }

}

export default Carousel;
