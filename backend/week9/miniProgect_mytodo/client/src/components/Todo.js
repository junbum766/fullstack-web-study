import { useState } from "react";

function Todo(props) {
  const { item, deleteItem, editItem } = props;
  const [todoItem, setTodoItem] = useState(item);
  const [readOnly, setReadOnly] = useState(true);

  const deleteButtonClick = () => {
    deleteItem(todoItem);
  };

  // title input 을 클릭 : readOnly state를 false로 변경
  const offReadOnlyMode = () => {
    setReadOnly(false);
  };
  const enterKeyEventHandler = (e) => {
    if (e.key == "Enter") {
      setReadOnly(!readOnly);
      editItem(todoItem);
    }
  };
  const editEventHandler = (e) => {
    const { title, ...rest } = todoItem;
    if (readOnly == false) {
      const item = {
        id: rest.id,
        title: e.target.value,
        done: rest.done,
      };
      setTodoItem(item);
    }
  };
  const checkBoxEventHandler = (e) => {
    const { done, ...rest } = todoItem;
    const item = {
      id: rest.id,
      title: rest.title,
      done: e.target.checked,
    };
    setTodoItem(item);
    editItem(item);
  };
  return (
    <div className="Todo">
      {!readOnly && <span>수정모드</span>}
      <input
        type="checkbox"
        id={`todo${item.id}`}
        name={`todo${item.id}`}
        value={`todo${item.id}`}
        defaultChecked={item.done}
        onChange={checkBoxEventHandler}
      />
      <input
        type="text"
        className="todoValue"
        value={todoItem.title}
        onClick={offReadOnlyMode}
        onKeyPress={enterKeyEventHandler}
        onChange={editEventHandler}
      ></input>
      <button onClick={deleteButtonClick}>DELETE</button>
    </div>
  );
}

export default Todo;
