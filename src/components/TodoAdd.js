// import React, { useState } from "react";

// const TodoAdd = () => {
//   const [todo, setTodo] = useState("");
//   const onAddBtnClick = () => {
//     if (!todo) return;

//     // add logic later;
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Start typing..."
//         value={todo}
//         onChange={(e) => setTodo(e.target.value)}
//       />
//       <button onClick={onAddBtnClick}>Add Todo</button>
//     </div>
//   );
// };

// export default TodoAdd;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/reducers/todo/actions";

const TodoAdd = () => {
  //
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");

  const onAddBtnClick = () => {
    if (!todo) return;

    dispatch(addTodo(todo));
    setTodo("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Start typing..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={onAddBtnClick}>Add Todo</button>
    </div>
  );
};

export default TodoAdd;
