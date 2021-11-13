import React from "react";
import ContentLoader from "react-content-loader";

function LoadingBlock() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="130" cy="130" r="130" />
      <rect x="0" y="276" rx="6" ry="6" width="280" height="26" />
      <rect x="0" y="315" rx="6" ry="6" width="280" height="84" />
      <rect x="0" y="420" rx="6" ry="6" width="90" height="27" />
      <rect x="125" y="409" rx="25" ry="25" width="151" height="44" />
    </ContentLoader>
  );
}

export default LoadingBlock;
