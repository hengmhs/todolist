import { useContext } from "react";

// Styling
import "../App.css";

// Context
import { DarkModeContext } from "../Context/DarkModeProvider";

const Item = ({ itemInfo, index, handleCheck }) => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? `text-dark` : `text-light`}>
      {index}. {itemInfo.content} -{" "}
      <input
        type="checkbox"
        checked={itemInfo.isCompleted}
        onChange={handleCheck}
      />
    </div>
  );
};

export default Item;
