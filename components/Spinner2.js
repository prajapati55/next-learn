import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const CardSkleton = () => (
  <SkeletonTheme color="#ab0613" highlightColor="#437223">
    <div style={{ display: "flex", padding: "20px" }}>
      <Skeleton circle={true} height={50} width={50} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          width: "100%",
          marginLeft: "20px",
        }}
      >
        <Skeleton />
        <Skeleton width="70%" />
        <Skeleton width="50%" />
      </div>
    </div>
  </SkeletonTheme>
);

export default CardSkleton;
