import React, { FC } from "react";
import { Route, Redirect, RouteComponentProps } from "react-router-dom";
import { IExtendedRouteProps } from "../interface/Routes";
import { isLogin } from "../../common/utilities/auth/auth";

/**
 * Login route need not auth if already login redirected on mainRoute
 * @param Component
 * @param rest
 * @constructor
 */
const LoginRoute: FC<IExtendedRouteProps> = ({
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props: RouteComponentProps) =>
      !isLogin() ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

export default LoginRoute;
