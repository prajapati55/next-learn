import React from "react";
const liTag = ({ children, liClass }) => {
  return <li className={liClass}>{children}</li>;
};

export default liTag;
