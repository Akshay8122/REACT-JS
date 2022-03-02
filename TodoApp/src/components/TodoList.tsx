import TodoDescription from "./TodoDescription";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";

const TodoList = (prop: { value: string }): JSX.Element => {
  const [submit, setSubmit] = useState<string[]>(() => {
    const d = new Date();
    const todoData = localStorage.getItem("submit");
    const newdate = "03/03/2022";
    // const newdate = d.toLocaleDateString();
    console.log(d);
    const setdate = localStorage.getItem("currdate");

    if (newdate !== setdate) {
      localStorage.removeItem("submit");
      // localStorage.removeItem("currdate");
    }
    if (todoData) {
      return JSON.parse(todoData);
    } else {
      return [];
    }
  });

  useEffect(() => {
    if (prop.value === "") {
      return null;
    }
    setSubmit((submit) => {
      return [...submit, prop.value];
    });
  }, [prop.value]);

  useEffect(() => {
    localStorage.setItem("submit", JSON.stringify(submit));
  }, [submit]);

console.log(submit);


  return (
    <div className="card">
      {submit.map((item: string) => (
        <TodoDescription description={item} key={item} id={uuidv4()} />
      ))}
    </div>
  );
};
export default TodoList;
