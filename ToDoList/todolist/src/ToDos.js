import React, { useEffect, useState } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

const Todos = () => {
  const [todos, setTodos] = useState();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/todos`).then((res) => {
      const responseTodos = res.data;
      setTodos(responseTodos);
    });
  }, []);

  console.log(todos);
  return (
    <>
      {todos ? (
        <div>
          {todos.map((todo) => {
            const { title, completed } = todo;
            return (
              <div>
                <h4> {title}</h4>
                <h5>{`Completed : ${completed}`}</h5>
              </div>
            );
          })}
        </div>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default Todos;
