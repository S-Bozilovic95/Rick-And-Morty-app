import React, { createContext } from "react";

type InitialType = {};

const initialState = {};

export const Context = createContext<InitialType>(initialState);

type ContextRmProviderProps = {
  children: React.ReactNode;
};

export const ContextRmProvider: React.FC<ContextRmProviderProps> = ({
  children,
}) => {
  return <Context.Provider value={{}}>{children}</Context.Provider>;
};
