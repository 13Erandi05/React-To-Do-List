import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

const Todo = () => {
  //get a variable from url parameter
  const { id } = useParams();
  const [todoDetails, setTodoDetails] = useState();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => {
        const responseTodos = res.data;
        setTodoDetails(responseTodos);
      });
  }, []);

  const { id: todoId, userId, title, completed } = todoDetails || {};
  return (
    <div>
      {todoDetails ? (
        <div>
          <h1>{`Todo id: ${todoId}`}</h1>
          <h4>{`Todo User Id: ${userId}`}</h4>
          <h3>{`Todo Title: ${title}`}</h3>
          <h4>{`Todo completed: ${completed}`}</h4>
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default Todo;
