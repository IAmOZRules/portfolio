import React from "react";
import ScrollToTop from "react-scroll-to-top";

import "./Footer.css";

export default function Footer(props) {
  return <div className="footer-div">
    <ScrollToTop smooth
      color={props.theme.name === "dark" ? "black" : "white"}
      style={{
        backgroundColor: `${props.theme.name === "dark" ? null : "black"}`,
        padding: '10px',
     }}
    />
  </div>;
}
