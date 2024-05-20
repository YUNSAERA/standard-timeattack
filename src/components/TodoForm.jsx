import React from "react";

function TodoForm({
  title,
  setTitle,
  content,
  setContent,
  clickAddTodoHandler,
}) {
  return(
    <div className="inputArea">
      <div className="titleText">제목 :</div>
      <input
      className="inputTitle"
      value={title}
      onChange = {(event)=> setTitle(event.target.value)}></input>
    </div>
  )
}