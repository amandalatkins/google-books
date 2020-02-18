import React, { createContext, useReducer, useContext } from "react";

// boiler plate to set up context and them parse out Provider
const StoreContext = createContext();
const { Provider } = StoreContext;
// equiv to line above is:
// const Provider = StoreContext.Provider

const reducer = function(state, action) {
  switch (action.type) {
    case "one":
      return "Hello";
    case "loadSaved":
      return action.books;
    case "bookSearch":
      return action.results;
    default:
      return state;
  }
};

const StoreProvider = function({ value = [], ...props }) {
  // useReducer takes the reduer function and a default val, return array of two things which we are assigning to state and dispatch
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "one":
        return "Hello";
      case "loadSaved":
        return action.books;
      case "bookSearch":
        return action.results;
      default:
        return state;
    }
  }, []);

  return <Provider value={[state, dispatch]} {...props} />;
};

// more boilerplate
const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
