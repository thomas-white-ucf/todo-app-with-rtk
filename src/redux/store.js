import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

export default configureStore({ reducer: rootReducer });

// import { createStore } from "redux";
// export default createStore(rootReducer);
