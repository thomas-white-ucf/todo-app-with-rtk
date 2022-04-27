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
