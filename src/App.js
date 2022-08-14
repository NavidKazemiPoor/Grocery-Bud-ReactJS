import React, { useState, useEffect } from "react";

import Item from "./components/Items";
import Alert from "./components/Alert";
import { useGlobalContext } from "./context";

const App = () => {
  const { list, addItem, isEditing, editID, editFunc } = useGlobalContext();
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isEditing) {
      if (text) {
        addItem(text);
        setText("");
      }
    } else {
      editFunc(text);
      setText("");
    }
  };

  useEffect(() => {
    if (isEditing) {
      let { name } = list.find((item) => {
        return item.id === editID;
      });
      setText(name);
    }
  }, [isEditing, editID]);
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <Alert />
        <h2>Grocery Bud</h2>
        <div className="form-control">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="e.g. egg"
          />
          <button type="submit">{isEditing ? "Edit" : "Submit"}</button>
        </div>
      </form>
      {list.map((item, index) => {
        if (item.name) {
          return <Item key={index} {...item} />;
        }
      })}
    </div>
  );
};

export default App;
