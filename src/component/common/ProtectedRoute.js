
import React from "react";
import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({ component: Component, ...rest}) => {
  return (
    <Route
    {...rest}
      render={(props) => {
       
        let token = localStorage.getItem('jwttoken')
        console.log(token);
        if (token) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};
