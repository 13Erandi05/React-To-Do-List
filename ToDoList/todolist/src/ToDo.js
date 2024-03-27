import React from "react";
import { useParams } from "react-router-dom";

const Todo = () => {
  //get a variable from url parameter
  const { id } = useParams();
  return <p>{`This is the TODO component and the Todo IS is ${id}`}</p>;
};

export default Todo;
