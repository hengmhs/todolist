import { useContext, useState } from "react";

// Styling
import "../../App.css";
import "./Item.css";

// Context
import { DarkModeContext } from "../../Context/DarkModeProvider";

const Item = ({ itemInfo, index, handleCheck, handleDelete, handleUpdate }) => {
  const { darkMode } = useContext(DarkModeContext);
  const [isEditable, setIsEditable] = useState(false);
  const [editInfo, setEditInfo] = useState(itemInfo.content);

  return (
    <div className={darkMode ? `text-dark` : `text-light`}>
      <input
        type="checkbox"
        checked={itemInfo.isCompleted}
        onChange={handleCheck}
      />
      <span>{index}. </span>
      {isEditable ? (
        <span>
          <input
            type="text"
            value={editInfo}
            onChange={(e) => {
              setEditInfo(e.target.value);
            }}
          />
          <button
            onClick={(e) => {
              handleUpdate(editInfo, itemInfo.id);
              setIsEditable(false);
            }}
          >
            Save
          </button>
        </span>
      ) : (
        <span>
          <span> {itemInfo.content}</span>
          <span> - </span>
          <span
            className="edit-btn"
            onClick={() => {
              setIsEditable(true);
            }}
          >
            ✏️
          </span>
        </span>
      )}
      <span className="delete-btn" onClick={handleDelete}>
        🗑️
      </span>
    </div>
  );
};

export default Item;
