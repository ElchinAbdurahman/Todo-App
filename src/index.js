import React, { useContext, useReducer } from "react";
import ReactDOM from "react-dom";

import Store from "./context";
import reducer from "./reducer";

import { usePersistedContext, usePersistedReducer } from "./usePersist";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import Footer from "./components/Footer";

function App() {
  // create a global store to store the state
  const globalStore = usePersistedContext(useContext(Store), "state");

  // `todos` will be a state manager to manage state.
  const [state, dispatch] = usePersistedReducer(
    useReducer(reducer, globalStore),
    "state" // The localStorage key
  );

  return (
    // State.Provider passes the state and dispatcher to the down
    <Store.Provider value={{ state, dispatch }}>
      <Navbar/>
      <TodoForm />
      <TodoList />
      <Footer/>
    </Store.Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
