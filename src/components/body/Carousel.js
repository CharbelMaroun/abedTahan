import React, { Component } from "react";
import Slider from "react-slick";
import { AiFillStar } from "react-icons/ai";
import "./body.css";

export default class Carousel extends Component {
  state = {
    display: true,
    width: 500,
  };
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
    };
    return (
      <div>
        <button
          className="button"
          onClick={() =>
            this.setState({
              width: this.state.width + 100,
            })
          }
        ></button>
        <button
          className="button"
          onClick={() =>
            this.setState({
              width: this.state.width - 100,
            })
          }
        ></button>
        <div
          style={{
            width: this.state.width + "px",
            display: this.state.display ? "block" : "none",
          }}
        >
          <Slider className="children2" {...settings}>
            <div>
              <img
                src="https://zoodmall.com/cdn-cgi/image/w=500,fit=contain,f=auto/http://luckyretail.com/Uploadfile/2020/202008266/245882/245882.JPG"
                alt="img"
              ></img>
              <p>Lorem ipsum dolor sit</p>
              <div style={{ display: "flex" }}>
                <AiFillStar style={{ color: "#FAE301" }}></AiFillStar>
                <AiFillStar style={{ color: "#FAE301" }}></AiFillStar>
                <AiFillStar style={{ color: "#FAE301" }}></AiFillStar>
                <AiFillStar style={{ color: "#FAE301" }}></AiFillStar>
                <AiFillStar style={{ color: "#DBDBDD" }}></AiFillStar>
              </div>

              <span>980,000</span>
              <sup>LBP</sup>
            </div>
            <div>
              <img
                src="https://ae01.alicdn.com/kf/Hf0ea43ffe437477798aac07e6cabdccfg/220.jpg_Q90.jpg_.webp"
                alt="img"
              ></img>
              <p>Lorem ipsum dolor sit</p>
              <div style={{ display: "flex" }}>
                <AiFillStar style={{ color: "#FAE301" }}></AiFillStar>
                <AiFillStar style={{ color: "#FAE301" }}></AiFillStar>
                <AiFillStar style={{ color: "#FAE301" }}></AiFillStar>
                <AiFillStar style={{ color: "#FAE301" }}></AiFillStar>
                <AiFillStar style={{ color: "#DBDBDD" }}></AiFillStar>
              </div>

              <span>980,000</span>
              <sup>LBP</sup>
            </div>
            <div>
              <img
                src="https://image.made-in-china.com/155f0j00NfPYToaMambz/Egg-Waffle-Maker-Single-Cooking-Plate-Electrical-Machine.webp"
                alt="img"
              ></img>
              <p>Lorem ipsum dolor sit</p>

              <div style={{ display: "flex" }}>
                <AiFillStar style={{ color: "#FAE301" }}></AiFillStar>
                <AiFillStar style={{ color: "#FAE301" }}></AiFillStar>
                <AiFillStar style={{ color: "#FAE301" }}></AiFillStar>
                <AiFillStar style={{ color: "#FAE301" }}></AiFillStar>
                <AiFillStar style={{ color: "#DBDBDD" }}></AiFillStar>
              </div>

              <span>980,000</span>
              <sup>LBP</sup>
            </div>
            <div>
              <img
                src="https://m.media-amazon.com/images/I/51UIFgQoHvL._AC_SY450_.jpg"
                alt="img"
              ></img>
              <p>Lorem ipsum dolor sit</p>

              <div style={{ display: "flex" }}>
                <AiFillStar style={{ color: "#FAE301" }}></AiFillStar>
                <AiFillStar style={{ color: "#FAE301" }}></AiFillStar>
                <AiFillStar style={{ color: "#FAE301" }}></AiFillStar>
                <AiFillStar style={{ color: "#FAE301" }}></AiFillStar>
                <AiFillStar style={{ color: "#DBDBDD" }}></AiFillStar>
              </div>

              <span>980,000</span>
              <sup>LBP</sup>
            </div>
            <div>
              <img
                src="https://ae01.alicdn.com/kf/HTB1bdx.ejgy_uJjSZR0q6yK5pXaM/-.jpg_Q90.jpg_.webp"
                alt="img"
              ></img>
              <p>Lorem ipsum dolor sit</p>

              <div style={{ display: "flex" }}>
                <AiFillStar style={{ color: "#FAE301" }}></AiFillStar>
                <AiFillStar style={{ color: "#FAE301" }}></AiFillStar>
                <AiFillStar style={{ color: "#FAE301" }}></AiFillStar>
                <AiFillStar style={{ color: "#FAE301" }}></AiFillStar>
                <AiFillStar style={{ color: "#DBDBDD" }}></AiFillStar>
              </div>

              <span>980,000</span>
              <sup>LBP</sup>
            </div>
            <div>
              <img
                src="https://m.media-amazon.com/images/I/81fjy4IFntL._AC_SY450_.jpg"
                alt="img"
              ></img>
              <p>Lorem ipsum dolor sit</p>

              <div style={{ display: "flex" }}>
                <AiFillStar style={{ color: "#FAE301" }}></AiFillStar>
                <AiFillStar style={{ color: "#FAE301" }}></AiFillStar>
                <AiFillStar style={{ color: "#FAE301" }}></AiFillStar>
                <AiFillStar style={{ color: "#FAE301" }}></AiFillStar>
                <AiFillStar style={{ color: "#DBDBDD" }}></AiFillStar>
              </div>

              <span>980,000</span>
              <sup>LBP</sup>
            </div>
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Gas_stove_%281%29.jpg/220px-Gas_stove_%281%29.jpg"
                alt="img"
              ></img>
              <p>Lorem ipsum dolor sit</p>

              <div style={{ display: "flex" }}>
                <AiFillStar style={{ color: "#FAE301" }}></AiFillStar>
                <AiFillStar style={{ color: "#FAE301" }}></AiFillStar>
                <AiFillStar style={{ color: "#FAE301" }}></AiFillStar>
                <AiFillStar style={{ color: "#FAE301" }}></AiFillStar>
                <AiFillStar style={{ color: "#DBDBDD" }}></AiFillStar>
              </div>

              <span>980,000</span>
              <sup>LBP</sup>
            </div>
            <div>
              <img
                src="https://www.eromman.com/images/thumbnails/590/590/detailed/194/1_53dn-9n.jpg.jpg"
                alt="img"
              ></img>
              <p>Lorem ipsum dolor sit</p>

              <div style={{ display: "flex" }}>
                <AiFillStar style={{ color: "#FAE301" }}></AiFillStar>
                <AiFillStar style={{ color: "#FAE301" }}></AiFillStar>
                <AiFillStar style={{ color: "#FAE301" }}></AiFillStar>
                <AiFillStar style={{ color: "#FAE301" }}></AiFillStar>
                <AiFillStar style={{ color: "#DBDBDD" }}></AiFillStar>
              </div>

              <span>980,000</span>
              <sup>LBP</sup>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
