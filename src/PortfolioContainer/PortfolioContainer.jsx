import React from "react";
import { TOTAL_SCREENS } from "./utilities/commonUtils.js";
console.log(TOTAL_SCREENS);
function PortfolioContainer() {
  const mapAllScreens = () => {
    return TOTAL_SCREENS.map((screen) => {
      return screen.component ? (
        <screen.component
          screenName={screen.screen_name}
          key={screen}
          id={screen.screen_name}
        />
      ) : (
        <div>{screen.screen_name}</div>
      );
    });
  };
  return <div className="portfolio-container">{mapAllScreens()}</div>;
}

export default PortfolioContainer;
