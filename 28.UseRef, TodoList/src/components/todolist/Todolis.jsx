import React, { useEffect, useState } from 'react'
import style from './todolist.module.css'
import Toast from '../toast/Toast';



const Todolis = () => {
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('data')) || [])
    const [inputValue, setInputValue] = useState(null)
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    console.log(todos);

    function addTask() {

        if (inputValue.trim() !== '') {
            const newTodos = [...todos, { text: inputValue, isTrue: false }];
            setTodos(newTodos)
            localStorage.setItem('data', JSON.stringify(newTodos))
            setInputValue('')
        }
    }
    function toggleLine(index) {
        const newTodos = todos.map((todo, i) => {
            if (i === index) {
                return { ...todo, isTrue: !todo.isTrue };
            }
            return todo;
        });
        setTodos(newTodos);
        localStorage.setItem('data', JSON.stringify(newTodos));
        setToastMessage('Icra olundu !!!');
        setShowToast(true);
    }

    function deleteTask(indexToDelete) {
        const newTodos = todos.filter((item, index) => index !== indexToDelete)
        setTodos(newTodos)
        localStorage.setItem('data', JSON.stringify(newTodos))
        setToastMessage('Deleted !!!');
        setShowToast(true);
    }
    function removeAll() {
        setTodos([])
        localStorage.setItem('data', JSON.stringify([]))
        setToastMessage('Remove All !!!');
        setShowToast(true); 
    }


    return (
        <div>
            <div>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button className={style.addBtn} onClick={addTask}>Add Todo</button>
            </div>

            <div>
                <ul className={style.list_cont}>
                    {todos.map((todo, index) => (
                        <li key={index} className={style.list}>
                            <span style={{ textDecoration: todo.isTrue ? 'line-through' : 'none' , color: todo.isTrue ? 'green':'red' }}>
                             {index+1}.    {todo.text}
                            </span>
                            <div style={{ marginRight: '10px' }}>
                                <button
                                    className={style.removeBtn}
                                    onClick={() => deleteTask(index)}
                                    disabled={todo.isTrue == false}
                                >
                                    remove
                                </button>
                                <button
                                    className={style.editBtn}
                                >
                                    edit
                                </button>
                                <button
                                    className={style.lineBtn}
                                    onClick={() => toggleLine(index)}
                                >
                                    line
                                </button>
                            </div>
                        </li>
                    ))}

                </ul>
                <button  className={style.removeBtn}
                onClick={removeAll}
                >remove all</button>
            </div>
            {showToast && <Toast message={toastMessage} onClose={() => setShowToast(false)} />}
        </div>
    )
}

export default Todolis
