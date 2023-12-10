export const todoReducer = (initialState = [], action) => {

    switch (action.type) {
        case '[ToDo] Add Task':
            
            return [...initialState, action.payload];
        case '[ToDo] Remove Task':
            
            return initialState.filter(todo => todo.id !== action.payload);

        case '[ToDo] Change Task':
            
            return initialState.map( task => {
                if (task.id === action.payload) {
                    return {
                        ...task,
                        done: !task.done
                    }
                }
                return task
            });
    
        default:
            return initialState;
    }
};