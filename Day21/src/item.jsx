import React, { useState } from "react";
import "./index.css";

const Item = ({ title, calorie, setItems, items, index, item, handleEdit}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState("");
  const [newCalorie, setNewCalorie] = useState("");

  return (
    <div className="card">
      {isEdit ? (
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            value={newCalorie}
            onChange={(e) => setNewCalorie(e.target.value)}
          />
          <button className="done" onClick={()=>{setIsEdit((e) => !e);
          handleEdit(title, calorie, index);
          }}>Done</button>
        </div>
      ) : (
        <div>
          <h2>{title}</h2>
          <h4>you have consumed {calorie} calories</h4>
          <button className="delete"
            onClick={() => {
              console.log("delete =", item);
              const newItems = items.filter((el, i) => i != index);
              setItems(newItems);
            }}
          >
            Delete
          </button>
          <button className="edit"
            onClick={() => {
              console.log("edit =", item);
              setIsEdit((e) => !e);
            }}
          >
            edit
          </button>
        </div>
      )}
    </div>
  );
};

export default Item;
