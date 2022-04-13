import "./body.css";
import React, { Component } from "react";

export default class Grid1 extends Component {
  state = {
    items: [
      {
        img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        txt: "Deals of the Day1",
        para: "Greact deals Every day1",
        link: "https://www.google.com/",
        para1: "Show ALL1 >",
      },
      {
        img: "https://assets.epicurious.com/photos/609ab361178208b748fa6040/16:9/w_2560%2Cc_limit/Best-Espresso-Machines-28022019_VOG.jpg",
        txt: "Deals of the Day2",
        para: "Greact deals Every day1",
        link: "https://www.google.com/",
        para1: "Show ALL2 >",
      },
      {
        img: "https://st.depositphotos.com/1216711/3356/v/600/depositphotos_33569319-stock-illustration-the-empty-white-refrigerator-and.jpg",
        txt: "Deals of the Day3",
        para: "Greact deals Every day1",
        link: "https://www.google.com/",
        para1: "Show ALL3 >",
      },
    ],
  };
  render() {
    const data = this.state.items;
    return (
      <div className="container grid grid-rows-1 grid-flow-col gap-3">
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
