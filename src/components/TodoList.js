// import React from "react";
// import Todo from "./Todo";

// const TodoList = () => {
//   return (
//     <ul className="todo-list">
//       <Todo title="Todo 1" />
//       <Todo title="Todo 2" />
//       <Todo title="Todo 3" />
//     </ul>
//   );
// };

// export default TodoList;

import React from "react";
import Todo from "./Todo";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todo.todos);

  return (
    <ul className="todo-list">
      {todos && todos.length > 0
        ? todos.map((todo) => <Todo key={todo.id} todo={todo} />)
        : "Empty todo list..."}
    </ul>
  );
};

export default TodoList;
