import React from "react";

const Navpills = props =>
  <ul className="nav nav-tabs">
    <li onClick={() => props.handlePageChange("Home")}
        nameClass={props.currentPage === "Home" ? "active" : ""}>
      <a>Home</a>
    </li>
    <li onClick={() => props.handlePageChange("About")}
        nameClass={props.currentPage === "About" ? "active" : ""}>
      <a>About</a>
    </li>
    <li onClick={() => props.handlePageChange("Blog")}
        nameClass={props.currentPage === "Blog" ? "active" : ""}>
      <a>Blog</a>
    </li>
    <li onClick={() => props.handlePageChange("Contact")}
        nameClass={props.currentPage === "Contact" ? "active" : ""}>
      <a>Contact</a>
    </li>
  </ul>;

export default Navpills;
