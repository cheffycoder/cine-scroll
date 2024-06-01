import React, { Dispatch } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { Text } from "@base";
import { bemClass } from "@utils";
import SearchInput from "@components/search";
import { tMovie } from "@components/year-section";

import search from "./../../images/search.svg";
import logo from "./../../images/cine-scroll-logo.png";

import "./style.scss";

const blk = "header";
const Header = ({
  setSearchData,
  setSearching
}: {
  setSearchData: Dispatch<React.SetStateAction<Array<tMovie>>>;
  setSearching: Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { pathname } = useLocation();
  const isSearchPage = pathname.includes("/search");

  return (
    <header className={blk}>
      <div className={bemClass([blk, "company"])}>
        <NavLink to="/" className={bemClass([blk, "company-logo"])}>
          <img src={logo} alt="logo" width="auto" height="100%" />
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
        <SearchInput
          className={bemClass([blk, "search-input"])}
          placeholder="Search"
          setSearchData={setSearchData}
          setSearching={setSearching}
        />
      ) : (
        <NavLink to="/search" className={bemClass([blk, "search"])}>
          <img src={search} alt="search" height="100%" width="auto" />
        </NavLink>
      )}
    </header>
  );
};

export default Header;
