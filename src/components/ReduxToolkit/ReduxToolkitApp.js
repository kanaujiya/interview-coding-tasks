import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import TodoPage from "./pages/TodoPage";

const ReduxToolkitApp = () => {
  return (
    <>
      <Provider store={store}>
        <TodoPage />
      </Provider>
    </>
  );
};

export default ReduxToolkitApp;
