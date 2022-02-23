import TodoDescription from "./TodoItems";
import "./App.css";
import { Component } from "react";

const todoList = [
  {
    key: 1,
    description: "Buy new sweet Shirt",
    isCheck: true,
  },
  {
    key: 2,
    description: "Begin Promotional Phase",
    isCheck: true,
  },
  {
    key: 3,
    description: "Read and article",
    isCheck: false,
  },
  {
    key: 4,
    description: "Try not to fall a sleep",
    isCheck: false,
  },
  {
    key: 5,
    description: "Watch 'Sherlock'",
    isCheck: false,
  },
  {
    key: 6,
    description: "Begin QA for the product",
    isCheck: false,
  },
  {
    key: 7,
    description: "Go to a walk",
    isCheck: false,
  },
];

class TodoList extends Component {
  render() {
    return (
      <div className="flex-container">
        {todoList.map((item) => (
          <TodoDescription
            key={item.key}
            description={item.description}
            check={item.isCheck}
          />
        ))}
      </div>
    );
  }
}
export default TodoList;
