import { useState } from "react";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";

function App() {
  const [todoItems, setTodoItems] = useState([
    {
      id: 1,
      title: "점저가",
      done: false,
    },
    {
      id: 2,
      title: "공부하기",
      done: false,
    },
    {
      id: 3,
      title: "밥먹기",
      done: true,
    },
  ]);
  const addItem = (newItem) => {
    newItem.id = todoItems.length + 1;
    newItem.done = false;
    setTodoItems([...todoItems, newItem]);
  };
  const deleteItem = (targetItem) => {
    const newTodoItems = todoItems.filter((el) => {
      return el.id !== targetItem.id;
    });
    setTodoItems(newTodoItems);
  };
  const editItem = (targetItem) => {
    const newTodoItems = todoItems.map((el) => {
      if (el.id === targetItem.id) {
        el = {
          id: el.id,
          title: el.title,
          done: !el.done,
        };
      }
      return el;
    });
    setTodoItems(newTodoItems);
  };
  return (
    <div className="App">
      <AddTodo addItem={addItem} />
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
  );
}

export default App;
