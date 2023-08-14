import { useState, useEffect, useContext, useRef } from "react";

// Context
import { DarkModeContext } from "../Context/DarkModeProvider";

// Components
import Item from "./Item";

const ItemList = () => {
  const { darkMode } = useContext(DarkModeContext);
  const newItem = useRef("");
  const [items, setItems] = useState(() => {
    // if the items is empty, it will return null
    return JSON.parse(localStorage.getItem("items")) || [];
  });
  const [currentId, setCurrentId] = useState(() => {
    return JSON.parse(localStorage.getItem("currentId") || 0);
  });

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("items"));
    if (storedItems) {
      setItems(storedItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    localStorage.setItem("currentId", JSON.stringify(currentId));
  }, [currentId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // used useRef here instead of useState because we don't need to
    // re-render every time the user enters an input
    const addedItem = {
      content: newItem.current.value,
      isCompleted: false,
      id: currentId,
    };
    // use the functional syntax to prevent issues when
    // setting items multiple times
    // setItems([...items, addedItem]) could add the addedItems multiple times during renders
    setItems((items) => {
      return [...items, addedItem];
    });
    newItem.current.value = "";
    setCurrentId((currentId) => {
      return currentId + 1;
    });
  };

  const handleCheck = (id) => {
    // create a copy of items to modify
    const updatedItems = [...items];
    const selectedIndex = updatedItems.findIndex((item) => {
      return item.id === id;
    });
    updatedItems[selectedIndex].isCompleted =
      !updatedItems[selectedIndex].isCompleted;
    setItems(updatedItems);
  };

  const handleDelete = (id) => {
    let updatedItems = [...items];
    const removeById = (item, index, arr) => {
      if (item.id === id) {
        return false;
      }
      return true;
    };
    // filter method does not mutate original arr but returns a new arr
    updatedItems = updatedItems.filter(removeById);
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
            handleCheck={() => {
              handleCheck(itemInfo.id);
            }}
            handleDelete={() => {
              handleDelete(itemInfo.id);
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
