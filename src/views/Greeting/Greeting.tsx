import React, { FC } from "react";
import Greeting from "../../component/Greeting/Greeting";

/**
 * Greeting page load when match '/greeting' route
 * @constructor
 */
const GreetingPage: FC = () => {
  return <Greeting name="LoopNix" />;
};

export default GreetingPage;
