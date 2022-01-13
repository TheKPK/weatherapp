import React, {useEffect, useState} from "react";
import "./style.css";

// getting the localstorage item
const getLocalData = () => {
    const list = localStorage.getItem("mytodolist");
    if (list) {
        return JSON.parse(list);
    } else {
        return [];
    }
};

const TodoList = () => {
    const [inputData, setInputData] = useState("");
    const [items, setItems] = useState(getLocalData());
    const [isEdited, setIsEdited] = useState("")
    const [toggleButton, setToggleButton] = useState(false)

    //   adding new item to the list
    const addItem = () => {
        if (!inputData) {
            alert("Please enter some text");
        } else if (inputData && toggleButton) {
            const curretElem = items.map(currentElement => {
                if (currentElement.id === isEdited) {
                    return {...currentElement, name: inputData}
                }
                return currentElement;
            });
            setItems(curretElem)
            setInputData('')
            setIsEdited(null)
            setToggleButton(false)

        } else {
            const myNewInputData = {
                id: new Date().getTime().toString(),
                name: inputData,
            };
            setItems([...items, myNewInputData]);
            setInputData("");
        }
    };

    // how to delete items from todolist

    const deleteItem = (id) => {
        const newItems = items.filter((item) => item.id !== id);
        setItems(newItems);
    };

    // updating the input field or item
    const updateItem = (id) => {
        const newItems = items.find((item) => item.id === id);
        console.log(newItems.id);
        setInputData(newItems.name);
        setIsEdited(id)
        setToggleButton(true)
    };

    // remove all items
    const removeAllItems = () => {
        setItems([]);
        setInputData("");
    };

    // adding localstorage data
    const addLocalStorage = (val) => {
        localStorage.setItem("mytodolist", JSON.stringify(val));
    };
    useEffect(() => {
        addLocalStorage(items);
    }, [items]);

    return (
        <div className="main-div">
            <div className="child-div">
                <figure>
                    <img src="./images/todo.svg" alt="todo-logo"/>
                    <figcaption>Add Your List Here</figcaption>
                </figure>
                <div className="addItems">
                    <input
                        type="text"
                        placeholder="❤❤ Add Items"
                        className="form-control"
                        value={inputData}
                        onChange={(e) => setInputData(e.target.value)}
                    /> {toggleButton ? (<i className="far fa-edit add-btn" onClick={addItem}/>) : (
                    <i className="fa fa-plus add-btn" onClick={addItem}/>)}
                    {/*<i className="fa fa-plus add-btn" onClick={addItem}/>*/}
                </div>
                {/* show our item */}
                <div className="showItems">
                    {items.map((item) => {
                        return (
                            <div className="eachItem" key={item.id}>
                                <h3>{item.name}</h3>
                                <div className="todo-btn">
                                    <i className="far fa-edit add-btn" onClick={() => updateItem(item.id)}/>
                                    <i className="far fa-trash-alt add-btn" onClick={() => deleteItem(item.id)}/>
                                </div>
                            </div>
                        );
                    })}
                </div>
                {/* remove all buttons */}
                <div className="showItems">
                    <button
                        className="btn effect04"
                        data-sm-link-text="Remove All"
                        onClick={removeAllItems}
                    >
                        <span>Check List</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TodoList;
