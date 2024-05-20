import React, { useState } from "react";
import "./APP.css";
import TodoContainer from "components/TodoContainer";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [todos, setTodos] = useState([
    {
      id: Date.now(),
      title: "순공 시간 확인하기",
      const: "순공 시간 체크해서 공부해봅시다.",
      isDone: true,
    },
  ]);

  const clickAddTodoHandler = () => {
    if (title.trim() && content.trim()) {
      setTodos([...todos, { id: Date.now(), title, content, isDone: false }]);
      setTitle("");
      setContent("");
    }
  };

  const toggleCompletionHandler = (id) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
      )
    );
  };
  const clickDeleteHandler = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };
  return (
    <TodoContainer
      setTitle="My Todo List"
      siteSubTitle="React"
      todos={todos}
      title={title}
      setTitle={setTitle}
      content={content}
      clickaddTodoHandler={clickAddTodoHandler}
      toggleCompletionHandler={toggleCompletionHandler}
      clickDeleteHandler={clickDeleteHandler}
    />
  );
}

export default App;

// export default function App() {
//   return (
//     <>
//       <h1>투두리스트 타임어택</h1>
//     </>
//   );
// }
