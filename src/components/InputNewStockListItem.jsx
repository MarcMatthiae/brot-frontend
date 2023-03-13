import React, { useState } from "react";

const InputNewStockListItem = ({ addTodoItem }) => {

  const [title, setTitle] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodoItem(title);
    setTitle('');
  };

    return (
      <>
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Eintrag hinzufügen..."
          value={title}
          onChange={handleChange}
          className="input-text"
        />
        <button className="input-submit">+</button>
      </form>
      <span className="submit-warning"></span>
    </>
    )
  };
  export default InputNewStockListItem;