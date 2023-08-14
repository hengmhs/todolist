import { useState, useContext, useRef } from "react";

// Context
import { DarkModeContext } from "../Context/DarkModeProvider";

// Components
import Item from "./Item";

const ItemList = () => {
  const { darkMode } = useContext(DarkModeContext);
  const newItem = useRef("");
  const [items, setItems] = useState([
    { id: 1, content: "Laundry", isCompleted: false },
    { id: 2, content: "Revise JavaScript", isCompleted: true },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // used useRef here instead of useState because we don't need to
    // re-render every time the user enters an input
    const addedItem = {
      content: newItem.current.value,
      completed: false,
      id: items[items.length - 1].id + 1,
    };
    // use the functional syntax to prevent issues when
    // setting items multiple times
    // setItems([...items, addedItem]) could add the addedItems multiple times during renders
    setItems((items) => {
      return [...items, addedItem];
    });
    newItem.current.value = "";
  };

  const handleCheck = (e, id) => {
    const updatedItems = [...items];
    const selectedIndex = updatedItems.findIndex((item) => {
      return item.id === id;
    });
    updatedItems[selectedIndex].isCompleted =
      !updatedItems[selectedIndex].isCompleted;
    setItems(updatedItems);
  };

  return (
    <div>
      <h2 className={darkMode ? `title-dark` : `title-light`}>Items: </h2>
      {items.map((itemInfo, index) => {
        return (
          <Item
            itemInfo={itemInfo}
            index={index + 1}
            key={itemInfo.content + index}
            handleCheck={(e) => {
              handleCheck(e, itemInfo.id);
            }}
          />
        );
      })}
      <form>
        <label className={darkMode ? `text-dark` : `text-light`}>Item: </label>
        <input type="text" ref={newItem}></input>
        <button onClick={handleSubmit}>Create Item</button>
      </form>
    </div>
  );
};

export default ItemList;
