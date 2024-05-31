import React from "react";

import { bemClass } from "@utils";
import { actionContainerProps } from "@components/actions-container";

import "./style.scss";

interface pageContainerProps extends actionContainerProps {
  fluid?: boolean;
}

const blk = "page-container";

const Container = ({ children, fluid, className }: pageContainerProps) => (
  <div className={bemClass([blk, { fluid }, className])}>{children}</div>
);

export default Container;
