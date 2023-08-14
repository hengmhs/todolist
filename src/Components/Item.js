import { useContext } from "react";

// Styling
import "../App.css";
import "./ItemList.css";

// Context
import { DarkModeContext } from "../Context/DarkModeProvider";

const Item = ({ itemInfo, index, handleCheck, handleDelete }) => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? `text-dark` : `text-light`}>
      {index}. {itemInfo.content} -{" "}
      <input
        type="checkbox"
        checked={itemInfo.isCompleted}
        onChange={handleCheck}
      />
      <span className="delete-btn" onClick={handleDelete}>
        🗑️
      </span>
    </div>
  );
};

export default Item;
