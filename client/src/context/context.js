import React, { useState, useEffect } from "react";

const GithubContext = React.createContext();
//Provider,Consumer - GithubContext.Provider

const GithubProvider = ({ children }) => {
  return (
    <GithubContext.Provider value="fun">{children}</GithubContext.Provider>
  );
};
export { GithubProvider, GithubContext };
