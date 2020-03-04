import React, { FC } from "react";
import { Route, Redirect, RouteComponentProps } from "react-router-dom";
import { IExtendedRouteProps } from "../interface/Routes";
import { isLogin } from "../../common/utilities/auth/auth";

/**
 * Private route need auth before enter into this route else redirected on login
 * @param Component
 * @param rest
 * @constructor
 */
const PrivateRoute: FC<IExtendedRouteProps> = ({
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props: RouteComponentProps) =>
      isLogin() ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

export default PrivateRoute;
