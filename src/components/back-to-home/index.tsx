import React from "react";
import { NavLink } from "react-router-dom";

import { Text } from "@base";
import { bemClass } from "@utils";

import back from "./../../images/back.svg";
import "./style.scss";

const blk = "back-to-home";
const BackToHome = () => {
  return (
    <div className={blk}>
      <NavLink to="/" className={bemClass([blk, "image"])}>
        <img
          src={back}
          alt="Go to home page"
          height="100%"
          width="auto"
        />
      </NavLink>
      <Text
        tag="nav"
        fontWeight="semi-bold"
        className={bemClass([blk, "label"])}
      >
        Return to Home page
      </Text>
    </div>
  );
};

export default BackToHome;
