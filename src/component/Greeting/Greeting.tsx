import React, { FC } from "react";
import { IGreetingProps } from "./Interface/props/GreetingProps";

/**
 * Sample component for greeting
 * @param props
 * @constructor
 */
const Greeting: FC<IGreetingProps> = props => {
  // destructure all props here
  const { name } = props;

  return <div>Hello {name}</div>;
};

export default Greeting;
