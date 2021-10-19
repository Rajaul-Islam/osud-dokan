import { useState } from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../Hook/useAuth";

function PrivateRoute({ children, ...rest }) {
   const {allContext}=useAuth()
   const {user}=allContext;
    return (
      <Route
        {...rest}
        render={({ location }) =>
          user?.displayName ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

  export default PrivateRoute;