import React, { useState } from 'react';
import styles from "./ToDoList.module.css";

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);
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
        const taskToComplete = tasks[index];
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
        setCompletedTasks(ct => [...ct, taskToComplete]);
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

    return (
        <div className={ styles.toDoList }>
            <div className={styles.inputContainer}>
                <div>
                    <input className={styles.toDoInput}
                        type="text"
                        placeholder='Enter a task...'
                        value={newTask}
                        onChange={handleInputChange} />
                    <button className={styles.addButton}
                            onClick={addTask}>Add</button>
                </div>
            </div>
            <div className={styles.taskContainer}>
                <div className={styles.tasks}>
                    <h2>Tasks</h2>
                    <ol>
                        {tasks.map((task, index) =>
                            <li key={ index }>
                                <div className={ styles.leftButtons }>
                                    <button className={styles.moveButton} onClick={() => moveTaskUp(index)}>
                                        &#8593;
                                    </button>
                                    <button className={styles.moveButton} onClick={() => moveTaskDown(index)}>
                                        &#8595;
                                    </button>
                                </div>
                                <span className={styles.text}>{task}</span>
                                <button className={styles.completeButton} onClick={() => completeTask(index)}>
                                    &#10003;
                                </button>
                                <button className={styles.deleteButton} onClick={() => deleteTask(index)}>
                                    &#10007;
                                </button>
                               
                            </li>)}
                    </ol>
                </div>
                <CompletedTasks tasks={completedTasks} />
            </div>
        </div>
    )
}

function CompletedTasks({ tasks }) {
    return (
        <div className={styles.completedtasks}>
            <h2>Completed Tasks</h2>
            <ol>
                {tasks.map((task, index) =>
                    <li key={index}>
                        <span className={styles.text}><s>{task}</s></span>
                    </li>)}
            </ol>
        </div>
    );
}

export default ToDoList;
