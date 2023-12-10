import { useEffect, useReducer } from "react";
import { todoReducer } from "../toDoReducer";


const initialState = [
    /* {
      id: 1,
      task: "Finalizar el curso",
      done: false,
    }, */
  ];

  const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
  }

export const useTasks = () => {
    const [toDos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(toDos));
    
    }, [toDos])
    
    
    const handleTask = (task) => {
      const action = {
        type: '[ToDo] Add Task',
        payload: task
      }

      return dispatch(action);
    }

    const deleteTask = (id) => {
      return dispatch({
        type: '[ToDo] Remove Task',
        payload: id
      })
    }

    const toggleTask = (id) => {
      return dispatch({
        type: '[ToDo] Change Task',
        payload: id
      })
    }

    return{
        allTaks: toDos.length,
        pendingTasks: toDos.filter( todos => !todos.done).length,
        toDos,
        handleTask,
        deleteTask,
        toggleTask
    }
};