import { useState } from "react";

function AddTodo(props) {
  const [todoItem, setTodoItem] = useState({
    title: "",
  });
  const { addItem } = props;
  const onButtonClick = () => {
    addItem(todoItem);
    setTodoItem({
      title: "",
    });
  };
  const enter = (e) => {
    if (e.key == "Enter") {
      onButtonClick();
      return;
    }
  };

  return (
    <div className="AddTodo">
      <input
        type="text"
        placeholder="add your new Todo"
        value={todoItem.title}
        onChange={(e) => setTodoItem({ title: e.target.value })}
        onKeyPress={enter}
      />
      <button onClick={onButtonClick}>Add</button>
    </div>
  );
}

export default AddTodo;
