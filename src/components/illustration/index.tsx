import { Text } from "@base";
import { bemClass } from "@utils";
import React from "react";

import "./style.scss";

type tIllustrationProps = {
  path: string;
  alt: string;
  description?: string;
  containerClassName?: string;
};

const blk = "illustration";
const Illustration = ({
  path,
  alt,
  description,
  containerClassName,
}: tIllustrationProps) => {
  return (
    <div className={bemClass([blk, {}, containerClassName])}>
      <Text tag="p" className={bemClass([blk, 'description'])}>{description}</Text>
      <img src={path} height="auto" width="100%" alt={alt} />
    </div>
  );
};

export default Illustration;
