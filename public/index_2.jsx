import React, { useState } from "react";
import { FaBars, FaReact } from "react-icons/fa";
import { TbBrandRevolut } from "react-icons/tb";
import { HiX } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import data from "./data.json";
import "./style.scss";

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar_container">
          <Link to={"/"} className="navbar_container_logo">
            <TbBrandRevolut size={40} />
            {/* <FaReact size={20} /> */}
          </Link>
        </div>
        <ul className={`navbar_container_menu ${toggleIcon ? "active" : ""}`}>
          {data.map((item, key) => (
            <li key={key} className="navbar_container_menu_item ">
              <NavLink className="navbar_container_menu_item_links" to={item.to}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="nav-icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </div>
  );
};

export default Navba1r;
