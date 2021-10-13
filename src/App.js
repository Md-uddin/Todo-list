import "./App.css";
import Header from "./my-components/Header";
import { Todos } from "./my-components/Todos";
import { Footer } from "./my-components/Footer";
import { About } from "./my-components/About";
import React, { useEffect, useState } from "react";
import { AddTodo } from "./my-components/AddTodo";
import {
  BrowserRouter as Router,
  Switch,
  Route, 
} from "react-router-dom";
function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
    console.log(initTodo + 'this is init todo');
  }
  // delete function
  const onDelete = (todo) => {
    console.log("deleted todo", todo);
    // deleting this way in react doesn't work
    // let index = todos.indexOf(todo);
    // todos.splice(index,1);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.getItem("todos");
  };
  //  adding todo function
  const addTodo = (title, desc) => {
    console.log("added in todo list", title, desc);
    var sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos.length + 1;
    }
    const mytodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    console.log(mytodo);
    setTodos([...todos, mytodo]);

    console.log(localStorage.getItem("todos"));
  };
        // adding to dos saved to page 
  const [todos, setTodos] = useState(initTodo);
  console.log(todos + ' thsi is todos')

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <>
      <Router>
        <Header title="My Todos list" searchBar={true} />
        {/* when slash render this  */}
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                 <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
                </>
            )
          }}>
          {/* when /about render this  */}
            </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>

        <Footer />
        </Router>
    </>
  );
}

export default App;
