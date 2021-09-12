import { createStore, combineReducers } from "redux";
// import { groupReducer } from "../Reducers/GroupReducer";
import { empReducer } from "../Reducers/EmpDetailsReducer";

export const ConfigureStore=()=>{
    const store= createStore(
        combineReducers({ empReducer }),
        window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}
export default ConfigureStore;
