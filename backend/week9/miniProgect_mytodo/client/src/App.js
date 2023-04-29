import { useState, useEffect } from "react";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";
import Calendar from "./components/Calendar";
import axios from "axios";
import "./styles/all.scss";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    console.log("마운트 완료!");
    const getTodos = async () => {
      const res = await axios.get("http://localhost:8000/api/todos");
      setTodoItems(res.data);
    };
    getTodos();
  }, []);

  const addItem = async (newItem) => {
    newItem.id = todoItems.length + 1;
    newItem.done = false;
    setTodoItems([...todoItems, newItem]);
    const res = await axios.post("http://localhost:8000/api/todo", newItem);
    console.log(">>>", res.data);
  };

  const deleteItem = async (targetItem) => {
    const newTodoItems = todoItems.filter((el) => {
      return el.id !== targetItem.id;
    });
    setTodoItems(newTodoItems);

    await axios.delete(`http://localhost:8000/api/todo/${targetItem.id}`);
  };

  const editItem = async (targetItem) => {
    await axios.patch(
      `http://localhost:8000/api/todo/${targetItem.id}`,
      targetItem
    );
  };

  return (
    <div className="App">
      {/* <header><h1>⭐s⭐⭐⭐⭐Todo⭐⭐⭐⭐⭐</h1></header> */}
      <main className="main">
        <Calendar />
        <AddTodo addItem={addItem} />
        <div className="TodoContainer">
          {todoItems.map((item) => {
            return (
              <Todo
                key={item.id}
                item={item}
                deleteItem={deleteItem}
                editItem={editItem}
              />
            );
          })}
        </div>
      </main>
      <footer>{/* <h1>⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐</h1> */}</footer>
    </div>
  );
}

export default App;
