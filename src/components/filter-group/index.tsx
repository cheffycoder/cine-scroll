import React, { Dispatch, SetStateAction } from "react";

import { Text } from "@base";
import { bemClass } from "@utils";

import right from "./../../images/right.svg"

import "./style.scss";

type tFilter = {
  id: number;
  name: string;
};

type filterGroupProps = {
  filters: Array<tFilter>;
  appliedFilter?: number;
  setAppliedFilter: Dispatch<SetStateAction<number | undefined>>
};

const blk = "filter-group";
const FilterGroup = ({ filters, appliedFilter, setAppliedFilter }: filterGroupProps) => {

  const onFilterClick = (selectedFilter: number) => {
    setAppliedFilter(selectedFilter);
  };

  return (
    <div className={blk}>
      <Text fontWeight="bold" tag="p">Genres:</Text>
      <div className={bemClass([blk, 'container'])}>
        {filters.map(({ id, name }) => (
          <div
            key={id}
            onClick={() => onFilterClick(id)}
            className={bemClass([blk, "chip", { ["selected"]: appliedFilter === id }])}
          >
            <Text
              tag="p"
              fontWeight="bold"
              typography="s"
              className={bemClass([blk, "label", { ["selected"]: appliedFilter === id }])}
            >
              {name}
            </Text>
          </div>
        ))}
      </div>
        
      <div className={bemClass([blk, "right-arrow"])}>
        <img
          src={right}
          alt="Go to home page"
          height="100%"
          width="auto"
        />
      </div>
    </div>
  );
};

export default FilterGroup;
