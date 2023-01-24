import React from "react";
import logo from "../../assets/images/logo.png.webp";
import { Link, NavLink } from "react-router-dom";
import { Menu, Dropdown } from "antd";
import "./index.scss";
const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <div className="logo">
            <Link to={"/"}><img src={logo} alt="" /></Link>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <Dropdown
                  overlay={
                    <Menu>
                      <Menu.Item key="0">Shop Category</Menu.Item>
                      <Menu.Item key="1">Product Details</Menu.Item>
                      <Menu.Item key="2">Product CheckOut</Menu.Item>
                      <Menu.Item key="3">Confirmation</Menu.Item>
                      <Menu.Item key="4">Shopping Card</Menu.Item>
                    </Menu>
                  }
                  trigger={["hover"]}
                >
                  <NavLink
                    to={"/shop"}
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    Shop
                  </NavLink>
                </Dropdown>
              </li>
              <li>
                <Dropdown
                  overlay={
                    <Menu>
                      <Menu.Item key="0">Blog</Menu.Item>
                      <Menu.Item key="1">Blog Detail</Menu.Item>
                    </Menu>
                  }
                  trigger={["hover"]}
                >
                  <NavLink
                    to={"/blog"}
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    Blog
                  </NavLink>
                </Dropdown>
              </li>
              <li>
                <Dropdown
                  overlay={
                    <Menu>
                      <Menu.Item key="0">Login</Menu.Item>
                      <Menu.Item key="1">Register</Menu.Item>
                      <Menu.Item key="1">Tracking</Menu.Item>
                    </Menu>
                  }
                  trigger={["hover"]}
                >
                  <NavLink
                    to={"/pages"}
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    Pages
                  </NavLink>
                </Dropdown>
              </li>
              <li>
                <NavLink to={"/contact"}>Contact</NavLink>
              </li>
              <li>
                <NavLink to={"/add-product"}>Add Product</NavLink>
              </li>
              <li>
                <NavLink to={"/wishlist"}>Wishlist</NavLink>
              </li>
            </ul>
          </nav>
          <div className="right">
            <div className="icons">
              <i className="fa-solid fa-magnifying-glass"></i>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
            <div className="btn">
              <button>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
