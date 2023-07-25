"use client";
import React, { createContext, useReducer } from "react";
import { FilterReducer } from "@/reducer/filter";

interface State {
  make: string;
  model: string;
  year: string;
  fuel: string;
  limit: string;
}

interface FilterAction {
  type: string;
  payload: string[];
}

const INITIAL_STATE: State = {
  make: "",
  model: "",
  year: "2022",
  fuel: "",
  limit: "10",
};

const FilterContext = createContext<{
  state: State;
  filterDispatch: React.Dispatch<FilterAction>;
}>({ state: INITIAL_STATE, filterDispatch: () => {} });

interface ProviderProps {
  children: React.ReactNode;
}

const FilterProvider = ({ children }: ProviderProps) => {
  const [state, filterDispatch] = useReducer(FilterReducer, INITIAL_STATE);

  return (
    <FilterContext.Provider value={{ state, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export { FilterContext, FilterProvider };
