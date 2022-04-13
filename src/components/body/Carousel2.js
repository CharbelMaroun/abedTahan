import React, { Component } from "react";
import Slider from "react-slick";

export default class CArousel2 extends Component {
  state = {
    items: [
      {
        img: "https://image.shutterstock.com/image-photo/yellow-headphones-on-blue-background-260nw-1490726594.jpg",
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTgus7ZsMyO_sYklSLX-XIMCnjF-ypA4ZPELt_h8_0-dfeUHIWD2Jio09jMFATa5y6Y6I&usqp=CAU",
      },
      {
        img: "https://st.depositphotos.com/1216711/3356/v/600/depositphotos_33569319-stock-illustration-the-empty-white-refrigerator-and.jpg",
      },
    ],
  };
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    const data = this.state.items;
    return (
      <div>
        <Slider {...settings}>
          {data.map((item) => {
            return (
              <div className="container">
                <img className="carousel2" alt="img" src={item.img}></img>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
