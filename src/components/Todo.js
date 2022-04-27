// import React from "react";

// const Todo = (props) => {
//   const { title } = props;

//   return (
//     <li>
//       {title}
//       <input type="checkbox" />
//     </li>
//   );
// };

// export default Todo;

import React from 'react'
import { useDispatch } from 'react-redux';
import { completeTodo } from '../redux/reducers/todo/actions'

const Todo = (props) => {
    const { id, title, completed } = props.todo;
    const dispatch = useDispatch();

    return (
        <li>
            <span className={completed ? 'todo-completed' : ''}>
                {title}
            </span>
            <input type='checkbox'
                value={completed}
                onClick={() => dispatch(completeTodo(id))}/>
        </li>
    )
}

export default Todo;