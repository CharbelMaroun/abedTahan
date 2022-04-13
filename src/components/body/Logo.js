import React, { Component } from "react";
import Slider from "react-slick";

export default class Logo extends Component {
  state = {
    logos: [
      {
        logo: "https://cdn.pixabay.com/photo/2016/08/09/17/52/instagram-1581266__340.jpg",
      },
      {
        logo: "https://cdn.pixabay.com/photo/2016/11/19/03/08/youtube-1837872__340.png",
      },
      {
        logo: "https://cdn.pixabay.com/photo/2014/04/03/00/38/shield-308943__340.png",
      },
      {
        logo: "https://cdn.pixabay.com/photo/2016/11/07/13/04/yoga-1805784__340.png",
      },
      {
        logo: "https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432__340.png",
      },
      {
        logo: "https://cdn.pixabay.com/photo/2016/12/27/13/10/logo-1933884__340.png",
      },
      {
        logo: "https://cdn.pixabay.com/photo/2017/11/10/05/04/facebook-2935402__340.png",
      },
      {
        logo: "https://cdn.pixabay.com/photo/2017/06/10/12/46/bee-2389834__340.png",
      },
      {
        logo: "https://cdn.pixabay.com/photo/2014/04/02/10/16/fire-303309__340.png",
      },
      {
        logo: "https://cdn.pixabay.com/photo/2017/11/10/05/05/whatsapp-2935415__340.png",
      },
      {
        logo: "https://cdn.pixabay.com/photo/2017/03/14/21/07/logo-2144403__340.png",
      },
      {
        logo: "https://cdn.pixabay.com/photo/2015/08/27/11/20/bitcoin-910307__340.png",
      },
      {
        logo: "https://cdn.pixabay.com/photo/2017/11/10/05/05/twitter-2935414__340.png",
      },
      {
        logo: "https://cdn.pixabay.com/photo/2016/12/17/15/50/logo-1913689__340.png",
      },
    ],
  };
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 8,
      slidesToScroll: 1,
    };

    const data = this.state.logos;
    return (
      <div>
        <Slider {...settings}>
          {data.map((item) => {
            return (
              <div className="container logos">
                <img className="logo" alt="img" src={item.logo}></img>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
