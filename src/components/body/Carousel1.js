import React, { Component } from "react";
import Slider from "react-slick";
import { AiFillStar } from "react-icons/ai";

export default class Carousel1 extends Component {
  state = {
    items: [
      {
        img: "https://zoodmall.com/cdn-cgi/image/w=500,fit=contain,f=auto/http://luckyretail.com/Uploadfile/2020/202008266/245882/245882.JPG",
        para: "Lorem ipsum dolor sit",
        icon: "AiFillStar",
        price: "980,000",
        currency: "LBP",
      },
      {
        img: "https://ae01.alicdn.com/kf/Hf0ea43ffe437477798aac07e6cabdccfg/220.jpg_Q90.jpg_.webp",
        para: "Lorem ipsum dolor sit",
        icon: "AiFillStar",
        price: "980,000",
        currency: "LBP",
      },
      {
        img: "https://image.made-in-china.com/155f0j00NfPYToaMambz/Egg-Waffle-Maker-Single-Cooking-Plate-Electrical-Machine.webp",
        para: "Lorem ipsum dolor sit",
        icon: "AiFillStar",
        price: "980,000",
        currency: "LBP",
      },
      {
        img: "https://m.media-amazon.com/images/I/51UIFgQoHvL._AC_SY450_.jpg",
        para: "Lorem ipsum dolor sit",
        icon: "AiFillStar",
        price: "980,000",
        currency: "LBP",
      },
      {
        img: "https://ae01.alicdn.com/kf/HTB1bdx.ejgy_uJjSZR0q6yK5pXaM/-.jpg_Q90.jpg_.webp",
        para: "Lorem ipsum dolor sit",
        icon: "AiFillStar",
        price: "980,000",
        currency: "LBP",
      },
      {
        img: "https://m.media-amazon.com/images/I/81fjy4IFntL._AC_SY450_.jpg",
        para: "Lorem ipsum dolor sit",
        icon: "AiFillStar",
        price: "980,000",
        currency: "LBP",
      },
      {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Gas_stove_%281%29.jpg/220px-Gas_stove_%281%29.jpg",
        para: "Lorem ipsum dolor sit",
        icon: "AiFillStar",
        price: "980,000",
        currency: "LBP",
      },
      {
        img: "https://www.eromman.com/images/thumbnails/590/590/detailed/194/1_53dn-9n.jpg.jpg",
        para: "Lorem ipsum dolor sit",
        icon: "AiFillStar",
        price: "980,000",
        currency: "LBP",
      },
    ],
  };
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
    };
    const data = this.state.items;
    return (
      <div>
        <Slider className="carousel1" {...settings}>
          {data.map((item) => {
            return (
              <div>
                <img src={item.img} alt="img"></img>
                <p>{item.para}</p>

                <div style={{ display: "flex" }}>
                  <AiFillStar style={{ color: "#FAE301" }}></AiFillStar>
                  <AiFillStar style={{ color: "#FAE301" }}></AiFillStar>
                  <AiFillStar style={{ color: "#FAE301" }}></AiFillStar>
                  <AiFillStar style={{ color: "#FAE301" }}></AiFillStar>
                  <AiFillStar style={{ color: "#DBDBDD" }}></AiFillStar>
                </div>

                <span>{item.price}</span>
                <sup>{item.currency}</sup>
              </div>
            );
          })}
        </Slider>
        <br></br>
      </div>
    );
  }
}
