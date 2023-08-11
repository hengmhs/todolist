import { useContext } from "react";

// Styling
import "../App.css";

// Context
import { DarkModeContext } from "../Context/DarkModeProvider";

const Item = ({ itemInfo, index }) => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? `text-dark` : `text-light`}>
      {index}. {itemInfo.content} -{" "}
      {itemInfo.completed ? "Completed" : "Not Completed"}
    </div>
  );
};

export default Item;
