import React from "react";
import { Redirect, Route } from "react-router-dom";
import decode from "jwt-decode";

const ProtectedRoute = ({ component: Component, ...restProps }) => {
  const profile = JSON.parse(localStorage.getItem("profile"));
  const token = profile?.token;
  let decodedToken;
  if (token) {
    decodedToken = decode(token);
  }

  return (
    <Route
      {...restProps}
      render={(props) => {
        if (decodedToken && decodedToken.exp * 1000 > new Date().getTime()) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
