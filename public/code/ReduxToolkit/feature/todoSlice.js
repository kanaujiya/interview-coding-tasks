import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: nanoid(), task: "Hello World!" }],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodos: (state, action) => {
      const list = { id: nanoid(), task: action.payload };
      state.todos.push(list);
    },
    removeTodos: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { id, task } = action.payload;
      const todoToUpdate = state.todos.find((todo) => todo.id === id);

      if (todoToUpdate) {
        console.log(todoToUpdate.task, action.payload);
        todoToUpdate.task = task;
      }
    },
  },
});

export const { addTodos, removeTodos, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
