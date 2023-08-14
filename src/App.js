import { useContext } from "react";

// Styling
import "./App.css";

// Components
import { DarkModeContext } from "./Context/DarkModeProvider";
import ItemList from "./Components/ItemList";

const App = () => {
  // TODO
  // 1. Add to do list items (useEffect, useState) [x]
  // 2. Remove to do list items
  // 3. Mark complete
  // 4. Dark mode (useContext) [x]
  // 5. Create a backend with user authentication
  // 6. Implement useRef for new item [x]
  // 7. Add localStorage

  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? `App App-bg-dark` : `App App-bg-light`}>
      <h1 className={darkMode ? `title-dark` : `title-light`}>To Do App</h1>
      <button onClick={toggleDarkMode}>Change Light Mode</button>
      <ItemList />
    </div>
  );
};

export default App;
