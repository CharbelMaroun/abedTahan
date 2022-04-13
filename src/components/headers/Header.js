import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link" href="/#">
            Our Story
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">
            Gifts Cards
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">
            Deal of the day
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">
            Clearance
          </a>
        </li>
      </ul>
      <div className="max-w-8xl mx-auto px-2 sm:px-6 lg:px-8 header">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <img
                className="block lg:hidden h-8 w-auto"
                src="https://abedtahan.com/skin/frontend/alosupermarket/default/images/logo.png"
                alt="Workflow"
              />
              <img
                className="hidden lg:block h-8 w-auto"
                src="https://abedtahan.com/skin/frontend/alosupermarket/default/images/logo.png"
                alt="Workflow"
              />
            </div>
            <div className="input-group mb-3 input">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                aria-label="Username"
              ></input>
              <span
                style={{ backgroundColor: "white" }}
                className="input-group-text white"
              >
                <AiOutlineSearch style={{ color: "#0063a7" }}></AiOutlineSearch>
              </span>
            </div>
          </div>
          <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <AiOutlineUser></AiOutlineUser>
            <span style={{ margin: "10px" }}>Account</span>
            <span>|</span>
            <AiOutlineShoppingCart
              style={{ margin: "10px" }}
            ></AiOutlineShoppingCart>
            <span style={{ margin: "10px" }}>Cart</span>
          </div>
        </div>
      </div>
      <div className="header1">
        <form className="form">
          <select className="section1 items">
            <option value="fruit">Products</option>
            <option value="vegetable">Products1</option>
            <option value="meat">Products2</option>
          </select>
          <select className="items">
            <option value="fruit">Brands</option>
            <option value="vegetable">Brands1</option>
            <option value="meat">Brands2</option>
          </select>
          <select className="items">
            <option value="fruit">Deals</option>
            <option value="vegetable">Deals1</option>
            <option value="meat">Deals2</option>
          </select>
          <select className="items">
            <option value="fruit">Services</option>
            <option value="vegetable">Services1</option>
            <option value="meat">Services2</option>
          </select>

          <select className="section2 items">
            <option value="fruit">Recently Viewed</option>
            <option value="vegetable">Recently Viewed1</option>
            <option value="meat">Recently Viewed2</option>
          </select>
        </form>
      </div>
    </div>
  );
}
