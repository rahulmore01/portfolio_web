import React from "react";
import "./Navbar.scss";
import Logo from "../../../../public/assets/Logo.png";

const Navbar = () => {
  return (
    <>
      <div className="nav monu_ex_reg">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <ul className="nav_links">
          <li className="link">About</li>
          <li className="link">Works</li>
          <li className="link">Resourses</li>
          <li className="link">Blogs</li>
        </ul>
        <div className="nav_cta_main">Let's talk</div>
      </div>
    </>
  );
};

export default Navbar;
