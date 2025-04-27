import React, { useReducer, useState } from 'react'
import "./todolist.css"

const Todolis = () => {

    const reducer = (state, action) => {
        switch (action.type) {
            case "SET_NAME":
                return { ...state, name: action.value };

            case "ADD_TODO":
                if (state.name.trim() === "") return state;
                return {
                    ...state,
                    todos: [...state.todos, { text: state.name.trim(), isTrue: false }],
                    name: ""
                };

            case "DELETE_TODO":
                return { ...state, 
                    todos: state.todos.filter((_, i) => i !== action.index) };

            case "LINE_TODO":
                return {
                    ...state,
                    todos: state.todos.map((todo, i) =>
                        i === action.index ? { ...todo, isTrue: !todo.isTrue } : todo
                    )
                };

            case "REMOVEALL_TODO":
                return { ...state, 
                    todos: [] };

            case "EDIT_TODO":
                return {
                    ...state,
                    todos: state.todos.map((todo, i) =>
                        i === action.index ? { ...todo, text: action.newText } : todo
                    ),
                    name: ""  
                };

            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, {
        name: "",
        todos: [],
    })

    const [editIndex, setEditIndex] = useState(null);

    const AddOrEdit = () => {
        if (editIndex !== null) {
            dispatch({ type: "EDIT_TODO", index: editIndex, newText: state.name });
            setEditIndex(null);
        } else {
            dispatch({ type: "ADD_TODO" });
        }
    }

    const handleEdit = (index) => {
        setEditIndex(index);
        dispatch({ type: "SET_NAME", value: state.todos[index].text });
    }

    return (
        <div className="todo-container">
            <input
                className="todo-input"
                type="text"
                value={state.name}
                onChange={(e) => dispatch({ type: "SET_NAME", value: e.target.value })}
            />
            <button
                className="todo-button"
                type='submit'
                onClick={AddOrEdit}
            >
                {editIndex !== null ? "edit" : "send"}
            </button>

            <ul>
                {state.todos.map((todo, index) => (
                    <li key={index} style={{ textDecoration: todo.isTrue ? 'line-through' : 'none' }}>
                        <span>{todo.text}</span>
                        <div className="todo-actions">
                            <button
                                className="todo-delete"
                                onClick={() => dispatch({ type: "DELETE_TODO", index })}
                            >
                                delete
                            </button>
                            <button
                                className="todo-line"
                                onClick={() => dispatch({ type: "LINE_TODO", index })}
                            >
                                line
                            </button>
                            <button
                                className="todo-edit"
                                onClick={() => handleEdit(index)}
                            >
                                edit
                            </button>
                        </div>
                    </li>
                ))}
            </ul>

            <button
                className='todo-removeall'
                onClick={() => dispatch({ type: "REMOVEALL_TODO" })}
            >
                remove all
            </button>
        </div>
    )
}

export default Todolis
