import React from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  // this is a custom component, so make sure you render props.children

  

  return <Context.Provider value="">{children}</Context.Provider>;
}

export { ContextProvider, Context };
