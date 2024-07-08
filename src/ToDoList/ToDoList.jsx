import React, { useState } from 'react';
import styles from "./ToDoList.module.css";

function ToDoList() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask('');
        }
        
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
        
    }

    function completeTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
        
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] =
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] =
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return (<div className={styles.todolist}>
        <h1>To Do List</h1>
        <div>
            <input
                type="text"
                placeholder='Enter a task...'
                value={ newTask }
                onChange={ handleInputChange } />
            <button className={styles.addbutton}
                    onClick={addTask}>Add</button>
        </div>
        <ol>
            { tasks.map((task, index) => 
                <li key={ index }>
                    <span className={ styles.text }>{ task }</span>
                    <button className={styles.completebutton} onClick={() => completeTask(index)}>
                        &#10003;
                    </button>
                    <button className={styles.deletebutton} onClick={() => deleteTask(index)}>
                        &#10007;
                    </button>
                    <button className={styles.movebutton} onClick={() => moveTaskUp(index)}>
                       &#8593;
                    </button>
                    <button className={styles.movebutton} onClick={() => moveTaskDown(index)}>
                        &#8595;
                    </button>
                </li>) }
        </ol>
    </div>)
}

export default ToDoList