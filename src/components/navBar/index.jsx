import React, { useState } from "react";
import { FaBars, FaReact } from "react-icons/fa";
import data from "./data.json";
import { HiX } from "react-icons/hi";
import { TbBrandRevolut } from "react-icons/tb";
import { Link, NavLink } from "react-router-dom";
import "./style.scss";

const Navbar = () => {

  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  return (
    <nav>
      <Link to={"/"} className="logo">
        <TbBrandRevolut size={40} />
        {/* <FaReact size={20} /> */}
      </Link>
      <div className="nav-icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      <ul className={toggleIcon ? "open" : ""}>
        {data.map((item, key) => (
          <li key={key}>
            <NavLink to={item.to}>{item.label}</NavLink>
          </li>
        ))}
      </ul>
      {/* <div className="nav-icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div> */}
    </nav>
  );
};

export default Navbar;
