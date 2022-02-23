import TodoList from "./TodoList";
import TodoDate from "./TodoDate";
import "./App.css";

const Todo = () => {
  return (
    <>
      <div className="container">
        <TodoDate />
        <div>
          <TodoList />
          <div>
            <button className="Todo-btn">+</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Todo;
