import { useContext } from "react";

// Styling
import "./App.css";

// Components
import { DarkModeContext } from "./Context/DarkModeProvider";
import ItemList from "./Components/ItemList/ItemList";

const App = () => {
  // TODO
  // 1. Create to do list items (useEffect, useState) [x]
  // 2. Update item [x]
  // 3. Remove to do list items [x]
  // 3a. Pop up box to confirm removal
  // 4. Mark complete [x]
  // 5. Dark mode (useContext) [x]
  // 6. Implement useRef for new item [x]
  // 7. Add localStorage [x]
  // 8. Create a backend with user authentication

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
