// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import TodoContainer from "./components/TodoContainer";

// ReactDOM.render(
//   <React.StrictMode>
//     <TodoContainer />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// !title- "You dont need react-redux anymore"
//! https://blog.devgenius.io/you-dont-need-react-redux-anymore-7e3e1bc8e370

//! - followed but then changed how he created store, finished similarly

import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import TodoContainer from "./components/TodoContainer";
import { Provider } from "react-redux";
import store from "./redux/store";

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <TodoContainer />
    </React.StrictMode>
  </Provider>
);
