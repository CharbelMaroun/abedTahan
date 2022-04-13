import "./body.css";
import React, { Component } from "react";

export default class Grid extends Component {
  state = {
    items: [
      {
        img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        txt: "Title Name Here1",
        para: "Small Description about the product or the offer1",
        link: "https://www.google.com/",
        para1: "Shop the offer1",
      },
      {
        img: "https://image.shutterstock.com/image-photo/tv-flat-screen-lcd-plasma-260nw-314401364.jpg",
        txt: "Title Name Here2",
        para: "Small Description about the product or the offer2",
        link: "https://www.google.com/",
        para1: "Shop the offer2",
      },
      {
        img: "https://www.lifefitness.com/resource/image/528944/landscape_ratio4x3/400/300/919e1b9f2c3f19c73a2a5d69dbfa7cf5/bw/lifefitness-first-treadmill-tr9500hrcrop-0.jpg",
        txt: "Title Name Here3",
        para: "Small Description about the product or the offer3",
        link: "https://www.google.com/",
        para1: "Shop the offer3",
      },
      {
        img: "https://assets.epicurious.com/photos/609ab361178208b748fa6040/16:9/w_2560%2Cc_limit/Best-Espresso-Machines-28022019_VOG.jpg",
        txt: "Title Name Here4",
        para: "Small Description about the product or the offer4",
        link: "https://www.google.com/",
        para1: "Shop the offer4",
      },
      {
        img: "https://images.unsplash.com/photo-1613631883052-454579eb648f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FtZXJhc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        txt: "Title Name Here5",
        para: "Small Description about the product or the offer5",
        link: "https://www.google.com/",
        para1: "Shop the offer5",
      },
      {
        img: "https://st.depositphotos.com/1216711/3356/v/600/depositphotos_33569319-stock-illustration-the-empty-white-refrigerator-and.jpg",
        txt: "Title Name Here6",
        para: "Small Description about the product or the offer6",
        link: "https://www.google.com/",
        para1: "Shop the offer6",
      },
    ],
  };
  render() {
    const data = this.state.items;
    return (
      <div className="container grid grid-rows-2 grid-flow-col gap-3">
        {data.map((item) => {
          return (
            <div>
              <img src={item.img} alt="img"></img>
              <h1>{item.txt}</h1>
              <p>{item.para}</p>
              <a href={item.link}>{item.para1}</a>
            </div>
          );
        })}
      </div>
    );
  }
}
