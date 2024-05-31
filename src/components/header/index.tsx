import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import { bemClass } from "@utils";
import { Text } from "@base";
import SearchInput from "@components/search";

import logo from "./../../images/cine-scroll-logo.png";
import search from "./../../images/search.svg";

import "./style.scss";

const blk = "header";
const Header = () => {
  const { pathname } = useLocation();
  const isSearchPage = pathname.includes("/search")

  return (
    <header className={blk}>
      <div className={bemClass([blk, "company"])}>
        <NavLink to="/" className={bemClass([blk, "company-logo"])}>
          <img
            src={logo}
            alt="logo"
            width="auto"
            height="100%"
          />
        </NavLink>
        <Text
          typography="xxxl"
          tag="label"
          className={bemClass([blk, "company-label"])}
        >
          Cine Scroll
        </Text>
      </div>
      {isSearchPage ? (
        <SearchInput className={bemClass([blk, 'search-input'])} placeholder="Search"/>
      ) : (
        <NavLink to="/search" className={bemClass([blk, "search"])}>
          <img src={search} alt="search" height="100%" width="auto" />
        </NavLink>
      )}
    </header>
  );
};

export default Header;
