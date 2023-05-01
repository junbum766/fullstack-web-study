import { useState, useEffect } from "react";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";
import Calendar from "./components/Calendar";
import axios from "axios";
import "./styles/all.scss";
import {API_BASE_URL} from './app-config'
function App() {
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    console.log("마운트 완료!");
    const getTodos = async () => {
      const res = await axios.get(API_BASE_URL + "/api/todos");
      setTodoItems(res.data);
    };
    getTodos();
  }, []);

  const addItem = async (newItem) => {
    newItem.id = todoItems.length + 1;
    newItem.done = false;
    setTodoItems([...todoItems, newItem]);
    const res = await axios.post(API_BASE_URL + "/api/todo", newItem);
    console.log(">>>", res.data);
  };

  const deleteItem = async (targetItem) => {
    const newTodoItems = todoItems.filter((el) => {
      return el.id !== targetItem.id;
    });
    setTodoItems(newTodoItems);

    await axios.delete(API_BASE_URL + `/api/todo/${targetItem.id}`);
  };

  const editItem = async (targetItem) => {
    await axios.patch(
      API_BASE_URL + `/api/todo/${targetItem.id}`,
      targetItem
    );
  };

  return (
    <div className="App">
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
    </div>
  );
}

export default App;