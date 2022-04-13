import "./body.css";
import Carousel from "./Carousel";
import Carousel1 from "./Carousel1";
import Details from "./Deatils";
import Grid from "./Grid";
import Grid1 from "./Grid1";
import Carousel2 from "./Carousel2";
import Logo from "./Logo";

export default function body() {
  return (
    <div>
      <div className="para container">
        <h1>Nothing is more than the safety of our employees and customers.</h1>
        <p>
          We're here to help you get what you need during this critical time.
          You can pick up your order at your local store<br></br> and we'll
          bring it to your car, or order on AbedTahan.com and have it delivered
          to your home
        </p>
        <span className="span">Learn more here </span>
        <b>|</b>
        <span className="span"> Updates from Abed Tahan</span>
      </div>
      <div className="Parent container">
        <div className="child1">
          <img
            src="https://cdn.pixabay.com/photo/2014/12/08/14/23/pocket-watch-560937__480.jpg"
            alt="img"
          ></img>
        </div>
        <div className="child2">
          <h1>Today's Popular Picks</h1>
          <p>See what's catching other people's attentions</p>
          <br></br>
          <Carousel></Carousel>
        </div>
      </div>
      <Details className="Details"></Details>
      <Carousel1></Carousel1>
      <Grid></Grid>
      <h1 style={{ marginLeft: "10%" }}>People Alse Viewed</h1>
      <Carousel1></Carousel1>
      <h1 style={{ marginLeft: "10%" }}>Most viewed items</h1>
      <Carousel1></Carousel1>
      <Grid1></Grid1>
      <Carousel2></Carousel2>
      <h1 style={{ marginLeft: "10%" }}>Featured Products</h1>
      <Carousel1></Carousel1>
      <Logo></Logo>
    </div>
  );
}
