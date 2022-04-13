import "./body.css";
import { MdSecurity } from "react-icons/md";
import { FaExchangeAlt } from "react-icons/fa";
import { GrDeliver } from "react-icons/gr";
import { GiAchievement } from "react-icons/gi";

export default function Deatils() {
  return (
    <div className="columns">
      <div className="column">
        <MdSecurity size={70} className="icon"></MdSecurity>
        <div className="item">
          <h1>BUYER PROTECTION</h1>
          <p>Secure payment and data protection</p>
        </div>
      </div>
      <div className="column">
        <FaExchangeAlt size={70} className="icon"></FaExchangeAlt>
        <div>
          <h1>RETURN & EXCHANGE</h1>
          <p>Convenient free return within 7 days</p>
        </div>
      </div>
      <div className="column">
        <GrDeliver size={70} className="icon"></GrDeliver>
        <div>
          <h1>FREE DELIVERY</h1>
          <p>Free delivery for orders over 200$</p>
        </div>
      </div>
      <div className="column">
        <GiAchievement size={70} className="icon"></GiAchievement>
        <div>
          <h1>LATEST AND GREATEST TECH</h1>
        </div>
      </div>
    </div>
  );
}
