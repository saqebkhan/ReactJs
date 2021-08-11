import { createStore, combineReducer } from "redux";
import { groupReducer } from "../Reducer/groupReducer";

export const configreStore = () => {
  const store = createStore(
    combineReducer({
      groupReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
